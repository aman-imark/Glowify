import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, ImageBackground,
         TouchableOpacity, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import { StarRatingDisplay } from 'react-native-star-rating-widget';
import styles from '../../AppStyles';
import ColorCodes from '../utils/ColorCodes';

import TopHeader from '../components/TopHeader';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';


const dataA = [
  { id: '1', title: 'Hair & styling', image: require('../assets/images/treatmentImages/1.png'), type: '1' },
  { id: '2', title: 'Nails', image: require('../assets/images/treatmentImages/2.png'), type: '2' },
  { id: '3', title: 'Eyebrows & Lashes', image: require('../assets/images/treatmentImages/3.png'), type: '3' },
  { id: '4', title: 'Massage', image: require('../assets/images/treatmentImages/4.png'), type: '4' },
  { id: '5', title: 'Barbering', image: require('../assets/images/treatmentImages/5.png'), type: '5' },
  { id: '6', title: 'Hair removal', image: require('../assets/images/treatmentImages/6.png'), type: '6' },
  { id: '7', title: 'Facial & skincare', image: require('../assets/images/treatmentImages/7.png'), type: '7' },
  { id: '8', title: 'Injectables & fillers', image: require('../assets/images/treatmentImages/8.png'), type: '8' },
  { id: '9', title: 'Body', image: require('../assets/images/treatmentImages/9.png'), type: '9' },
  { id: '10', title: 'Tattoo & piercing', image: require('../assets/images/treatmentImages/10.png'), type: '10' },
  { id: '11', title: 'Makeup', image: require('../assets/images/treatmentImages/11.png'), type: '11' },
  { id: '12', title: 'Medical & dental', image: require('../assets/images/treatmentImages/12.png'), type: '12' },
  { id: '13', title: 'Counselling & holistic', image: require('../assets/images/treatmentImages/13.png'), type: '13' },
  { id: '14', title: 'Fitness', image: require('../assets/images/treatmentImages/14.png'), type: '14' },
];



const TreatmentScreen = () => {

  const navigation = useNavigation();
  const handleClick = (value) => {
    console.log('Click Value : ', value);

    // Alert.alert('Alert', value, [
    //   {
    //     text: 'Cancel',
    //     onPress: () => console.log('Cancel Pressed'),
    //     style: 'cancel',
    //   },
    //   {text: 'OK', onPress: () => console.log('OK Pressed')},
    // ]);
    // Navigate to the desired screen
    // navigation.navigate('AddPhone'); // Replace 'NextScreen' with the name of your next screen
  };


  const renderItemA = ({ item }) => (
        <TouchableOpacity onPress={() => handleClick(item.type)} style={{backgroundColor: ColorCodes.white, paddingHorizontal: 15, paddingVertical: 10}}>
          <View style={styles.row}>
            <View style={styles.iconContainerB}>
              <Image style={styles.iconImageB} source={item.image} resizeMode="contain" />
              {/* <Icon name="facebook" size={30} color="#316FF6" /> */}
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.h5, {marginLeft: 15}]}>{item.title}</Text>
            </View>
          </View>
        </TouchableOpacity>
  );


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <Text style={[styles.headerTitle, {}]}>Treatment or venue</Text>
      </View>

      <View style={{ marginVertical: 12, marginHorizontal: 15, marginBottom: 20 }}>
          <View>
            <View style={styles.inputContainer}>
              <Icon name="search" color={ColorCodes.lightGrey} size={20} />
              <TextInput
                style={styles.input}
                placeholder="Hair & styling"/>
            </View>
          </View>
      </View>

 
      <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <Text style={[styles.h4, {}]}>Top categories</Text>
      </View>
      <FlatList
        data={dataA}
        renderItem={renderItemA}
        keyExtractor={(item) => item.id}
      />
  


    </SafeAreaView>
  )
};


export default TreatmentScreen;
