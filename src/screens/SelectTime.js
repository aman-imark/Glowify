import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, ImageBackground,
         TouchableOpacity, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import { StarRatingDisplay } from 'react-native-star-rating-widget';
import styles from '../../AppStyles';
import ColorCodes from '../utils/ColorCodes';
import { ProgressBar, RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const SelectTimeScreen = () => {
  
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
    <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <ProgressBar progress={0.6} color={ColorCodes.blue} />
        <Text style={[styles.p1, {color: ColorCodes.darkGrey, marginVertical: 8}]}>Step 3 of 5</Text>
        <Text style={[styles.headerTitle, {marginVertical: 15}]}>Select Time</Text>
 
    </View>
    </ScrollView>
    </SafeAreaView>
  )
};


export default SelectTimeScreen;
