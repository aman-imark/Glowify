import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity,
   Image, ImageBackground, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook


import ImagePaths from '../utils/ImagePaths';
import styles from '../../AppStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ColorCodes from '../utils/ColorCodes';


const WelcomeBackScreen = () => {
  const navigation = useNavigation();
  const handleContinue = () => {
    // Navigate to the desired screen
    navigation.navigate('Forgot'); // Replace 'NextScreen' with the name of your next screen
  };

  const handleForgot = () => {
    // Navigate to the desired screen
    navigation.navigate('Forgot'); // Replace 'NextScreen' with the name of your next screen
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
            <Text style={[styles.headerTitle, styles.tc]}>Welcome back</Text>
            <View style={{ marginVertical: 10 }} />
            

            <Text style={[styles.h6, styles.tc, {opacity: 0.5}]}>Enter your password to log in as</Text>       
            <View style={{ marginVertical: 5 }} />
            <Text style={[styles.h6, styles.tc]}>Peter@imarkinfotech.com</Text>
            <View style={{ marginVertical: 20 }} />
           

            <View>
              <Text style={[styles.inputTitle, styles.mrtl]}>Password</Text>
              <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Enter text"/>
              </View>
            </View>
            <View style={{ marginVertical: 20 }} />


            <View>
              <TouchableOpacity style={[styles.button, {backgroundColor: ColorCodes.blue}]} onPress={handleContinue}>
                <View style={styles.row}>
                    <Text style={[styles.buttonText, {color: ColorCodes.white}]}>Continue</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <View style={{ marginVertical: 10 }} />
                <TouchableOpacity onPress={handleForgot}>
                   <Text style={styles.buttonAText}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>

          </View>
        </View> 

      </ImageBackground>
    </View>
  );
};



export default WelcomeBackScreen;
