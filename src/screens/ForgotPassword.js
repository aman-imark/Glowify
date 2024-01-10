import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity,
   Image, ImageBackground, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook


import ImagePaths from '../utils/ImagePaths';
import styles from '../../AppStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ColorCodes from '../utils/ColorCodes';


const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const handleContinue = () => {
    // Navigate to the desired screen
    navigation.navigate('BottomTabs'); // Replace 'NextScreen' with the name of your next screen
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={ImagePaths.backgroundImage} resizeMode="cover"  style={[styles.backgroundImg, styles.containerStart]}>
          
        <View style={styles.topSection}>
          <View style={{ marginVertical: 25 }} />
          <View>
            <Image source={ImagePaths.logoImage} style={styles.logoImg}/>
          </View>
        </View>
          
        <View style={styles.middleSection}>
        <View style={{marginHorizontal: 20, marginTop: 25}}>
            <Text style={[styles.headerTitle, styles.tc]}>Forgot Password</Text>
            <View style={{ marginVertical: 10 }} />
            

            <Text style={[styles.h6, styles.tc, {opacity: 0.5}]}>Forgot your customers passwords? We'll send you a secure link to create a password to</Text>       
            <View style={{ marginVertical: 5 }} />
            <Text style={[styles.h6, styles.tc]}>Peter@imarkinfotech.com</Text>
            <View style={{ marginVertical: 20 }} />
           

            <View>
              <Text style={[styles.inputTitle, styles.mrtl]}>Email Address</Text>
              <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Enter text"/>
              </View>
            </View>
            <View style={{ marginVertical: 20 }} />


            <View>
              <TouchableOpacity style={[styles.button, {backgroundColor: ColorCodes.blue}]} onPress={handleContinue}>
                <View style={styles.row}>
                    <Text style={[styles.buttonText, {color: ColorCodes.white}]}>Reset password</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <View style={{ marginVertical: 10 }} />
              <Text style={[styles.h6, styles.tc]}>Have a business account?</Text>
              <View style={{ marginVertical: 5 }} />
                <TouchableOpacity onPress={handleContinue}>
                   <Text style={styles.buttonAText}>Sign in as a professional</Text>
                </TouchableOpacity>
            </View>

          </View>
        </View> 

      </ImageBackground>
    </View>
  );
};



export default ForgotPasswordScreen;
