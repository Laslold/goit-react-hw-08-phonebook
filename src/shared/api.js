// import axios from 'axios';
import { instance } from './auth-api';
// const instance = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com/contacts',
// });
export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};
export const deleteContacts = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
export const addContacts = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};
