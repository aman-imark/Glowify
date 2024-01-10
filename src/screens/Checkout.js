import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, ImageBackground,
         TouchableOpacity, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import { StarRatingDisplay } from 'react-native-star-rating-widget';
import styles from '../../AppStyles';
import ColorCodes from '../utils/ColorCodes';
import { ProgressBar, RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



const CheckoutScreen = () => {

  const navigation = useNavigation();

  const [selectedCard, setSelectedCard] = useState(null);
  const [value, setValue] = React.useState('first');
 
 
 
  const handleAddCard = () => {
    navigation.navigate('AddCard');
  }

  const handlePayNow = () => {
    navigation.navigate('AppointmentStatus');
  }


  const cardData = [
      {
        id: 1,
        maskedCard: '4722XXXXXXXX8285',
        cardType: require('../assets/images/iconImages/visa.png'),
        active: ''
      },
      {
        id: 2,
        maskedCard: '5305XXXXXXXX9895',
        cardType: require('../assets/images/iconImages/mastercard.png'),
        active: ''
      },
      // Add more data as needed
  ];


  const handlePackageSelect = (index) => {
    setSelectedCard(index);
    // navigation.navigate('SelectTeamMember');
  }



  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
    <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <ProgressBar progress={1} color={ColorCodes.blue} />
        <Text style={[styles.p1, {color: ColorCodes.darkGrey, marginVertical: 8}]}>Step 5 of 5</Text>
        <Text style={[styles.headerTitle, {marginVertical: 15}]}>Checkout</Text>
 
    <View style={{backgroundColor: '#FAF6FF', paddingVertical: 4, paddingHorizontal: 15, borderRadius: 8}}>
    <View style={styleA.mainContainer}>
      {/* Left section - User thumbnail */}
      <View style={styleA.thumbnailContainer}>
        <Image source={require('../assets/images/serviceImages/p1.png')}
          style={styleA.thumbnail}
        />
      </View>

      {/* Right section - Username with description */}
      <View style={styleA.userInfoContainer}>
        <Text style={[styles.h5, {fontWeight: 600}]}>Off Cut, Camberwell</Text>
        <Text style={[styles.p1, {fontWeight: 500, marginTop: 6, color: ColorCodes.darkGrey}]}>Bloomsbury, London</Text>
      </View>
    </View>

    <View style={{paddingVertical: 10}}></View>
    <View>
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
        <Text style={[styles.h4, {fontWeight: 600}]}>Total</Text>
        <Text style={[styles.h4, {fontWeight: 600}]}>£205</Text>
      </View>
    </View>
    </View>


    <View style={{paddingVertical: 20}}></View>
    
    <View style={[styles.nrow, styles.containerF]}>
       <Text style={[styles.h4, {fontWeight: 600}]}>Select card</Text>
       <View>
       <TouchableOpacity onPressOut={handleAddCard}>
            <Text style={styles.buttonAText}>Add credit/debit card</Text>
        </TouchableOpacity>
      </View>
    </View>

 
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
    {cardData.map((item, index) => (
          <View key={index} style={[styles.nrow, {marginTop : 20, padding: 20, borderRadius: 6, borderWidth: 1, borderColor: '#0000001A'}]}>
             <RadioButton value={item.id} />
             <View style={[styles.nrow, {marginLeft: 10}]}>
                <Image source={item.cardType} style={{height: 30, width: 40}} resizeMode='contain'/>
                <Text style={[styles.h5, {fontWeight: 500, marginLeft: 20}]}>{item.maskedCard}</Text>
             </View>
          </View>
    ))}
    </RadioButton.Group>


    <View style={{paddingVertical: 20}}></View>
    <View>
      <TouchableOpacity style={[styles.button, {backgroundColor: ColorCodes.blue}]} onPressOut={handlePayNow}>
        <View style={styles.row}>
            <Text style={[styles.buttonText, {color: ColorCodes.white}]}>Pay Now</Text>
        </View>
      </TouchableOpacity>
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

export default CheckoutScreen;
