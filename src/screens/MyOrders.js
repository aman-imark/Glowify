import React, { useState } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, 
         Dimensions, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../../AppStyles';
import ImagePaths from '../utils/ImagePaths';
import ColorCodes from '../utils/ColorCodes';



const MyOrdersScreen = () => {
  const screenHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>    
    <View>
      
      <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <Text style={[styles.headerTitle, {}]}>My Orders</Text>
      </View>

      <View style={{height: screenHeight * 0.76, width: '100%', alignSelf: 'center'}}>
        <View style={[styles.containerCenter, {flex: 1}]}>
          <Image style={{height: 80, width: 80}}  source={ImagePaths.orderImg} resizeMode="contain" />
          <Text style={[styles.h4, styles.lineHeightA, {textAlign: 'center', fontWeight: '600', marginVertical: 15 }]}>There are no Orders</Text>
          <Text style={[styles.h6, styles.lineHeightA, {textAlign: 'center', fontWeight: '500', color: ColorCodes.darkGrey} ]}>
            Lorem ipsum dolor sit amet, consectetur {'\n'}adipiscing elit, sed do eiusmod tempor {'\n'}incididunt ut labore et dolore.
          </Text>

            <View style={{width: '60%', marginVertical: 25}}>
              <TouchableOpacity style={[styles.button, {backgroundColor: ColorCodes.blue}]}>
                <View style={styles.row}>
                    <Text style={[styles.buttonText, {color: ColorCodes.white}]}>Find salons near you</Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>

      </View>

    </View>
    </ScrollView>
    </SafeAreaView>
  );
};


const styleA = StyleSheet.create({
  iconImage: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
  },
});

export default MyOrdersScreen;
