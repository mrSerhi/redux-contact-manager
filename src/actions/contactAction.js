import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT
} from "./types";
import Axios from "axios";

export const getContacts = () => async dispatch => {
  const response = await Axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  dispatch({ type: GET_CONTACTS, payload: response.data });
}; // returns dispatch fn with action type and with data from the server

export const getContact = id => async dispatch => {
  const response = await Axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  dispatch({ type: GET_CONTACT, payload: response.data });
};

export const deleteContact = id => async dispatch => {
  await Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  dispatch({ type: DELETE_CONTACT, payload: id });
};

export const addContact = contact => async dispatch => {
  const response = await Axios.post(
    "https://jsonplaceholder.typicode.com/users",
    contact
  );
  dispatch({ type: ADD_CONTACT, payload: response.data });
};
