import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = (token = '') => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const registerInAPI = async userData => {
  const { data } = await instance.post('/users/signup', userData);
  setToken(data.token);
  return data;
};

export const loginInAPI = async userData => {
  const { data } = await instance.post('/users/login', userData);
  setToken(data.token);
  return data;
};

export const logOutInAPI = async () => {
  const { data } = await instance.post('/users/logout');
  setToken('');
  return data;
};

export const getCurrentUser = async token => {
  setToken(token);
  try {
    const { data } = await instance.get('/users/current');
    console.log(data);
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export default instance;
