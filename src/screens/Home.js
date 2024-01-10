import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, ImageBackground,
         TouchableOpacity, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import { StarRatingDisplay } from 'react-native-star-rating-widget';
import styles from '../../AppStyles';
import ColorCodes from '../utils/ColorCodes';


const dataA = [
  { id: '1', title: 'Off Cut, Camberwell', image: require('../assets/images/serviceImages/p1.png'), location: 'Islington, London', rating: 4.5, category: 'Barber Shop' },
  { id: '2', title: 'Balance Massage', image: require('../assets/images/serviceImages/p2.png'), location: 'Camberwell, London', rating: 4, category: 'Massage' },
  { id: '3', title: 'Sisters Salon', image: require('../assets/images/serviceImages/p3.png'), location: 'Chelsea, London', rating: 5, category: 'Barber Shop' },
  { id: '4', title: 'ELP Barbershop', image: require('../assets/images/serviceImages/p4.png'), location: 'Islington, London', rating: 2, category: 'Hair Salon' },
  { id: '5', title: 'Off Cut, Camberwell', image: require('../assets/images/serviceImages/p5.png'), location: 'Chelsea, London', rating: 5, category: 'Massage' },
  { id: '6', title: 'Balance Massage', image: require('../assets/images/serviceImages/p6.png'), location: 'Camberwell, London', rating: 3, category: 'Barber Shop' },
];

const dataB = [
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


const HomeScreen = ({ navigation }) => {

  const [rating, setRating] = useState(0);

  const renderItemA = ({ item }) => (
    <TouchableOpacity style={styleA.serviceItem}>
      <ImageBackground source={item.image} style={styleA.serviceImages}  resizeMode="cover" >
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
          style={{marginVertical: 10}}
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


  const renderItemB = ({ item }) => (
    <TouchableOpacity style={styleA.categoryCard}>
      <View style={{height: 100, borderRadius: 8, marginHorizontal: 15, overflow: 'hidden'}}>
        <ImageBackground source={item.image} style={styleA.cardImage}>
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
        <Text style={[styles.headerTitle, {}]}>Hello, David</Text>
      </View>


      <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <Text style={[styles.h4, {}]}>Near Me</Text>
      </View>
      <FlatList
        data={dataA}
        renderItem={renderItemA}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <View style={{ marginVertical: 12 }} />

  
      <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <Text style={[styles.h4, {}]}>New to Glowify</Text>
      </View>
      <FlatList
        data={dataA}
        renderItem={renderItemA}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
  

      <View style={{ marginVertical: 12 }} />

   
      <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <Text style={[styles.h4, {}]}>Categories</Text>
      </View>
      <FlatList
        data={dataB}
        renderItem={renderItemB}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display two columns
        columnWrapperStyle={styleA.row} // Apply styling to wrap content to next line
        vertical
      />


      <View style={{ marginVertical: 8 }} />

    </View>
    </ScrollView>
    </SafeAreaView>
  )
};

const styleA = StyleSheet.create({
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
});
export default HomeScreen;
