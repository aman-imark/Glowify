// ApiService.jsv   using fetch

class ApiService {
  static async request(endpoint, method = 'GET', data = null) {
    const apiUrl = 'https://api.example.com'; // Replace with your API base URL
    const url = `${apiUrl}${endpoint}`;

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          // Additional headers if needed
        },
        body: data ? JSON.stringify(data) : null,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      // Handle different error scenarios
      if (error instanceof TypeError && error.message === 'Network request failed') {
        console.error('Network request failed. Please check your internet connection.');
        // Handle network connectivity issues
      } else if (error.name === 'AbortError') {
        console.error('Request aborted by user.');
        // Handle request abortion
      } else {
        console.error('An error occurred:', error.message);
        // Handle other errors
      }

      throw error; // Rethrow the error for the calling code to handle if needed
    }
  }

  static async getUserData(userId) {
    const endpoint = `/users/${userId}`;
    return await this.request(endpoint);
  }

  // Add other API methods as needed
}

export default ApiService;
