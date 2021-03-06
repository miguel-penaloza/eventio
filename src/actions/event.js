import { createAction } from 'redux-actions';

export const fetchEvents = createAction('FETCH_EVENTS');
export const eventsFetched = createAction('EVENTS_FETCHED');
export const fetchEvent = createAction('FETCH_EVENT');
export const eventFetched = createAction('EVENT_FETCHED');
export const eventError = createAction('EVENT_ERROR');

export const createEvent = createAction('CREATE_EVENT');
export const updateEvent = createAction('UPDATE_EVENT');
export const deleteEvent = createAction('DELETE_EVENT');
export const attendEvent = createAction('ATTEND_EVENT');
export const unattendEvent = createAction('UNATTEND_EVENT');
