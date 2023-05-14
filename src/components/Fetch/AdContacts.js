import axios from 'axios';

axios.defaults.baseURL = 'https://6460db4afe8d6fb29e387a20.mockapi.io';

export async function AdContacts({ name, number }) {
  const response = axios.post(`/contacts`, { name, number });
  return response;
}