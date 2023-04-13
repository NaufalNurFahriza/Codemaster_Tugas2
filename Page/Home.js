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
import Icon from 'react-native-vector-icons/AntDesign';
// import {styles} from '../Component/Style'

export default function Home() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        //
    };

    return (
        <View style={styles.container}>

            <Image style={styles.banner} source={require('../assets/bannerMarlin.png')} />
            <View style={{ flexDirection: 'row', top: -120 }}>
                <TouchableOpacity style={{ margin: 10 }}>
                    <Image style={styles.smallImages} source={require('../assets/1_int.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 10 }}>
                    <Image style={styles.smallImages} source={require('../assets/2_dom.png')} />
                </TouchableOpacity >
                <TouchableOpacity style={{ margin: 10 }}>
                    <Image style={styles.smallImages} source={require('../assets/3_att.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 10 }}>
                    <Image style={styles.smallImages} source={require('../assets/4_pio.png')} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.moreBtn}
                onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.moreText}>More...</Text>
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
    banner: {
        top: -140,
        width: "100%",
        height: "27%",
    },
    moreBtn: {
        bottom: -110,
        width: '35%',
        backgroundColor: '#2E3283',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 5,
    },
    moreText: {
        fontSize: 21,
        color: 'white',
    },
    smallImages:{
        width: 80,
        height: 80,
    }
});

