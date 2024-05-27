import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

async function makeAuthenticatedRequest(endpoint) {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token not found. Please authenticate first.');
      return null;
    }

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const response = await api.get(endpoint);
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export default makeAuthenticatedRequest


