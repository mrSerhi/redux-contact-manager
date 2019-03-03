import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from "./types";

export const getContacts = () => ({ type: GET_CONTACTS }); // returns dispatch fn with action type

export const deleteContact = id => ({ type: DELETE_CONTACT, payload: id });

export const addContact = contact => ({ type: ADD_CONTACT, payload: contact });
