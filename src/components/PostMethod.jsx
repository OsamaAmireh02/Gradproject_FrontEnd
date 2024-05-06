import axios from 'axios';

// Create an Axios instance with a base URL (if needed)
const api = axios.create({
  baseURL: 'http://localhost:8080', // Replace with your API base URL
});


// Function to make an authenticated request
async function PostMethod(endpoint, data) {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token not found. Please authenticate first.');
      return null;
    }

    // Set the Authorization header
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    // Make the request using POST method
    const response = await api.post(endpoint, data);
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error
  }
}

export default PostMethod;


