import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, ImageBackground, StyleSheet } from 'react-native';

// import LottieView from 'lottie-react-native';

import ImagePaths from '../utils/ImagePaths';
import styles from '../../AppStyles';


// const logoImage = require('../assets/images/logo.png');
// const backgroundImage = require('../assets/images/backgroundImg.png');


const ThankYou = () => {

  const animationRef = React.useRef(null);

  useEffect(() => {
    // Start the animation when the component mounts
    // animationRef.current.play();
  }, []);


  return (
    <View style={styles.container}>
      <ImageBackground
        source={ImagePaths.backgroundImage} resizeMode="cover"  style={[styles.backgroundImg, styles.containerCenter]}>

          <View style={[styles.containerCenter]}>
          {/* <LottieView
            ref={animationRef}
            source={require('../assets/animations/tickBox.json')}
            autoPlay
            loop    
            style={{height: 200, width: 200}}
          /> */}
          <Text style={[styles.lgTitle, styles.tc]}>ThankYou</Text>
         
          </View>
      </ImageBackground>
    </View>
  );
};



export default ThankYou;
