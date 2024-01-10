import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, ImageBackground,
         TouchableOpacity, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import { StarRatingDisplay } from 'react-native-star-rating-widget';
import styles from '../../AppStyles';
import ColorCodes from '../utils/ColorCodes';
import { ProgressBar, RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import ImagePaths from '../utils/ImagePaths';


const SelecTeamMemberScreen = () => {
  const [rating, setRating] = useState(0);
  const navigation = useNavigation();

  const teamData = [
      {
        id: 1,
        name: 'Any team member',
        position: 'Maximum availability',
        rating: '4',
        price: '',
        active: ''
      },
      {
        id: 2,
        name: 'Arch',
        position: 'Senior Stylist',
        rating: '5',
        price: '',
        active: ''
      },
      {
        id: 3,
        name: 'David Smith',
        position: 'Barber',
        rating: '5',
        price: '',
        active: ''
      },
      {
        id: 4,
        name: 'Emily',
        position: 'Creative Director',
        rating: '1',
        price: '',
        active: ''
      },
      {
        id: 5,
        name: 'Jacob Joy',
        position: 'Hair Stylist',
        rating: '4',
        price: '',
        active: ''
      },
      {
        id: 6,
        name: 'Alex Jeet',
        position: 'Hair Dreser',
        rating: '3',
        price: '',
        active: ''
      },
      // Add more data as needed
  ];

  const handleButtonPress = (index) => {
    // navigation.navigate('SelectTime');
    navigation.navigate('ReviewConfirm');
  };

  const renderItemA = ({ item, index }) => (
    <TouchableOpacity key={index} onPress={() => handleButtonPress(index)} style={styleA.memberCard}>
      <View style={{width: '100%', position: 'absolute', top: -45, alignItems: 'center'}}>
      <TouchableOpacity style={styleA.avatarButton}>
        <Image
          source={ImagePaths.dummy_user1}
          style={styleA.avatarImage}/>
      </TouchableOpacity>
      </View>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Text style={[styles.h5, {marginTop: 60, marginBottom: 5}]}>{item.name}</Text>
        <Text style={[styles.h6, {color: ColorCodes.darkGrey}]}>{item.position}</Text>
        <View style={[styles.row, {marginBottom: 10}]}>
          <Text style={[styles.h6, {marginRight: 5}]}>{item.rating}</Text>
          <StarRatingDisplay
            rating={item.rating}
            color={ColorCodes.blue}
            starSize={20}
            />
        </View>
      </View>
    </TouchableOpacity>  
  );


  
  return (
    <SafeAreaView style={styles.container}>


      <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <ProgressBar progress={0.4} color={ColorCodes.blue} />
        <Text style={[styles.p1, {color: ColorCodes.darkGrey, marginVertical: 8}]}>Step 2 of 5</Text>
        <Text style={[styles.headerTitle, {marginVertical: 15}]}>Select Team Member</Text>
      </View>

      <FlatList
        data={teamData}
        renderItem={renderItemA}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display two columns
        columnWrapperStyle={{flex: 1, justifyContent: 'space-between'}} // Apply styling to wrap content to next line
        vertical
      />


    </SafeAreaView>
  )
};

const styleA = StyleSheet.create({  
  memberCard: {
    flex: 1,
    marginTop: 40,
    marginBottom: 30,
    marginHorizontal: 15,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 8
  },
  avatarButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50, // Assuming your avatar is a square image, adjust as needed
    backgroundColor: '#F3EBFE', // Set your desired background color
  },
  avatarImage: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  cardImage: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    borderRadius: 8,
  },
  cardSelection: {
    borderRadius: 10,
    borderColor: ColorCodes.lightGrey,
    borderWidth: 1
  }
});

export default SelecTeamMemberScreen;
