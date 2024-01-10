import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, ImageBackground, StyleSheet } from 'react-native';

import ImagePaths from '../utils/ImagePaths';
import styles from '../../AppStyles';


// const logoImage = require('../assets/images/logo.png');
// const backgroundImage = require('../assets/images/backgroundImg.png');


const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    // Use setTimeout to navigate to the LoginScreen after 1 second
    const timeout = setTimeout(() => {
      // navigation.replace('Login');
      navigation.replace('BottomTabs');
    }, 1000);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, [navigation]);


  return (
    <View style={styles.container}>
      <ImageBackground
        source={ImagePaths.backgroundImage} resizeMode="cover"  style={[styles.backgroundImg, styles.containerCenter]}>
           <Image source={ImagePaths.logoImage} style={styles.logoImg}/>
      </ImageBackground>
    </View>
  );
};



export default SplashScreen;
