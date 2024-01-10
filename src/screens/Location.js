import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, ImageBackground,
         TouchableOpacity, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import { StarRatingDisplay } from 'react-native-star-rating-widget';
import styles from '../../AppStyles';
import ColorCodes from '../utils/ColorCodes';
import Icon from 'react-native-vector-icons/Feather';
import ImagePaths from '../utils/ImagePaths';

const LocationScreen = () => {


  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>    
    <View>
      
      <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <Text style={[styles.headerTitle, {}]}>Location</Text>
      </View>

      <View style={{ marginVertical: 12, marginHorizontal: 15, marginBottom: 20 }}>
          <View>
            <View style={styles.inputContainer}>
              <Icon name="map-pin" color={ColorCodes.lightGrey} size={20} />
              <TextInput
                style={styles.input}
                placeholder="Camberwell"/>
            </View>
          </View>

        <TouchableOpacity> 
          <View style={[styles.row]}>        
            <Image style={[styles.iconImage, {height: 18, marginLeft: 8}]} source={ImagePaths.locationArrow} resizeMode="contain" />
            {/* <Icon name="information" size={20} color={ColorCodes.black} /> */}
            <Text style={[styles.h6, {color: ColorCodes.blue}]}>  Use my location</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
    </ScrollView>
    </SafeAreaView>
  )
};


export default LocationScreen;
