import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, ImageBackground,
         TouchableOpacity, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import { StarRatingDisplay } from 'react-native-star-rating-widget';
import styles from '../../AppStyles';
import ColorCodes from '../utils/ColorCodes';

import { useNavigation } from '@react-navigation/native';
import ImagePaths from '../utils/ImagePaths';

import Icon from 'react-native-vector-icons/Feather';



const TopHeader = () => {

  const navigation = useNavigation();

  const handleAvatarClick = () => {
    // Navigate to the desired screen
    // navigation.navigate('BottomTabs'); // Replace 'NextScreen' with the name of your next screen
    navigation.navigate('Login'); 
  };

  return (
     <View style={styleA.header}>
      {/* <TouchableOpacity style={styleA.avatarButton}>
        <Image
          source={ImagePaths.no_user1}
          style={styleA.avatarImage}/>
      </TouchableOpacity> */}

      {/* <Text style={styleA.headerText}></Text> */}
      
      {/* <TouchableOpacity style={styleA.searchButton}>
        <Icon name="search" color={ColorCodes.darkGrey} size={25} />
      </TouchableOpacity> */}

      <View style={{width: '100%', flexDirection: 'row-reverse'}}>
      <TouchableOpacity style={styleA.avatarButton} onPressOut={handleAvatarClick}>
        <Image
          source={ImagePaths.no_user1}
          style={styleA.avatarImage}/>
      </TouchableOpacity>
      </View>
    </View>
  )
};

const styleA = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#000', // Set your desired background color
  },
  avatarButton: {
    padding: 10,
    borderRadius: 50, // Assuming your avatar is a square image, adjust as needed
    backgroundColor: ColorCodes.lightGrey, // Set your desired background color
  },
  avatarImage: {
    width: 30,
    height: 30,
    borderRadius: 50, // Assuming your avatar is a square image, adjust as needed
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', // Set your desired text color
  },
  searchButton: {
    // Add styles for your search button, e.g., background color, padding, etc.
  },
});
export default TopHeader;
