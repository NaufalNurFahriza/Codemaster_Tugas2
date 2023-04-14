import NetInfo from '@react-native-community/netinfo';
import React, {useState, useEffect} from 'react';
import Slider from '@react-native-community/slider';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';


const NetInfor = () => {
  const [netInfo, setNetInfo] = useState('');
  useEffect(() => {
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener((state) => {
      setNetInfo(
        `Connection type: ${state.type}
        Is connected?: ${state.isConnected}
        IP Address: ${state.details.ipAddress}`,
      );
    });

    return () => {
      // Unsubscribe to network state updates
      unsubscribe();
    };
  }, []);

  const getNetInfo = () => {
    // To get the network state once
    NetInfo.fetch().then((state) => {
      alert(
        `Connection type: ${state.type}
        Is connected?: ${state.isConnected}
        IP Address: ${state.details.ipAddress}`,
      );
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.header}>
          React Native NetInfo
          {'\n'}
          To Get NetInfo information
        </Text>
        <Text style={styles.textStyle}>
          Here is NetInfo to get device type
          {netInfo}
        </Text>
        <Button
          title="Get more detailed NetInfo"
          onPress={getNetInfo}
        />
      </View>
      <Slider
        style={{width: '100%', height: 40}}
        minimumValue={0}
        maximumValue={10}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    marginTop: 30,
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    paddingVertical: 20,
  },
});

export default NetInfor;
