// ExampleComponent.js

import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import apiService from './apiService'; // Adjust the path based on your project structure

const ExampleComponent = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await apiService.get('/example-endpoint');
      console.log('API Response:', response);
    } catch (error) {
      console.error('API Error:', error);
    }
  };

  return (
    <View>
      <Text>Hello, this is an example component!</Text>
      <Button title="Fetch Data" onPress={fetchData} />
    </View>
  );
};

export default ExampleComponent;
