import axios from 'axios';
import { toast } from 'react-toastify';
import { decodeToken } from 'react-jwt';

// URLs
const loginUrl = 'http://localhost:5000/login';
const registerUrl = 'http://localhost:5000/register';

let Token = window.localStorage.getItem('token');
if (Token) Token = Token.replaceAll('"', '');

const createConfig = (url, body, method) => {
  const config = {
    method,
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${Token}`,
    },
    data: body,
  };
  return config;
};

export async function loginCheck(obj) {
  try {
    const config = createConfig(loginUrl, obj, 'post');
    const loginResponse = await axios(config);
    if (loginResponse.status === 200) {
      const token = JSON.stringify(loginResponse.data.message.token);
      if (!token) return toast.error(loginResponse.data.message);
      window.localStorage.setItem('token', token);
      if (loginResponse.data.message.token.utype === 'admin') window.location.href = '/dashboard';
      else window.location.href = '/customer';
      return toast.success('Login Success');
    }
    throw new Error(loginResponse);
  } catch (error) {
    return toast.error('Failed to Login. Please try again later.');
  }
}

export async function registerApi(obj) {
  try {
    const config = createConfig(registerUrl, obj, 'post');
    const res = await axios(config);
    if (res.status === 200) {
      return toast.success('Registration Success');
    }
    throw new Error(res);
  } catch (error) {
    return toast.error('Failed to Register. Please try again later.');
  }
}
