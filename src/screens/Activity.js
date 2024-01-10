import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, ImageBackground,
         TouchableOpacity, Button, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native';

import { StarRatingDisplay } from 'react-native-star-rating-widget';
import styles from '../../AppStyles';
import ColorCodes from '../utils/ColorCodes';

import TopHeader from '../components/TopHeader';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';


const dataA = [
  { id: '1', title: 'ThankYou', type: '1' },
  { id: '2', title: 'AppointmentStatus', type: '2' },
  // { id: '3', title: 'Privacy', type: '3' },
  // { id: '4', title: 'Terms of Service', type: '4' },
  // { id: '4B', title: 'Terms of Use', type: '4B' },
  { id: '5', title: 'Service Details', type: '5' },
  { id: '6', title: 'Location', type: '6' },
  { id: '7', title: 'Treatment', type: '7' },
  { id: '8', title: 'Reviews', type: '8' },
  // { id: '9', title: 'Notification Settings', type: '9' },
  // { id: '10', title: 'My Membership', type: '10' },
  // { id: '11', title: 'Payment Methods', type: '11' },
  // { id: '12', title: 'My Orders', type: '12' },
  // { id: '13', title: 'My Vouchers', type: '13' },
  { id: '14', title: 'Settings', type: '14' },
  { id: '15', title: 'Select Service', type: '15' },
  // { id: '16', title: 'Select Team Member', type: '16' },
  { id: '17', title: 'Select Time', type: '17' },
  // { id: '18', title: 'Review and Confirm', type: '18' },
  // { id: '19', title: 'Checkout', type: '19' },
  // { id: '20', title: 'Add Card', type: '20' },
  { id: '21', title: 'Profile', type: '21' },
  // { id: '22', title: 'My Favourites', type: '22' },/
];


const ActivityScreen = () => {

  const navigation = useNavigation();
  const handleClick = (value) => {
    console.log('Click Value : ', value);

    if(value === '1'){
      navigation.navigate('ThankYou');
    } else if(value === '2'){
      navigation.navigate('AppointmentStatus');
    } else if(value === '3'){
      navigation.navigate('Privacy');
    } else if(value === '4'){
      navigation.navigate('TermsOfService');
    } else if(value === '4B'){
      navigation.navigate('TermsOfUse');
    } else if(value === '5'){
      navigation.navigate('ServiceDetail');
    } else if(value === '6'){
      navigation.navigate('Location');
    } else if(value === '7'){
      navigation.navigate('Treatment');
    } else if(value === '8'){
      navigation.navigate('Reviews');
    } else if(value === '9'){
      navigation.navigate('NotificationSetting');
    } else if(value === '10'){
      navigation.navigate('MyMembership');
    } else if(value === '11'){
      navigation.navigate('PaymentMethod');
    } else if(value === '12'){
      navigation.navigate('MyOrders');
    } else if(value === '13'){
      navigation.navigate('MyVouchers');
    } else if(value === '14'){
      navigation.navigate('Settings');
    } else if(value === '15'){
      navigation.navigate('SelectService');
    } else if(value === '16'){
      navigation.navigate('SelectTeamMember');
    } else if(value === '17'){
      navigation.navigate('SelectTime');
    } else if(value === '18'){
      navigation.navigate('ReviewConfirm');
    } else if(value === '19'){
      navigation.navigate('Checkout');
    } else if(value === '20'){
      navigation.navigate('AddCard');
    } else if(value === '21'){
      navigation.navigate('UserProfile');
    } else if(value === '22'){
      navigation.navigate('MyFavourite');
    }
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
              {/* <Image style={styles.iconImageB} source={item.image} resizeMode="contain" /> */}
              <Icon name="arrow-right" size={30} color={ColorCodes.blue} />
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.h5, {marginLeft: 15}]}>{item.title}</Text>
            </View>
          </View>
        </TouchableOpacity>
  );

  
  return (
    <SafeAreaView style={styles.container}>
    {/* <ScrollView style={styles.scrollView}> */}
      <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <Text style={[styles.headerTitle, {}]}>Activity</Text>
      </View>

      <View style={{ marginVertical: 12, marginHorizontal: 10, marginBottom: 20 }}>
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
        nestedScrollEnabled={true}
      />


      <View style={{ marginVertical: 8 }} />

   
    {/* </ScrollView> */}
    </SafeAreaView>
  )
};



export default ActivityScreen;
