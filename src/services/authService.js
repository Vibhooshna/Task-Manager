// src/services/authService.js
import axios from 'axios';

// Trim any extra spaces from the environment variable
const baseURL = (process.env.REACT_APP_API_URL || 'http://localhost:5000/api').trim();
const API_URL = baseURL + '/auth';

console.log('🔍 API_URL being used:', API_URL);

const login = async (data) => {
  const fullURL = `${API_URL}/login`;
  console.log('🚀 Full login URL:', fullURL);
  
  try {
    const response = await axios.post(fullURL, data);
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    console.error('❌ Login error:', error);
    throw error;
  }
};

const register = async (data) => {
  const response = await axios.post(`${API_URL}/register`, data);
  localStorage.setItem('token', response.data.token);
  return response.data;
};

const logout = () => {
  localStorage.removeItem('token');
};

const authService = { register, login, logout };
export default authService;