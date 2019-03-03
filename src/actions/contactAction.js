import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from "./types";
import Axios from "axios";

export const getContacts = () => async dispatch => {
  const response = await Axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  dispatch({ type: GET_CONTACTS, payload: response.data });
}; // returns dispatch fn with action type and with data from the server

export const deleteContact = id => ({ type: DELETE_CONTACT, payload: id });

export const addContact = contact => ({ type: ADD_CONTACT, payload: contact });
