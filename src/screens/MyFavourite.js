import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, ImageBackground, Dimensions,
         TouchableOpacity, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import { StarRatingDisplay } from 'react-native-star-rating-widget';
import styles from '../../AppStyles';
import ColorCodes from '../utils/ColorCodes';

import TopHeader from '../components/TopHeader';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can replace this with your preferred icon library

import { useNavigation } from '@react-navigation/native';
import ImagePaths from '../utils/ImagePaths';


const dataA = [
  { id: '1', title: 'Off Cut, Camberwell', image: require('../assets/images/serviceImages/p1.png'), location: 'Islington, London', rating: 4.5, category: 'Barber Shop' },
  { id: '2', title: 'Balance Massage', image: require('../assets/images/serviceImages/p2.png'), location: 'Camberwell, London', rating: 4, category: 'Massage' },
  { id: '3', title: 'Sisters Salon', image: require('../assets/images/serviceImages/p3.png'), location: 'Chelsea, London', rating: 5, category: 'Barber Shop' },
  { id: '4', title: 'ELP Barbershop', image: require('../assets/images/serviceImages/p4.png'), location: 'Islington, London', rating: 2, category: 'Hair Salon' },
  { id: '5', title: 'Off Cut, Camberwell', image: require('../assets/images/serviceImages/p5.png'), location: 'Chelsea, London', rating: 5, category: 'Massage' },
  { id: '6', title: 'Balance Massage', image: require('../assets/images/serviceImages/p6.png'), location: 'Camberwell, London', rating: 3, category: 'Barber Shop' },
];



const MyFavouriteScreen = () => {

    const [rating, setRating] = useState(0);
    const [isToggled, setToggled] = useState(false);

    const handleToggle = () => {
      setToggled(!isToggled);
      // Add your custom logic for handling the toggle state change
    };
  
    const renderItemA = ({ item }) => (
      <TouchableOpacity style={styleA.serviceItem}>
        <ImageBackground source={item.image} style={styleA.serviceImages}  resizeMode="cover">
          <View style={{backgroundColor: 'white', width: 26, height: 26, alignItems: 'center',
           justifyContent: 'center', alignSelf: 'flex-end', borderRadius: 20, marginRight: 10, marginTop: 10}}>
          <TouchableOpacity onPress={handleToggle}>
            <View style={{ padding: 5 }}>
              <Icon
                name={isToggled ? 'heart' : 'heart-o'} // Assuming 'heart' and 'heart-o' are the names of your heart-shaped icons
                size={16}
                color={isToggled ? 'red' : 'black'} // Set the color based on the toggle state
              />
            </View>
          </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={{marginHorizontal: 10, marginVertical: 10}}>
          <Text style={[styles.h6, {}]}>{item.title}</Text>
          <Text style={[styles.p1, {marginVertical: 4, opacity: 0.6}]}>{item.location}</Text>
          
          <View style={{flexDirection: 'row', alignItems:'center'}}>
          <Text style={[styles.p1, {marginRight: 5}]}>{item.rating}</Text>
            <StarRatingDisplay
            rating={item.rating}
            onChange={setRating}
            color={ColorCodes.blue}
            starSize={20}
            style={{marginVertical: 8}}
            />
          </View>
          
          <View style={{flexDirection: 'row'}}>
            <View style={styleA.categoryBox}>
              <Text style={[styles.p1, {}]}>{item.category}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  

  const navigation = useNavigation();
  const handleClick = (value) => {
    console.log('Click Value : ', value);
  };

  const screenHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <Text style={[styles.headerTitle, {}]}>My Favourites</Text>
      </View>

      {/* <View style={{height: screenHeight * 0.76, width: '100%', alignSelf: 'center'}}>
        <View style={[styles.containerCenter, {flex: 1}]}>
          <Image style={{height: 80, width: 80}}  source={ImagePaths.no_fav} resizeMode="contain" />
          <Text style={[styles.h4, styles.lineHeightA, {textAlign: 'center', fontWeight: '600', marginVertical: 15 }]}>Your Favourites is empty</Text>
          <Text style={[styles.h6, styles.lineHeightA, {textAlign: 'center', fontWeight: '500', color: ColorCodes.darkGrey} ]}>
            Lorem ipsum dolor sit amet, consectetur {'\n'}adipiscing elit, sed do eiusmod tempor {'\n'}incididunt ut labore et dolore.
          </Text>

            <View style={{width: '60%', marginVertical: 25}}>
              <TouchableOpacity style={[styles.button, {backgroundColor: ColorCodes.blue}]}>
                <View style={styles.row}>
                    <Text style={[styles.buttonText, {color: ColorCodes.white}]}>Find salons near you</Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>
      </View> */}


      <FlatList
        data={dataA}
        renderItem={renderItemA}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display two columns
        // columnWrapperStyle={styleA.row} // Apply styling to wrap content to next line
        vertical
      />

    </SafeAreaView>
  );

};


const styleA = StyleSheet.create({
  serviceItem: {
    width: 190,
    // height: 280,
    marginHorizontal: 15,
    borderRadius: 10,
    marginVertical: 10,
    borderWidth : 1,
    borderColor: '#D3D3D3',
    overflow: 'hidden'
  },
  serviceImages: {
    width: 190,
    height: 110,
  },
  categoryBox: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    // marginTop: 5,
    marginBottom: 5,
    borderRadius: 5,
    borderColor: '#D3D3D3',
    width: 'auto'
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
  },
});


export default MyFavouriteScreen;
