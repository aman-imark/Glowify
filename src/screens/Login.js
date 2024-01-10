import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity,
   Image, ImageBackground, StyleSheet, ScrollView, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook


import ImagePaths from '../utils/ImagePaths';
import styles from '../../AppStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ColorCodes from '../utils/ColorCodes';


const LoginScreen = () => {
  const navigation = useNavigation();
  const handleContinue = () => {
    // Navigate to the desired screen
    navigation.navigate('AddPhone'); // Replace 'NextScreen' with the name of your next screen
  };

  const handleSignInProfessional = () => {
    // Navigate to the desired screen
    navigation.navigate('BottomTabs'); // Replace 'NextScreen' with the name of your next screen
  };

  return (
    <View style={styleA.container}>
      <ImageBackground source={ImagePaths.backgroundImage} resizeMode="cover"  
      style={[styles.backgroundImg, styles.containerStart]}>
      <ScrollView>
        <View style={styles.topSection}>
          <View style={{ marginVertical: 25 }} />
          <View>
            <Image source={ImagePaths.logoImage} style={styles.logoImg}/>
          </View>
        </View>
      
        <View style={styles.middleSection}>
          <View style={{marginHorizontal: 20}}>
            <Text style={[styles.headerTitle, styles.tc]}>Log in or sign up</Text>
            <View style={{ marginVertical: 10 }} />
            

            <Text style={[styles.h6, styles.tc]}>Create an account or log in to book and {'\n'}manage your appointments</Text>       
            <View style={{ marginVertical:20 }} />
           
            <View>
              <TouchableOpacity style={[styles.button, {backgroundColor: ColorCodes.white}]}>
                <View style={styles.row}>
                  <View style={styles.iconContainer}>
                    <Image style={styles.iconImage} source={ImagePaths.fbIcon} resizeMode="contain" />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={[styles.buttonText, {marginLeft: 10}]}>Continue with Facebook</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={{ marginVertical: 8 }} />

              <TouchableOpacity style={[styles.button, {backgroundColor: ColorCodes.white}]}>
                <View style={styles.row}>
                  <View style={styles.iconContainer}>
                    <Image style={styles.iconImage} source={ImagePaths.googleIcon} resizeMode="contain" />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={[styles.buttonText, {marginLeft: 10}]}>Continue with Google</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={{ marginVertical: 8 }} />

              <TouchableOpacity style={[styles.button, {backgroundColor: ColorCodes.white}]}>
                <View style={styles.row}>
                  <View style={styles.iconContainer}>
                    <Image style={styles.iconImage} source={ImagePaths.appleIcon} resizeMode="contain" />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={[styles.buttonText, {marginLeft: 10}]}>Continue with Apple</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            

            <View style={{ marginVertical: 20 }} />
              <View style={styles.row}>
                <View style={styles.line} />
                <Text style={styles.orText}>OR</Text>
                <View style={styles.line} />
              </View>
            <View style={{ marginVertical: 10 }} />



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
                    <Text style={[styles.buttonText, {color: ColorCodes.white}]}>Continue</Text>
                </View>
              </TouchableOpacity>
            </View>


            <View>
              <View style={{ marginVertical: 10 }} />
              <Text style={[styles.h6, styles.tc]}>Have a business account?</Text>
              <View style={{ marginVertical: 5 }} />
              <TouchableOpacity onPressOut={handleSignInProfessional}>
                 <Text style={styles.buttonAText}>Sign in as a professional</Text>
              </TouchableOpacity>
              <View style={{ marginVertical: 10 }} />
            </View>
          </View>
        </View> 

        <View style={styles.bottomSection}>
          <TouchableOpacity> 
            <View style={[styles.row,  styles.containerCenter]}>        
              <Image style={styles.iconImage} source={ImagePaths.supportIcon} resizeMode="contain" />
              <Text style={styles.h6}>  Support</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styleA = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    fontSize: 42,
  },
});


export default LoginScreen;
