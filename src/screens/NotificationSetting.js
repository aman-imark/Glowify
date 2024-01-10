import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Switch, SafeAreaView } from 'react-native';

import styles from '../../AppStyles';
import ColorCodes from '../utils/ColorCodes';

const NotificationSettingScreen = () => {
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
        <Text style={[styles.headerTitle, {}]}>Notifications</Text>
        <View style={{ marginVertical:12 }}>
        <Text style={[styles.h6, styles.lineHeightA]}>Glowify only sends notifications about appointments you have booked</Text>
        </View>

        <View>
          <View>
          <View style={[stylesA.toggleContainer]}>
             <Text style={[styles.h5, styles.lineHeightA, stylesA.toggleView, {fontWeight: 'bold'}]}>Text message appointment notifications</Text>
             <View style={[stylesA.toggleSwitchView, styles.containerCenter]}>
             <Switch
               value={toggleValue}
               onValueChange={handleToggle}
               trackColor={{ true: ColorCodes.blue }}
               style={stylesA.toggleSwitch}
             />
             </View>
          </View>
          <Text style={[styles.h6, stylesA.toggleView, styles.lineHeightA, {color: ColorCodes.darkGrey}]}>Receive texts based on you sender's settings</Text>
          </View>

          <View style={{ marginVertical: 12 }}></View>
          <View>
          <View style={[stylesA.toggleContainer]}>
             <Text style={[styles.h5, styles.lineHeightA, stylesA.toggleView, {fontWeight: 'bold'}]}>Email marketing notifications</Text>
             <View style={[stylesA.toggleSwitchView, styles.containerCenter]}>
             <Switch
               value={toggleValue}
               onValueChange={handleToggle}
               trackColor={{ true: ColorCodes.blue }}
               style={stylesA.toggleSwitch}
             />
             </View>
          </View>
          <Text style={[styles.h6, stylesA.toggleView, styles.lineHeightA, {color: ColorCodes.darkGrey}]}>Receive offers and news via email</Text>
          </View>

          <View style={{ marginVertical: 12 }}></View>
          <View>
          <View style={[stylesA.toggleContainer]}>
             <Text style={[styles.h5, styles.lineHeightA, stylesA.toggleView, {fontWeight: 'bold'}]}>Text message marketing notifications</Text>
             <View style={[stylesA.toggleSwitchView, styles.containerCenter]}>
             <Switch
               value={toggleValue}
               onValueChange={handleToggle}
               trackColor={{ true: ColorCodes.blue }}
               style={stylesA.toggleSwitch}
             />
             </View>
          </View>
          <Text style={[styles.h6, stylesA.toggleView, styles.lineHeightA, {color: ColorCodes.darkGrey}]}>If you opted out previously by texting STOP, please reply with START to opt back in</Text>
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
    width: '80%'
  },
  toggleSwitchView: {
    width: '20%'
  },
  toggleSwitch: {  
    // transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
});

export default NotificationSettingScreen;
