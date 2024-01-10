import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity,
   Image, ImageBackground, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook


import ImagePaths from '../utils/ImagePaths';
import styles from '../../AppStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ColorCodes from '../utils/ColorCodes';
import PhoneInput from 'react-native-phone-number-input';


const AddPhoneScreen = () => {
  const navigation = useNavigation();
  const handleContinue = () => {
    // Navigate to the desired screen
    navigation.navigate('WelcomeBack'); // Replace 'NextScreen' with the name of your next screen
  };

  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidNumber, setIsValidNumber] = useState(false);
  const phoneInput = React.createRef();

  const handlePhoneChange = (number) => {
    setPhoneNumber(number);
  };

  const handlePress = () => {
    // Perform actions with the validated phone number
    if (isValidNumber) {
      console.log('Validated Phone Number:', phoneNumber);
    } else {
      console.log('Invalid Phone Number');
    }
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
            <Text style={[styles.headerTitle, styles.tc]}>Add phone number</Text>
            <View style={{ marginVertical: 10 }} />
            

            <Text style={[styles.h6, styles.tc]}>Enter your mobile number to finish sign up</Text>       
            <View style={{ marginVertical:20 }} />
           

            {/* <View>
              <Text style={[styles.inputTitle, styles.mrtl]}>Phone number</Text>
              <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Enter text"/>
              </View>
            </View> */}
            <View style={{ marginVertical: 10 }} />

            <View style={styles.inputContainer}>
              <PhoneInput
                ref={phoneInput}
                defaultValue={phoneNumber}
                defaultCode="US"
                layout="first"
                onChangeText={(text) => handlePhoneChange(text)}
                onChangeFormattedText={(text) => setIsValidNumber(phoneInput.current?.isValidNumber(text))}      
                containerStyle={styleA.phoneInputContainer}
                textContainerStyle={styleA.phoneInputTextContainer}
                withDarkTheme
              />
            </View>
            <View style={{ marginVertical: 15 }} />

            <View>
              <TouchableOpacity style={[styles.button, {backgroundColor: ColorCodes.blue}]} onPress={handleContinue}>
                <View style={styles.row}>
                    <Text style={[styles.buttonText, {color: ColorCodes.white}]}>Continue</Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>
        </View> 

      </ImageBackground>
    </View>
  );
};

const styleA = StyleSheet.create({
  phoneInputContainer: {
    backgroundColor: ColorCodes.white,
    alignItems: 'center'
  },
  phoneInputTextContainer: {
    backgroundColor: ColorCodes.white,
  },
});

export default AddPhoneScreen;
