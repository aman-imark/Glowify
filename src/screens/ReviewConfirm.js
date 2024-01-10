import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, ImageBackground,
         TouchableOpacity, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import { StarRatingDisplay } from 'react-native-star-rating-widget';
import styles from '../../AppStyles';
import ColorCodes from '../utils/ColorCodes';
import { ProgressBar, RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import ImagePaths from '../utils/ImagePaths';



const ReviewConfirmScreen = () => {

  const navigation = useNavigation();
  const handleConfirm = () => {
    // Navigate to the desired screen
    navigation.navigate('Checkout'); // Replace 'NextScreen' with the name of your next screen
  };


  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
    <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <ProgressBar progress={0.8} color={ColorCodes.blue} />
        <Text style={[styles.p1, {color: ColorCodes.darkGrey, marginVertical: 8}]}>Step 4 of 5</Text>
        <Text style={[styles.headerTitle, {marginVertical: 15}]}>Review and Confirm</Text>
 

    <View style={styleA.mainContainer}>
      {/* Left section - User thumbnail */}
      <View style={styleA.thumbnailContainer}>
        <Image source={require('../assets/images/serviceImages/p1.png')}
          style={styleA.thumbnail}
        />
      </View>

      {/* Right section - Username with description */}
      <View style={styleA.userInfoContainer}>
        <Text style={[styles.h4, {fontWeight: 600}]}>Off Cut, Camberwell</Text>
        <Text style={[styles.h6, {fontWeight: 500, marginTop: 6, color: ColorCodes.darkGrey}]}>Bloomsbury, London</Text>
      </View>
    </View>

    <View style={{paddingVertical: 10}}></View>

    <View style={[styleA.mainContainer, {alignItems: 'flex-start'}]}>
      {/* Left section - User thumbnail */}
      <View style={styleA.thumbnailContainer}>
        <Image source={require('../assets/images/iconImages/activity.png')}
          style={styleA.calIcon}
        />
      </View>

      {/* Right section - Username with description */}
      <View style={styleA.userInfoContainer}>
        <Text style={[styles.h6, {fontWeight: 600}]}>Sat 28 Oct 2023</Text>
        <Text style={[styles.p1, {fontWeight: 500, marginTop: 4, color: ColorCodes.darkGrey}]}>12:15 pm - 12:15 pm</Text>
      </View>
    </View>
    <View style={{marginVertical: 10, borderWidth: 0.3, borderColor: ColorCodes.lightGrey}}></View>

    <View style={styleA.mainContainer}>
      {/* Left section - User thumbnail */}
      <View style={styleA.thumbnailContainer}>
        <Image source={require('../assets/images/dummy_user1.png')}
          style={styleA.calIcon}
        />
      </View>

      {/* Right section - Username with description */}
      <View style={styleA.userInfoContainer}>
        <Text style={[styles.h6, {fontWeight: 600}]}>David Smith</Text>
        <Text style={[styles.p1, {fontWeight: 500, marginTop: 4, color: ColorCodes.darkGrey}]}>Barber</Text>
      </View>
    </View>
    <View style={{marginVertical: 10}}></View>

    <View>
      <Text style={[styles.h3, {fontWeight: 600, marginVertical: 10}]}>Overview</Text>
      <View style={[styles.rowB, styles.containerF]}>
        <Text style={[styles.h6, {fontWeight: 600}]}>Colour Correction</Text>
        <Text style={[styles.h6, {fontWeight: 600}]}>£40</Text>
      </View>
      <Text style={[styles.p1, {fontWeight: 500, marginTop: 0, color: ColorCodes.darkGrey}]}>2h 45min</Text>
      <View style={{marginVertical: 10}}></View>


      <View style={[styles.rowB, styles.containerF]}>
        <Text style={[styles.h6, {fontWeight: 600}]}>Freehand / Balayage</Text>
        <Text style={[styles.h6, {fontWeight: 600}]}>£165</Text>
      </View>
      <Text style={[styles.p1, {fontWeight: 500, marginTop: 0, color: ColorCodes.darkGrey}]}>2h 45min</Text>


      <View style={{marginTop: 20, borderWidth: 0.3, borderColor: ColorCodes.lightGrey}}></View>
      <View style={[styles.rowB, styles.containerF, {marginVertical: 15}]}>
        <Text style={[styles.h6, {fontWeight: 600}]}>Total</Text>
        <Text style={[styles.h6, {fontWeight: 600}]}>£205</Text>
      </View>
      <View style={{borderWidth: 0.4, borderColor: ColorCodes.lightGrey}}></View>
      

      <View style={[styles.rowB, styles.containerF, {marginVertical: 15}]}>
        <Text style={[styles.h6, {fontWeight: 600, color: '#04AE0F'}]}>Pay now</Text>
        <Text style={[styles.h6, {fontWeight: 600, color: '#04AE0F'}]}>£205</Text>
      </View>


      <Text style={[styles.h3, {fontWeight: 600, marginVertical: 10}]}>Promo code</Text>
      <View style={[styles.rowB, styles.containerF, {marginTop: 10, marginBottom: 40}]}>
          <View style={[styles.inputContainer, {flex: 1, marginRight: 20}]}>
            <TextInput style={styles.input} placeholder="Enter Promo Code"/>
          </View>
          <TouchableOpacity style={[styles.button, {backgroundColor: ColorCodes.blue}]}>
            <View style={[styles.row, {width: 140}]}>
                <Text style={[styles.buttonText, {color: ColorCodes.white}]}>Apply</Text>
            </View>
          </TouchableOpacity>
      </View>


      <Text style={[styles.h5, {fontWeight: 600}]}>Cancellation policy</Text>
      <Text style={[styles.p1, styles.lineHeightA, {marginTop: 10, marginBottom: 30}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.</Text>


      <View style={{borderWidth: 0.4, borderColor: ColorCodes.lightGrey}}></View>
      <View style={[styles.rowB, styles.containerF, {marginVertical: 20}]}>
        <View>
           <Text style={[styles.h4, {fontWeight: 600}]}>£205</Text>
           <Text style={[styles.p1, {fontWeight: 500, marginTop: 0, color: ColorCodes.darkGrey}]}>2 service 30min</Text>
        </View>
        <TouchableOpacity style={[styles.button, {backgroundColor: ColorCodes.blue}]} onPress={handleConfirm}>
           <View style={[styles.row, {width: 140}]}>
               <Text style={[styles.buttonText, {color: ColorCodes.white}]}>Confirm</Text>
           </View>
        </TouchableOpacity>
      </View>

    </View>

    </View>
    </ScrollView>
    </SafeAreaView>
  )
};


const styleA= StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  thumbnailContainer: {
    marginTop: 4,
    marginRight: 16,
  },
  thumbnail: {
    width: 90,
    height: 70,
    borderRadius: 5,
  },
  calIcon:{
    width: 20,
    height: 20,
  },
  userInfoContainer: {
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ReviewConfirmScreen;
