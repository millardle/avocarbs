import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LoginScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Login Screen!</Text>
            <TouchableOpacity
            style={styles.button}
                onPress={() => {
                    props.navigation.navigate({routeName:'CategoryMeals'});
            }}>
            <Text style={styles.buttontext}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

LoginScreen.navigationOptions = (navData) => {
    return {
        headerTitle: '',
        headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
                navData.navigation.toggleDrawer();
            }}
            />
        </HeaderButtons>
        )
    };
};

    const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 250,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    buttontext: {
        color: 'blue'
    }
    });

    export default LoginScreen;
