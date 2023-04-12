import * as React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import SignIn from './Page/SignIn';
import SignUp from './Page/SignUp';

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#2E3283',
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
            <Icon name="heart" size={24} color="red" />
            <Text style={{
              color: isFocused ? '#ffffff' : '#e5e5e5',
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
        <Tab.Screen name="SignIn" component={SignIn} options={{
          headerShown: false
        }} />
        <Tab.Screen name="SignUp" component={SignUp} options={{
          headerShown: false
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



