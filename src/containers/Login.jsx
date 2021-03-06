import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from '../containers/Header';
import { loginUser } from '../actions/account';
import phantomGray from '../assets/images/phantomGray.png';
import Input from '../components/Input';
import Button from '../components/Button';

const Panel = styled.div`
    display: flex;
    position: relative;
    top: -40px;
`;


const Phantom = styled.div`
    width: 30%;

    img {
		width: 30%;
		height: 100%;
		margin-bottom: -50px;
		position: fixed;
    }
`;

const LoginPage = styled.div`
    width: 35%;
    margin: 250px auto;
    font-family: 'Hind-Light';

    h1 {
        color: #353535;
        font-size: 22px;
        margin-bottom: 0;
    }

    p {
        font-family: 'Hind-Regular';
        margin-top: 0;
        font-size: 16px;
        color: ${props => props.error ? '#ff6297':'#7d7d7d'};
	}
	
	input {
		border-color: ${props => props.error ? '#ff6297':'#cac9c9'};
	}

	button {
		margin-top: 40px;
	}
`;


export class Login extends Component {
	
	constructor (props){
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	login() {
		const { dispatch } = this.props;
		const {email, password} = this.state;
		dispatch(loginUser({
			data: {
				email,
				password
			}
		}));
	}
    
	checkAuth(){
		const authId = window.sessionStorage.getItem('id');
		if(authId){
			window.location = '/';
		}
	}
    
	render(){
		const { error } = this.props;
		this.checkAuth();
		return (
			<div>
				<Header
					light
				/>
				<Panel>
					<Phantom>
						<img src={phantomGray} alt={'logo'}/> 
					</Phantom>
					<LoginPage
						error={error}
					>
						
						<h1>Sign In to Eventio.</h1>
						{error ?
							<p>Oops! That email and password combination is not valid.</p>
							:
							<p>Enter your details below</p>
						}
						
						<form autoComplete="off">
							<Input 
								value={this.state.email}
								onChange={({ target })=> {
									this.setState({email: target.value });
								}} 
								title="Email" 
								autoComplete="off"
								type="email"
							/>		
							<Input 
								value={this.state.password}
								title="Password" 
								type="password"
								autoComplete="off"
								onChange={({ target })=> this.setState({password: target.value })} 
							/>
						</form>
						<div><Button onClick={()=> this.login()}>SIGN IN</Button></div>
					</LoginPage>
				</Panel>
			</div>
		);
	}
}

Login.propTypes = {
	authUser: PropTypes.object,
	dispatch: PropTypes.func,
	history: PropTypes.object,
	error: PropTypes.string
};

export const mapStateToProps = (state) => ({
	authUser: state.account.authUser,
	error: state.account.error
});


export default connect(mapStateToProps)(Login);
