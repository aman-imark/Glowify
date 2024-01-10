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
  { id: '1', title: 'Notifications', iconA: 'bell', type: '1' },
  { id: '2', title: 'Social Logins', iconA: 'share-2', type: '2' },
  { id: '3', title: 'Privacy Policy', iconA: 'arrow-up-right', type: '3' },
  { id: '4', title: 'Terms of Service', iconA: 'arrow-up-right', type: '4' },
  { id: '5', title: 'Terms of Use', iconA: 'arrow-up-right', type: '5' },
];



const SettingsScreen = () => {

  const navigation = useNavigation();
  
  const handleClick = (value) => {
    console.log('Click Value : ', value);
    if(value === '1'){
      navigation.navigate('NotificationSetting');
    } else if(value === '2'){
      navigation.navigate('SocialLoginSetting');
    } else if(value === '3'){
      navigation.navigate('Privacy');
    } else if(value === '4'){
      navigation.navigate('TermsOfService');
    } else if(value === '5'){
      navigation.navigate('TermsOfUse');
    }
  };

  const renderItemA = ({ item }) => (
      <TouchableOpacity onPress={() => handleClick(item.type)} style={{backgroundColor: ColorCodes.white, 
      paddingHorizontal: 15, paddingVertical: 10, borderBottomColor: ColorCodes.lightGrey, borderBottomWidth: 0.5}}>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          <View style={styles.row}>
          <View>
            <Icon name={item.iconA} size={25} color={ColorCodes.black} />
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
        <Text style={[styles.headerTitle, {}]}>Settings</Text>
      </View>

      <FlatList
        data={dataA}
        renderItem={renderItemA}
        keyExtractor={(item) => item.id}
      />

      <View style={{width: '60%', alignSelf: 'center', marginVertical: 20}}>
            <TouchableOpacity style={[styles.button, {backgroundColor: ColorCodes.blue}]}>
              <View style={styles.row}>
                  <Text style={[styles.buttonText, {color: ColorCodes.white}]}>Logout</Text>
              </View>
            </TouchableOpacity>
            <View style={{ marginVertical: 15 }} />
            <TouchableOpacity>
               <Text style={[styles.buttonAText, {color: ColorCodes.red}]}>Delete account</Text>
            </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
};


export default SettingsScreen;
