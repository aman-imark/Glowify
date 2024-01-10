import React, { useState } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import styles from '../../AppStyles';

const TermsServiceScreen = () => {
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
        <Text style={[styles.headerTitle, {}]}>Terms of Service</Text>
      </View>

      <View>
        <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
          <Text style={[styles.h4, {fontWeight: 600}]}>Who we are</Text>
          <Text style={[styles.h6, styles.lineHeightA, {marginVertical: 8}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</Text>
        </View>
        <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
          <Text style={[styles.h4, {fontWeight: 600}]}>Cookies</Text>
          <Text style={[styles.h6, styles.lineHeightA, {marginVertical: 8}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</Text>
        </View>
        <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
          <Text style={[styles.h4, {fontWeight: 600}]}>Where we send your data</Text>
          <Text style={[styles.h6, styles.lineHeightA, {marginVertical: 8}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</Text>
        </View>       
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};


export default TermsServiceScreen;
