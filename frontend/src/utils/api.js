import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchQuestions = async (count = 2) => {
  const response = await api.get(`/questions?count=${count}`);
  return response.data;
};

export const getSolution = async (questionTitle, language) => {
  const response = await api.post('/solution', { questionTitle, language });
  return response.data;
};

export default api;
