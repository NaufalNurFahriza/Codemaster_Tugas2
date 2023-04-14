import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/AntDesign';

// import {styles} from '../Component/Style'
import SignIn from './Page/SignIn';
import SignUp from './Page/SignUp';
import ForgotPass from './Page/ForgotPass';
import ButtonNav from './Component/ButtonNav';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} options={{
          headerShown: false
        }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{
          headerShown: false
        }} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} options={{
          headerShown: false
        }} />
        <Stack.Screen name="ButtonNav" component={ButtonNav} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
      {/* <ButtonNav/> */}
    </NavigationContainer>

    
  );
}



