// ExampleComponent.js  for Fetch 

import React, { useEffect } from 'react';
import ApiService from './ApiService';

const MyComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await ApiService.getUserData(123);
        console.log('User data:', userData);
      } catch (error) {
        // Handle errors here if needed
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchData();

    // Optionally, you can also abort the request after a certain timeout
    const timeoutId = setTimeout(() => {
      // This will cause the request to be aborted
      // The catch block in the fetchData function will handle it
      controller.abort();
    }, 5000); // Set timeout duration in milliseconds

    // Clear the timeout when the component is unmounted or the request is complete
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    // Your component JSX
  );
};

export default MyComponent;
