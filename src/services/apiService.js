// apiService.js

import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  timeout: 10000, // Set a reasonable timeout value in milliseconds
});

// Interceptor for handling request
apiService.interceptors.request.use(
  (config) => {
    // Add headers or modify request config as needed
    // Example: config.headers['Authorization'] = 'Bearer ' + token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor for handling response
apiService.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Handle common HTTP error statuses
    if (error.response) {
      console.log('HTTP Error Status:', error.response.status);
      console.log('Response Data:', error.response.data);
    }

    // Handle network errors
    if (error.request) {
      console.log('Network Error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default apiService;
