import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DefaultText from '../components/DefaultText';

const LoginScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.top}>
            <Image style={styles.image} source={require('../assets/splash.png')} />
            </View>

            <View style={styles.center}>
                <Text style={styles.title}>Avocarbs</Text>
            </View>

            <View style={styles.bottom}>
            <TextInput 
                placeholder='Username'
                style={styles.input} 
            />
            <TextInput 
                placeholder='Password'
                secureTextEntry={true}
                style={styles.input} 
            />
            <TouchableOpacity
            style={styles.button}
                onPress={() => {
                    props.navigation.navigate({routeName:'Categories'});
            }}>
            <Text style={styles.buttontext}>Login</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

// LoginScreen.navigationOptions = (navData) => {
//     return {
//         headerTitle: '',
//     };
// };

    const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    top: {
        height: '15%',
        marginTop: 40,        
        justifyContent: 'center',
        alignItems: 'center'
    },
    center: {
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottom: {
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        color: '#11BD5E',
        fontFamily: 'open-sans-bold',
        marginVertical: 20
    },
    button: {
        width: 200,
        height:40,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#11BD5E'
    },
    buttontext: {
        color: '#FFFFFF',
        fontFamily: 'open-sans-bold'
    },
    input: {
        width: 300,
        height: 44,
        // padding: 10,
        borderBottomWidth: 1,
        backgroundColor: '#FFFFFF',
        borderColor: '#AAAAAA',
        marginVertical: 10
    }, 
    image: {
        flex: 1,
        height: 150,
        width: 100
    }
    });

    export default LoginScreen;
