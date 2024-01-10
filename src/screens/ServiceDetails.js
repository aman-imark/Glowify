import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, ImageBackground,
         TouchableOpacity, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import { StarRatingDisplay } from 'react-native-star-rating-widget';
import styles from '../../AppStyles';
import ColorCodes from '../utils/ColorCodes';
import { ProgressBar, RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



const ServiceDetailScreen = () => {

  const navigation = useNavigation();

  const [rating, setRating] = useState(0);

  const buttonData = [
    { 
      label: 'Colours + Highlights', 
      data: [
        {
          title: 'Colours + Highlights',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
          packages: [
            {
              name: 'Color Consultation',
              time: '30min',
              offer: 'Save 0%',
              price: '£40',
              active: ''
            },
            {
              name: 'Colour Correction',
              time: '30min',
              offer: 'Save 0%',
              price: '£40',
              active: ''
            },
            {
              name: 'Freehand / Balayage',
              time: '2h 45min',
              offer: 'Save 0%',
              price: '£40',
              active: ''
            },
            {
              name: 'Full Head Highlights',
              time: '30min',
              offer: 'Save 0%',
              price: '£40',
              active: ''
            }], 
        }],
    },
    { 
      label: 'Cutting + Styling', 
      data: [
        {
          title: 'Cutting + Styling',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
          packages: [
            {
              name: 'Color Consultation',
              time: '30min',
              offer: 'Save 0%',
              price: '£40',
              active: ''
            },
            {
              name: 'Colour Correction',
              time: '30min',
              offer: 'Save 0%',
              price: '£40',
              active: ''
            },
            {
              name: 'Freehand / Balayage',
              time: '2h 45min',
              offer: 'Save 0%',
              price: '£40',
              active: ''
            },
            {
              name: 'Full Head Highlights',
              time: '30min',
              offer: 'Save 0%',
              price: '£40',
              active: ''
            }], 
        }],
    },
    { 
      label: 'Hair Treatments', 
      data: [
        {
          title: 'Hair Treatments',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
          packages: [
            {
              name: 'Color Consultation',
              time: '30min',
              offer: 'Save 0%',
              price: '£40',
              active: ''
            },
            {
              name: 'Colour Correction',
              time: '30min',
              offer: 'Save 0%',
              price: '£40',
              active: ''
            },
            {
              name: 'Freehand / Balayage',
              time: '2h 45min',
              offer: 'Save 0%',
              price: '£40',
              active: ''
            },
            {
              name: 'Full Head Highlights',
              time: '30min',
              offer: 'Save 0%',
              price: '£40',
              active: ''
            }], 
        }],
    },
    // Add more buttons and their data as needed
  ];

  const handleButtonPress = (index) => {
    setSelectedButton(index);
  };

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedButton, setSelectedButton] = useState(0);

  const handlePackageSelect = (packageIndex) => {
    setSelectedPackage(packageIndex);
    // navigation.navigate('SelectTeamMember');
  };



  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <Text style={[styles.headerTitle, {}]}>Off Cut, Camberwell</Text>
        <View style={styles.nrow}>
         <Text style={[styles.h5, {fontWeight: 500}]}>5.0</Text>
         <StarRatingDisplay
          rating={5}
          onChange={setRating}
          color={ColorCodes.blue}
          starSize={30}
          style={{marginVertical: 10, marginHorizontal: 5}}
          />
          <Text style={[styles.h5, {fontWeight: 500, color: ColorCodes.blue}]}>(1,436)</Text>
        </View>
        <Text style={[styles.h6, {fontWeight: 500}]}>Bloomsbury, London | Open until 8:00pm</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styleA.categoryBox}>
            <Text style={[styles.p1, {}]}>Barbershop</Text>
          </View>
        </View>
      </View>


      <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <Text style={[styles.h3, {fontWeight: 600}]}>Services</Text>
      </View>
      <ScrollView style={styles.scrollView}>    
  
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styleA.buttonContainer}>
          {buttonData.map((button, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styleA.button,
                index === selectedButton && styleA.selectedButton,
              ]}
              onPress={() => handleButtonPress(index)}>
              <Text style={[styles.h6, { color: index === selectedButton ? ColorCodes.white : ColorCodes.black }]}>{button.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
  
        <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
          {buttonData[selectedButton].data.map((data, index) => (
            <View key={index}>
                {data.packages.map((packageItem, packageIndex) => (
                  <View key={packageIndex} style={{marginBottom : 20}}>
                  <View style={styleA.cardSelection}>
                    <View>
                    <RadioButton.Item
                          label={packageItem.name}
                          labelStyle={[styles.h5, {fontWeight: 600}]}
                          value={packageIndex}
                          status={selectedPackage === packageIndex ? 'checked' : 'unchecked'}
                          onPress={() => handlePackageSelect(packageIndex)}
                          color={ColorCodes.blue}
                          uncheckedColor="grey"
                          // mode="android"
                    />
                    </View>
                    <View style={{ paddingHorizontal: 16, paddingBottom: 10}}>
                      <Text style={styles.h6}>{packageItem.price}  {packageItem.offer}</Text>
                      <Text style={[styles.p1, {marginVertical: 6, color: ColorCodes.darkGrey}]}>{packageItem.time}</Text>
                    </View>
                  </View>
                  </View>
                ))}
            </View>
          ))}
          <TouchableOpacity style={[styles.button, {backgroundColor: ColorCodes.blue}]}>
            <View style={styles.row}>
                <Text style={[styles.buttonText, {color: ColorCodes.white}]}>See All</Text>
            </View>
          </TouchableOpacity>
        </View>
 
      <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <Text style={[styles.h3, {fontWeight: 600}]}>Team</Text>
      </View>
      <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <Text style={[styles.h3, {fontWeight: 600}]}>Reviews</Text>
      </View>

      <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <Text style={[styles.h3, {fontWeight: 600}]}>Buy</Text>
       <View style={[styles.nrow, styles.containerF]}>
        <View>
          <Text style={[styles.h6]}>Membership</Text>
          <Text style={[styles.p1]}>Buy a bundle of appointments.</Text>
        </View>
        <TouchableOpacity style={[styles.button, {backgroundColor: ColorCodes.white}]}>
           <View style={[styles.row, {width: 100}]}>
               <Text style={[styles.buttonText, {backgroundColor: ColorCodes.white, color: ColorCodes.black}]}>Buy</Text>
           </View>
        </TouchableOpacity>
      </View>
      <View style={{marginVertical: 5}}/>

      <View style={[styles.nrow, styles.containerF]}>
        <View>
          <Text>Vouchers</Text>
          <Text>Treat yourself or a friend to future visits.</Text>
        </View>
        <TouchableOpacity style={[styles.button, {backgroundColor: ColorCodes.blue}]}>
           <View style={[styles.row, {width: 100}]}>
               <Text style={[styles.buttonText, {color: ColorCodes.white}]}>Buy</Text>
           </View>
        </TouchableOpacity>
      </View>
      </View>


      <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <Text style={[styles.h3, {fontWeight: 600}]}>About</Text>
      </View>
      <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <Text style={[styles.h3, {fontWeight: 600}]}>Opening times</Text>
      </View>
      <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <Text style={[styles.h3, {fontWeight: 600}]}>Additional information</Text>
      </View>
      <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <Text style={[styles.h3, {fontWeight: 600}]}>Venues nearby</Text>
      </View>
      <View style={{borderWidth: 0.4, borderColor: ColorCodes.lightGrey}} />
       <View style={[styles.rowB, styles.containerF, {marginVertical: 20, marginHorizontal: 15}]}>
        <View>
           <Text style={[styles.h4, {fontWeight: 600}]}>from £205</Text>
           <Text style={[styles.p1, {fontWeight: 500, marginTop: 0, color: ColorCodes.darkGrey}]}>2 service 5h 30min</Text>
        </View>
        <TouchableOpacity style={[styles.button, {backgroundColor: ColorCodes.blue}]}>
           <View style={[styles.row, {width: 140}]}>
               <Text style={[styles.buttonText, {color: ColorCodes.white}]}>Book Now</Text>
           </View>
        </TouchableOpacity>
       </View>
      </ScrollView>

      
    </SafeAreaView>
  )
};

const styleA = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginHorizontal: 10
  },
  button: {
    height: 42,
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderRadius: 20,
    // marginHorizontal: 10
  },
  selectedButton: {
    color: ColorCodes.white,
    backgroundColor: ColorCodes.blue,
  },
  buttonText: {
    color: 'black',
  },
  cardSelection: {
    borderRadius: 10,
    borderColor: ColorCodes.lightGrey,
    borderWidth: 1
  },
  categoryBox: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 5,
    borderColor: '#D3D3D3',
    width: 'auto'
  },
});
export default ServiceDetailScreen;
