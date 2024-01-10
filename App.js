import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, 
         Text, useColorScheme, View } from 'react-native';
import { Colors, DebugInstructions, Header,
         LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

import MainNavigation from './src/navigation/MainNavigation';



const App = () => {
  // Replace this with your actual authentication logic
  const isLoggedIn = false;
  return <MainNavigation isLoggedIn={isLoggedIn} />;
  // return <MainNavigation/>;
};


const styles = StyleSheet.create({});

export default App;
