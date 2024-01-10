import React, {useEffect, useState} from 'react';
import { View, Text, Button, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ImagePaths from '../utils/ImagePaths';
import styles from '../../AppStyles';


import SplashScreen from '../screens/Splash';
import LoginScreen from '../screens/Login';
import ForgotPasswordScreen from '../screens/ForgotPassword';
import PrivacyPolicyScreen from '../screens/PrivacyPolicy';

import HomeScreen from '../screens/Home';
import AddPhoneScreen from '../screens/AddPhoneNumber';
import WelcomeBackScreen from '../screens/WelcomeBack';
import AppointmentStatus from '../screens/AppointmentStatus';
import ThankYou from '../screens/ThankYou';
import ServiceDetailScreen from '../screens/ServiceDetails';
import LocationScreen from '../screens/Location';
import TreatmentScreen from '../screens/Treatment';
import PasswordFillScreen from '../screens/PasswordFill';
import SearchScreen from '../screens/Search';
import ActivityScreen from '../screens/Activity';

{/* <Icon name="home" color="red" size="20" /> */}
import Icon from 'react-native-vector-icons/Feather';

import ColorCodes from '../utils/ColorCodes';
import TopHeader from '../components/TopHeader';
import { Header } from 'react-native/Libraries/NewAppScreen';
import ReviewsScreen from '../screens/Reviews';
import NotificationSettingScreen from '../screens/NotificationSetting';
import MyMembershipScreen from '../screens/MyMembership';
import PaymentMethodScreen from '../screens/PaymentMethod';
import MyOrdersScreen from '../screens/MyOrders';
import MyVouchersScreen from '../screens/MyVouchers';
import SettingsScreen from '../screens/Settings';
import TermsServiceScreen from '../screens/TermsService';
import TermsUseScreen from '../screens/TermsUse';
import SelectServiceScreen from '../screens/SelectService';
import SelecTeamMemberScreen from '../screens/SelectTeamMember';
import SelectTimeScreen from '../screens/SelectTime';
import ReviewConfirmScreen from '../screens/ReviewConfirm';
import CheckoutScreen from '../screens/Checkout';
import AddCardScreen from '../screens/AddCard';
import MyFavouriteScreen from '../screens/MyFavourite';
import UserProfileScreen from '../screens/UserProfile';
import SocialLoginSettingScreen from '../screens/SocialLoginSetting';
import SupportScreen from '../screens/Support';
import ChatScreen from '../screens/Chat';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const LogoTitle = () => {
    return (
      <Image
        style={{ width: 50, height: 50 }}
        source={ImagePaths.logoImage}
      />
    );
};

const noHeaderShown = {
    headerShown: false, // Show or hide the header
}



const LoggedInStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};


// const BottomTabs = () => {
//   return (
//       <Tab.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           tabBarActiveTintColor: ColorCodes.blue,
//           tabBarInactiveTintColor: ColorCodes.darkGrey,
//           tabBarStyle: {
//             borderWidth: 0,
//             shadowColor: ColorCodes.shadowColor, // Add shadow color
//             shadowOpacity: 0.25, // Adjust shadow opacity as needed
//             shadowRadius: 2, // Adjust shadow radius as needed
//             elevation: 5, // Android only, adjust elevation as needed
//           },
//         }}>
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="home" color={color} size={size} />
//             ),
//             tabBarLabel: () => null,
//             headerStyle: {
//               height: 120, // Set the desired height value
//               shadowColor: '#fff',
//             },
//             headerTitle: (props) => <TopHeader />
//           }}/>
//         <Tab.Screen
//           name="Search"
//           component={SearchScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="search" color={color} size={size} />
//             ),
//             tabBarLabel: () => null,
//             headerStyle: {
//               height: 120, // Set the desired height value
//               shadowColor: '#fff',
//             },
//             headerTitle: (props) => <TopHeader />
//           }}/>
//         <Tab.Screen
//           name="Activity"
//           component={ActivityScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="calendar" color={color} size={size} />
//             ),
//             tabBarLabel: () => null,
//             headerStyle: {
//               height: 120, // Set the desired height value
//               shadowColor: '#fff',
//             },
//             headerTitle: (props) => <TopHeader />
//           }}/>
//       </Tab.Navigator>
//   );
// };




