import React, { useState } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import styles from '../../AppStyles';
import ColorCodes from '../utils/ColorCodes';

const SupportScreen = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const handleLogin = () => {
  //   // Perform login logic here
  //   console.log('Login pressed. Username:', username, 'Password:', password);
  //   // You can add your authentication logic here
  // };

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>    
    <View>
      
      <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <Text style={[styles.headerTitle, {}]}>Support</Text>
      </View>

      <View>
        <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
          <Text style={[styles.h5, {fontWeight: 500, color: ColorCodes.darkGrey}]}>Comming soon, Working..</Text>
        </View>

      </View>

    </View>
    </ScrollView>
    </SafeAreaView>
  );
};


export default SupportScreen;
