import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, ImageBackground,
         TouchableOpacity, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import { StarRatingDisplay } from 'react-native-star-rating-widget';
import styles from '../../AppStyles';
import ColorCodes from '../utils/ColorCodes';

import TopHeader from '../components/TopHeader';
import Icon from 'react-native-vector-icons/Feather';
import IconB from 'react-native-vector-icons/MaterialIcons';


import { useNavigation } from '@react-navigation/native';
import ImagePaths from '../utils/ImagePaths';


const dataA = [
  { id: '1', title: 'Favourites', iconA: require('../assets/images/iconImages/fav.png'), type: '1' },
  { id: '2', title: 'Vouchers', iconA: require('../assets/images/iconImages/voucher.png'), type: '2' },
  { id: '3', title: 'Memberships', iconA: require('../assets/images/iconImages/membership.png'), type: '3' },
  { id: '4', title: 'Chat', iconA: require('../assets/images/iconImages/chatbubble.png'), type: '4' },
  { id: '5', title: 'Orders', iconA: require('../assets/images/iconImages/orderbag.png'), type: '5' },
  { id: '6', title: 'Payment Methods', iconA: require('../assets/images/iconImages/paycard.png'), type: '6' },
  { id: '7', title: 'Settings', iconA: require('../assets/images/iconImages/setting.png'), type: '7' },
  { id: '8', title: 'Support', iconA: require('../assets/images/iconImages/support.png'), type: '8' }
];



const UserProfileScreen = () => {

  const navigation = useNavigation();

  const handleClick = (value) => {
    console.log('Click Value : ', value);

    if(value === '1'){
      navigation.navigate('MyFavourite');
    } else if(value === '2'){
      navigation.navigate('MyVouchers');
    } else if(value === '3'){
      navigation.navigate('MyMembership');
    } else if(value === '4'){
      navigation.navigate('Chat');
    } else if(value === '5'){
      navigation.navigate('MyOrders');
    } else if(value === '6'){
      navigation.navigate('PaymentMethod');
    } else if(value === '7'){
      navigation.navigate('Settings');
    } else if(value === '8'){
      navigation.navigate('Support');
    }
  };


  const renderItemA = ({ item }) => (
      <TouchableOpacity onPress={() => handleClick(item.type)} style={{backgroundColor: ColorCodes.white, 
      paddingHorizontal: 15, paddingVertical: 10, borderBottomColor: ColorCodes.lightGrey, borderBottomWidth: 0.5}}>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          <View style={styles.row}>
          <View>
            <Image source={item.iconA}  style={{height: 22, width: 35}} resizeMode='contain'/>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.h5, {marginLeft: 15}]}>{item.title}</Text>
          </View>
          </View>
          <View>
            <Icon name="chevron-right" size={25} color={ColorCodes.black} />
          </View>
        </View>
      </TouchableOpacity>
  );


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <Text style={[styles.headerTitle, {}]}>Profile</Text>
      </View>

      <View style={{ marginTop: 12, marginBottom: 25, marginHorizontal: 15 }}>
      <TouchableOpacity style={{borderWidth: 1, borderColor: ColorCodes.lightGrey, borderRadius: 8,        
        paddingHorizontal: 15, paddingVertical: 30}}>
          <View style={styles.row}>
            <View>
              <Image style={{height: 80}} source={ImagePaths.dummy_user1} resizeMode="contain" />
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.h3, {marginLeft: 15, fontWeight: 600}]}>David Smith</Text>
              <Text style={[styles.p1, {marginLeft: 15, marginTop: 3, marginBottom: 6}]}>davidsmith123@gmail.com</Text>
              <TouchableOpacity>
                 <Text style={[styles.buttonAText, {marginLeft: 15, fontWeight: 600}]}>Edit profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
        
      <FlatList
        data={dataA}
        renderItem={renderItemA}
        keyExtractor={(item) => item.id}
      />

    </SafeAreaView>
  )
};


export default UserProfileScreen;
