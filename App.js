import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    //
  };

  return (
    <View style={styles.container}>

      <Image style={styles.image} source={require('./assets/logo.png')} />

      <Text style={styles.pleaseText}>Please sign in to continue</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#959595"
          onChangeText={text => setUsername(text)}
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
        <Image style={styles.icon} source={require('./assets/eyes.png')} />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={() => setModal(true)}>
        <Text style={styles.loginText}>Sign in</Text>
      </TouchableOpacity>
      <Text style={styles.forgotText}>Forgot password</Text>

      <View style={styles.loginWith}>
        <View style={styles.lineView}></View>
        <TextInput style={styles.loginWithText}>Login with</TextInput>
        <View style={styles.lineView}></View>
      </View>
      <View style={styles.imageView}>
        <Image
          style={styles.imageCon}
          source={require('./assets/facebook.png')}
        />
        <Image
          style={styles.imageCon}
          source={require('./assets/google.png')}
        />
      </View>
      <View style={styles.appVersion}>
        <TextInput style={styles.appText}>App Version</TextInput>
        <TextInput style={styles.appText}>2.8.3</TextInput>
      </View>

      <View style={styles.footer}>
        <TextInput style={{fontSize: 15, color: '#5B5B5B'}}>
          Don't have account?
        </TextInput>
        <TextInput style={{fontSize: 15, color: '#5B5B5B', fontWeight: 'bold'}}>
          Sign up
        </TextInput>
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
    padding: 0,
  },
  inputPass: {
    width: '80%',
    backgroundColor: '#dedede',
    borderRadius: 5,
    height: 50,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
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
  loginWith: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineView: {
    backgroundColor: '#959595',
    height: 2,
    width: 95,
    marginHorizontal: 10,
  },
  loginWithText: {
    color: '#2E3283',
    fontSize: 15,
    marginHorizontal: 10,
  },
  imageView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageCon: {
    margin: 10,
    width: 46,
    height: 46,
    marginHorizontal: 20,
  },
  appVersion: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  appText: {
    fontSize: 16,
    color: '#828282',
    marginHorizontal: 10,
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
