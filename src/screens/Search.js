import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, ImageBackground,
         TouchableOpacity, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import { StarRatingDisplay } from 'react-native-star-rating-widget';
import styles from '../../AppStyles';
import ColorCodes from '../utils/ColorCodes';
import { useNavigation } from '@react-navigation/native';
import ImagePaths from '../utils/ImagePaths';
import Icon from 'react-native-vector-icons/Feather';


const dataA = [
  { id: '1', title: 'Hair & styling', image: require('../assets/images/serviceImages/p6.png'), location: 'Islington, London', rating: 4.5, category: 'Barber Shop' },
  { id: '2', title: 'Nails', image: require('../assets/images/serviceImages/p7.png'), location: 'Camberwell, London', rating: 4, category: 'Massage' },
  { id: '3', title: 'Eyebrows & Lashes', image: require('../assets/images/serviceImages/p8.png'), location: 'Chelsea, London', rating: 5, category: 'Barber Shop' },
  { id: '4', title: 'Massage', image: require('../assets/images/serviceImages/p4.png'), location: 'Islington, London', rating: 2, category: 'Hair Salon' },
  { id: '5', title: 'Barbering', image: require('../assets/images/serviceImages/p5.png'), location: 'Chelsea, London', rating: 5, category: 'Massage' },
  { id: '6', title: 'Hair removal', image: require('../assets/images/serviceImages/p9.png'), location: 'Camberwell, London', rating: 3, category: 'Barber Shop' },
  { id: '7', title: 'Facial & skincare', image: require('../assets/images/serviceImages/p10.png'), location: 'Islington, London', rating: 1.8, category: 'Hair Salon' },
  { id: '8', title: 'Injectables & fillers', image: require('../assets/images/serviceImages/p11.png'), location: 'Islington, London', rating: 1.8, category: 'Hair Salon' },
  { id: '9', title: 'Body', image: require('../assets/images/serviceImages/p12.png'), location: 'Islington, London', rating: 1.8, category: 'Hair Salon' },
  { id: '10', title: 'Tattoo & piercing', image: require('../assets/images/serviceImages/p13.png'), location: 'Islington, London', rating: 1.8, category: 'Hair Salon' },
  { id: '11', title: 'Makeup', image: require('../assets/images/serviceImages/p14.png'), location: 'Islington, London', rating: 1.8, category: 'Hair Salon' },
  { id: '12', title: 'Medical & dental', image: require('../assets/images/serviceImages/p15.png'), location: 'Islington, London', rating: 1.8, category: 'Hair Salon' },
  { id: '13', title: 'Counselling & holistic', image: require('../assets/images/serviceImages/p16.png'), location: 'Islington, London', rating: 1.8, category: 'Hair Salon' },
  { id: '14', title: 'Fitness', image: require('../assets/images/serviceImages/p17.png'), location: 'Islington, London', rating: 1.8, category: 'Hair Salon' },
];


const SearchScreen = () => {

  const [rating, setRating] = useState(0);

  const navigation = useNavigation();
  const handleSearch = () => {
    // Navigate to the desired screen
    navigation.navigate('AddPhone'); // Replace 'NextScreen' with the name of your next screen
  };


  const renderItemA = ({ item }) => (
    <TouchableOpacity style={stylesA.categoryCard}>
      <View style={{height: 100, borderRadius: 8, marginHorizontal: 15, overflow: 'hidden'}}>
        <ImageBackground source={item.image} style={stylesA.cardImage}>
        </ImageBackground>
      </View>
      <View style={{marginHorizontal: 15, marginVertical: 10}}>
        <Text style={[styles.h6, {}]}>{item.title}</Text>
      </View>
    </TouchableOpacity>  
  );

  
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
    <View>
      
      <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <Text style={[styles.headerTitle, {}]}>Search</Text>
      </View>

  
      <View>
      <View style={{ marginVertical: 12, marginHorizontal: 10, marginBottom: 20 }}>
          <View>
            <View style={styles.inputContainer}>
              <Icon name="search" color={ColorCodes.lightGrey} size={20} />
              <TextInput
                style={styles.input}
                placeholder="Any Treatment or Venue"/>
            </View>
          </View>

          <View style={{ marginVertical: 8 }} />
          <View>
            <View style={styles.inputContainer}>
              <Icon name="map-pin" color={ColorCodes.lightGrey} size={20} />
              <TextInput
                style={styles.input}
                placeholder="Current Location"/>
            </View>
          </View>

          <View style={{ marginVertical: 8 }} />
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{width: '48%'}}>
            <View style={styles.inputContainer}>
              <Icon name="calendar" color={ColorCodes.lightGrey} size={20} />
              <TextInput
                style={styles.input}
                placeholder="Any Date"/>
            </View>
          </View>

          <View style={{width: '48%'}}>
            <View style={styles.inputContainer}>
              <Icon name="clock" color={ColorCodes.lightGrey} size={20} />
              <TextInput
                style={styles.input}
                placeholder="Any Time"/>
            </View>
          </View>
          </View>


    
            <View style={{ marginVertical: 15 }} />

            <View>
              <TouchableOpacity style={[styles.button, {backgroundColor: ColorCodes.blue}]} onPress={handleSearch}>
                <View style={styles.row}>
                    <Text style={[styles.buttonText, {color: ColorCodes.white}]}>Search</Text>
                </View>
              </TouchableOpacity>
            </View>
      </View>
      </View>





      <View>
        <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
          <Text style={[styles.h4, {}]}>Categories</Text>
        </View>
        <FlatList
          data={dataA}
          renderItem={renderItemA}
          keyExtractor={(item) => item.id}
          numColumns={2} // Display two columns
          columnWrapperStyle={stylesA.row} // Apply styling to wrap content to next line
        />
      </View>

      <View style={{ marginVertical: 8 }} />

    </View>
    </ScrollView>
    </SafeAreaView>
  )
};

const stylesA = StyleSheet.create({
  serviceItem: {
    width: 210,
    // height: 280,
    marginHorizontal: 15,
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


  icon: {
    width: 20, // Adjust the width of the icon as needed
    height: 20, // Adjust the height of the icon as needed
    // paddingLeft: 10, // Adjust the margin as needed to separate the icon and TextInput
  },


});
export default SearchScreen;
