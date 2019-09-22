import { 
  GET_CONTACTS, 
  DELETE_CONTACT, 
  ADD_CONTACT, 
  GET_CONTACT, 
  UPDATE_CONTACT 
} from './types';
import axios from 'axios';

const HOSTNAME = 'https://jsonplaceholder.typicode.com';

export const getContacts = () => async dispatch => {
  const res = await axios.get(`${HOSTNAME}/users`);

  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};

export const getContact = (id) => async dispatch => {
  const res = await axios.get(`${HOSTNAME}/users/${id}`);

  dispatch({
    type: GET_CONTACT,
    payload: res.data
  });
};

export const deleteContact = (id) => async dispatch => {
  await axios.delete(`${HOSTNAME}/users/${id}`);

  dispatch ({
    type: DELETE_CONTACT,
    payload: id
  });
};

export const addContact = (contact) => async dispatch => {
  const res = await axios.post(`${HOSTNAME}/users`, contact);

  dispatch ({
    type: ADD_CONTACT,
    payload: res.data
  });
};

export const updateContact = (contact) => async dispatch => {
  const res = await axios.put(`${HOSTNAME}/users/${contact.id}`, contact);

  dispatch ({
    type: UPDATE_CONTACT,
    payload: res.data
  });
};

