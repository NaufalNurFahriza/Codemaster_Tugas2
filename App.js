import * as React from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/AntDesign';

import SignIn from './Page/SignIn';
import SignUp from './Page/SignUp';
import ForgotPass from './Page/ForgotPass';
import Home from './Page/Home'
// import {styles} from '../Component/Style'

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      height: 60,
    }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const imageIcon = label === 'Home' ? 
        require('./assets/Button_home.png')
          : label === 'SignIn' ? require('./assets/Button_myBooking.png')
            : label === 'SignUp' ? require('./assets/Button_help.png')
              : require('./assets/Button_profile.png');

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center', }}
          >
            {/* <Image style={styles.smallImages} source={require('../assets/3_att.png')} /> */}
            <Image source={imageIcon}  style={{height: 20, width: 20,}} />
            <Text style={{
              color: isFocused ? '#2E3283' : '#5B5B5B',
              fontSize: 16,
            }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen name="Home" component={Home} options={{
          headerShown: false
        }} />
        <Tab.Screen name="My Booking" component={SignIn} options={{
          headerShown: false
        }} />
        <Tab.Screen name="Help" component={SignUp} options={{
          headerShown: false
        }} />
        <Tab.Screen name="Profile" component={ForgotPass} options={{
          headerShown: false
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



