import axios from 'axios';
import { toast } from 'react-toastify';
import { decodeToken } from 'react-jwt';

// URLs
const loginUrl = 'http://localhost:5000/login';

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
      const token = JSON.stringify(loginResponse.data.token);
      if (!token) return toast.error(loginResponse.data.message);
      window.localStorage.setItem('token', token);
      window.location.href = '/dashboard';
      return toast.success('Login Success');
    }
    throw new Error(loginResponse);
  } catch (error) {
    return toast.error('Failed to Login. Please try again later.');
  }
}
