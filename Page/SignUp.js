import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import {styles} from '../Component/Style'

export default function SignUp() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


  const handleLogin = () => {
    //
  };

  return (
    <View style={styles.container}>

      <Image style={styles.image} source={require('../assets/logo.png')} />

      <Text style={styles.pleaseText}>Create an account</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Name"
          placeholderTextColor="#959595"
          onChangeText={text => setUsername(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#959595"
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Phone"
          placeholderTextColor="#959595"
          onChangeText={text => setPhone(text)}
        />
      </View>
      <View style={styles.inputPass}>
        <TextInput
          style={styles.passText}
          placeholder="Password"
          placeholderTextColor="#959595"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.loginText}>Sign up</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <TextInput style={{ fontSize: 15, color: '#5B5B5B' }}>
          Already have account?
        </TextInput>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={{ fontSize: 15, color: '#5B5B5B', fontWeight: 'bold' }}>
            Log in
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  forgotText: {
    fontSize: 15,
    color: '#2E3283',
    marginTop: 5,
    marginBottom: 10,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#dedede',
    borderRadius: 5,
    height: 50,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center',
  },
  inputPass: {
    width: '80%',
    backgroundColor: '#dedede',
    borderRadius: 5,
    height: 50,
    marginTop: 5,
    marginBottom: 5,
  },
  icon: {
    width: 24,
    height: 14,
    marginRight: 15,
  },
  inputText: {
    marginLeft: 15,
    height: 50,
    color: '#000000',
    fontSize: 16,
  },
  passText: {
    width: '80%',
    marginLeft: 15,
    height: 50,
    color: '#000000',
    fontSize: 16,
  },
  pleaseText: {
    height: 50,
    color: '#5B5B5B',
    fontSize: 22,
  },
  image: {
    margin: 20,
    width: 247,
    height: 58.5,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#2E3283',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  loginText: {
    fontSize: 16,
    color: 'white',
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