const BottomTabs = () => {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: ColorCodes.blue,
          tabBarInactiveTintColor: ColorCodes.darkGrey,
          tabBarStyle: {
            borderWidth: 0,
            shadowColor: ColorCodes.shadowColor, // Add shadow color
            shadowOpacity: 0.25, // Adjust shadow opacity as needed
            shadowRadius: 2, // Adjust shadow radius as needed
            elevation: 5, // Android only, adjust elevation as needed
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../assets/images/iconImages/home.png')}
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'contain',
                    tintColor: focused ? ColorCodes.blue : ColorCodes.black,
                  }}
                />
              </View>
            ),
            tabBarLabel: () => null,
            headerStyle: {
              height: 120, // Set the desired height value
              shadowColor: '#fff',
            },
            headerTitle: (props) => <TopHeader />
          }}/>
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../assets/images/iconImages/search.png')}
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'contain',
                    tintColor: focused ? ColorCodes.blue : ColorCodes.black,
                  }}
                />
              </View>
            ),
            tabBarLabel: () => null,
            headerStyle: {
              height: 120, // Set the desired height value
              shadowColor: '#fff',
            },
            headerTitle: (props) => <TopHeader />
          }}/>
        <Tab.Screen
          name="Activity"
          component={ActivityScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../assets/images/iconImages/activity.png')}
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'contain',
                    tintColor: focused ? ColorCodes.blue : ColorCodes.black,
                  }}
                />
              </View>
            ),
            tabBarLabel: () => null,
            headerStyle: {
              height: 120, // Set the desired height value
              shadowColor: '#fff',
            },
            headerTitle: (props) => <TopHeader />
          }}/>
      </Tab.Navigator>
  );
};



const NotLoggedInStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen} 
        options={noHeaderShown}/>

      <Stack.Screen name="Login" component={LoginScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}
        />

      <Stack.Screen name="AddPhone" component={AddPhoneScreen} 
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="PasswordFill" component={PasswordFillScreen} 
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="WelcomeBack" component={WelcomeBackScreen} 
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="Forgot" component={ForgotPasswordScreen} 
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>



      <Stack.Screen name="Privacy" component={PrivacyPolicyScreen} 
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="TermsOfService" component={TermsServiceScreen} 
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="TermsOfUse" component={TermsUseScreen} 
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="AppointmentStatus" component={AppointmentStatus} 
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="ThankYou" component={ThankYou} 
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="ServiceDetail" component={ServiceDetailScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="Location" component={LocationScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="Treatment" component={TreatmentScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="Reviews" component={ReviewsScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="NotificationSetting" component={NotificationSettingScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="SocialLoginSetting" component={SocialLoginSettingScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="MyMembership" component={MyMembershipScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="MyOrders" component={MyOrdersScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="MyVouchers" component={MyVouchersScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="Settings" component={SettingsScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="SelectService" component={SelectServiceScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="SelectTeamMember" component={SelecTeamMemberScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="SelectTime" component={SelectTimeScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="ReviewConfirm" component={ReviewConfirmScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="Checkout" component={CheckoutScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="AddCard" component={AddCardScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="UserProfile" component={UserProfileScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="MyFavourite" component={MyFavouriteScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="Support" component={SupportScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>

      <Stack.Screen name="Chat" component={ChatScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>


      <Stack.Screen name="BottomTabs" component={BottomTabs} options={noHeaderShown}/>
    </Stack.Navigator>
  );
};




const MainNavigation = ({isLoggedIn}) => {

  return (
    // <NavigationContainer>
    //   {isLoggedIn ? <LoggedInStack /> : <NotLoggedInStack />}
    // </NavigationContainer>

    <NavigationContainer>
      <PaperProvider>
       <NotLoggedInStack />
       </PaperProvider>
    </NavigationContainer>
  );
};


export default MainNavigation;