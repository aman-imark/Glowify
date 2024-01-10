import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, ImageBackground,
         TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import { StarRatingDisplay } from 'react-native-star-rating-widget';
import styles from '../../AppStyles';
import ColorCodes from '../utils/ColorCodes';
import { ProgressBar, RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



const SelectServiceScreen = () => {
  const [selectedButton, setSelectedButton] = useState(0);

  const navigation = useNavigation();


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

  const handlePackageSelect = (packageIndex) => {
    setSelectedPackage(packageIndex);
    navigation.navigate('SelectTeamMember');
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <ProgressBar progress={0.2} color={ColorCodes.blue} />
        <Text style={[styles.p1, {color: ColorCodes.darkGrey, marginVertical: 8}]}>Step 1 of 5</Text>
        <Text style={[styles.headerTitle, {marginVertical: 15}]}>Select Service</Text>
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
           <Text style={[styles.h4, {fontWeight: 600}]}>{data.title}</Text>
           <Text style={[styles.p1, styles.lineHeightA, {marginVertical: 10}]}>{data.description}</Text>
        </View>
        ))}

        <View>
        {buttonData[selectedButton].data.map((data, index) => (
          <View key={index}>
              {data.packages.map((packageItem, packageIndex) => (
                <View key={packageIndex} style={{marginVertical : 10}}>
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
        </View>
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
  }
});

export default SelectServiceScreen;
