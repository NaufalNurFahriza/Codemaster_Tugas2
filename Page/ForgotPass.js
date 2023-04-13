import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
// import {styles} from '../Component/Style'

export default function ForgotPass() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    //
  };

  return (
    <View style={styles.container}>
      <View style={styles.backLogo}>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Icon
            name="back"
            color={"#5B5B5B"}
            size={30}
          />
        </TouchableOpacity>
      </View>

      <Image style={styles.image} source={require('../assets/logo.png')} />

      <Text style={styles.pleaseText}>Reset your password</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#959595"
          onChangeText={text => setEmail(text)}
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.loginText}>Request Reset</Text>
      </TouchableOpacity>
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

  inputView: {
    width: '80%',
    backgroundColor: '#dedede',
    borderRadius: 5,
    height: 50,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center',
  },

  inputText: {
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

  backLogo: {
    position: 'absolute',
    top: 10,
    left: 10,
    alignSelf:'flex-start',
    width: '100%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },
});

