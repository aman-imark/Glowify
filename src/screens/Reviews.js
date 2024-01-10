import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, ImageBackground,
         TouchableOpacity, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import { StarRatingDisplay } from 'react-native-star-rating-widget';
import styles from '../../AppStyles';
import ColorCodes from '../utils/ColorCodes';

import TopHeader from '../components/TopHeader';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import ImagePaths from '../utils/ImagePaths';


const dataA = [
  { id: '1', name: 'Tatiana A.', rating: 5, review: 'Always a pleasant experience with attentive staff and super staff!' },
  { id: '2', name: 'Lorraine D.', rating: 5, review: 'Lovely manicure and polish by Natalia. Thank you!' },
  { id: '3', name: 'Tatiana A.', rating: 5, review: 'A very pleasant experience. Arch was brilliant as always!' },
  { id: '4', name: 'Julia P.', rating: 5, review: 'Lovely manicure and polish by Natalia. Thank you!' },
  { id: '5', name: 'Robert Dr Jr.', rating: 2, review: 'Always a pleasant experience with attentive staff and super staff!' },
  { id: '6', name: 'Sam Monkshaw', rating: 1, review: 'A very pleasant experience. Arch was brilliant as always!' },
  { id: '7', name: 'Andrew D.', rating: 5, review: 'Lovely manicure and polish by Natalia. Thank you!' },
  { id: '8', name: 'Narsimha Rao', rating: 5, review: 'Always a pleasant experience with attentive staff and super staff!' },
  { id: '9', name: 'Peter Parker', rating: 2, review: 'A very pleasant experience. Arch was brilliant as always!' },
  { id: '10', name: 'Christina', rating: 4, review: 'Lovely manicure and polish by Natalia. Thank you!' },

];



const ReviewsScreen = () => {

  const [rating, setRating] = useState(0);

  const navigation = useNavigation();
  const handleClick = (value) => {
    console.log('Click Value : ', value);
  };


  const renderItemA = ({ item }) => (
    <TouchableOpacity style={stylesA.container} onPress={() => handleClick(item.type)} >
      <View style={stylesA.userContainer}>
        <Image source={ImagePaths.dummy_user2} style={stylesA.thumbnail} />
        <View>
          <Text style={[styles.h6, {fontWeight: 'bold'}]}>{item.name}</Text>
          <View style={[styles.row, {height: 35}]}>
            <Text style={styles.h6}>{item.rating}</Text>
            <StarRatingDisplay
              rating={5}
              onChange={setRating}
              color={ColorCodes.blue}
              starSize={20}
              style={{marginVertical: 10, marginHorizontal: 5}}
              />
          </View>          
        </View>
      </View>
      <View style={{marginTop: 12, marginBottom: 8}}>
        <Text style={styles.p1}>{item.review}</Text>
      </View>
    </TouchableOpacity>
  );


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <Text style={[styles.headerTitle, {}]}>Reviews</Text>
        <StarRatingDisplay
          rating={5}
          onChange={setRating}
          color={ColorCodes.blue}
          starSize={30}
          style={{marginVertical: 10}}
          />
        <Text style={[styles.h6, {}]}>5.0 • (1,436)</Text>
      </View>



      <View style={{ marginVertical: 8, marginHorizontal: 15 }} />
      <FlatList
        data={dataA}
        renderItem={renderItemA}
        keyExtractor={(item) => item.id}
      />


    </SafeAreaView>
  )
};

const stylesA = StyleSheet.create({
  container: {
    flexDirection: 'column',
    // padding: 10,
    marginHorizontal: 15,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: ColorCodes.lightCream,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    width: 62,
    height: 62,
    borderRadius: 40, // Make it rounded
    marginRight: 10,
  },

});

export default ReviewsScreen;
