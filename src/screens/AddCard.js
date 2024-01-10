import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, ImageBackground,
         TouchableOpacity, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import { StarRatingDisplay } from 'react-native-star-rating-widget';
import styles from '../../AppStyles';
import ColorCodes from '../utils/ColorCodes';



const AddCardScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
 
      <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <Text style={[styles.headerTitle, {}]}>Add Card</Text>
      </View>

      <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
          <View>
            <Text style={[styles.inputTitle, styles.mrtl]}>Name on card <Text style={{color: '#FF003D'}}>*</Text></Text>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Janni Kavin"/>
            </View>
          </View>

          <View style={{ marginVertical: 10 }} />

          <View>
            <Text style={[styles.inputTitle, styles.mrtl]}>Card number <Text style={{color: '#FF003D'}}>*</Text></Text>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="2536 3587 5300 5682"/>
            </View>
          </View>

          <View style={{ marginVertical: 10 }} />
            <View style={[styles.nrow, styles.containerF]}>
            <View style={{width: '42%'}}>
              <Text style={[styles.inputTitle, styles.mrtl]}>Valid <Text style={{color: '#FF003D'}}>*</Text></Text>
              <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="01/12"/>
              </View>
            </View>
            <View style={{width: '42%'}}>
              <Text style={[styles.inputTitle, styles.mrtl]}>CVV <Text style={{color: '#FF003D'}}>*</Text></Text>
              <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="545"/>
              </View>
            </View>
          </View>

          <View style={{ marginVertical: 15 }} />

          <View>
            <TouchableOpacity style={[styles.button, {backgroundColor: ColorCodes.blue}]}>
              <View style={styles.row}>
                  <Text style={[styles.buttonText, {color: ColorCodes.white}]}>Save</Text>
              </View>
            </TouchableOpacity>
          </View>
      </View>

    </ScrollView>
    </SafeAreaView>
  )
};

const styless = StyleSheet.create({
  serviceItem: {
    width: 210,
    // height: 280,
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth : 1,
    borderColor: '#D3D3D3',
    overflow: 'hidden'
  },
  serviceImages: {
    width: 210,
    height: 140,
  },
  categoryBox: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#D3D3D3',
    width: 'auto'
  },
  categoryCard: {
    flex: 1,
    marginVertical: 10,
  },
  cardImage: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    borderRadius: 8,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
export default AddCardScreen;
