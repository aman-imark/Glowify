import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Switch, Image, SafeAreaView } from 'react-native';

import styles from '../../AppStyles';
import ColorCodes from '../utils/ColorCodes';
import ImagePaths from '../utils/ImagePaths';

const SocialLoginSettingScreen = () => {
  // const [username, setUsername] = useState('yt');
  // const [password, setPassword] = useState('ghgf');

  const [toggleValue, setToggleValue] = useState(false);

  const handleToggle = () => {
    setToggleValue(!toggleValue);
  };


  return (
    <SafeAreaView style={styles.container}>
    <View>
      <View style={{ marginVertical: 12, marginHorizontal: 15 }}>
        <Text style={[styles.headerTitle, {}]}>Social Logins</Text>
      
        <View>
          <View style={{ marginVertical: 12 }} />
          <View style={[stylesA.toggleContainer]}>
            <View style={styles.nrow}>
              <View style={stylesA.iconContainer}>
                <Image style={stylesA.iconImage} source={ImagePaths.googleIcon} resizeMode="contain" />
              </View>
              <View style={{marginLeft: 20}}>    
                <Text style={[styles.h5, styles.lineHeightA, {fontWeight: 'bold'}]}>Google</Text>
                <Text style={[styles.h6, styles.lineHeightA, {color: ColorCodes.darkGrey}]}>Connected</Text>
              </View>
            </View>
            <View style={stylesA.toggleSwitchView}>
             <Switch
               value={toggleValue}
               onValueChange={handleToggle}
               trackColor={{ true: ColorCodes.blue }}
               style={stylesA.toggleSwitch}
             />
             </View>
          </View>

          <View style={{ marginVertical: 12 }} />
          <View style={[stylesA.toggleContainer]}>
            <View style={styles.nrow}>
              <View style={stylesA.iconContainer}>
                <Image style={stylesA.iconImage} source={ImagePaths.fbIcon} resizeMode="contain" />
              </View>
              <View style={{marginLeft: 20}}>    
                <Text style={[styles.h5, styles.lineHeightA, {fontWeight: 'bold'}]}>Facebook</Text>
                <Text style={[styles.h6, styles.lineHeightA, {color: ColorCodes.darkGrey}]}>Connected</Text>
              </View>
            </View>
            <View style={stylesA.toggleSwitchView}>
             <Switch
               value={toggleValue}
               onValueChange={handleToggle}
               trackColor={{ true: ColorCodes.blue }}
               style={stylesA.toggleSwitch}
             />
             </View>
          </View>


          <View style={{ marginVertical: 12 }} />
          <View style={[stylesA.toggleContainer]}>
            <View style={styles.nrow}>
              <View style={stylesA.iconContainer}>
                <Image style={stylesA.iconImage} source={ImagePaths.appleIcon} resizeMode="contain" />
              </View>
              <View style={{marginLeft: 20}}>    
                <Text style={[styles.h5, styles.lineHeightA, {fontWeight: 'bold'}]}>Apple</Text>
                <Text style={[styles.h6, styles.lineHeightA, {color: ColorCodes.darkGrey}]}>Connected</Text>
              </View>
            </View>
            <View style={stylesA.toggleSwitchView}>
             <Switch
               value={toggleValue}
               onValueChange={handleToggle}
               trackColor={{ true: ColorCodes.blue }}
               style={stylesA.toggleSwitch}
             />
             </View>
          </View>

       
        </View>

      </View>
    </View>
    </SafeAreaView>
  );
};

const stylesA = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    width: '100%'
  },
  toggleView: {
    width: '80%',
  },
  toggleSwitchView: {
    width: '20%',
    alignItems: 'flex-end'
  },
  toggleSwitch: {  
    // transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
  iconContainer: {
    width: 84,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: ColorCodes.lightGrey,
    borderStyle: 'solid',
    borderRadius: 8
  },
  iconImage: {
    width: 34, // Set the width of the image
    height: 34, // Set the height of the image
  },  
});

export default SocialLoginSettingScreen;
