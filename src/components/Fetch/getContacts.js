import axios from 'axios';

axios.defaults.baseURL = 'https://6460db4afe8d6fb29e387a20.mockapi.io';

export async function getContacts() {
  const response = axios.get('/contacts');
  return response;
}