import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer} from 'react-navigation';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/colors';
import FavouritesScreen from '../screens/FavouritesScreen';
import GroceryListScreen from '../screens/GroceryListScreen';
import CalendarScreen from '../screens/CalendarScreen';
import { Ionicons } from '@expo/vector-icons';
import FiltersScreen from '../screens/FiltersScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';

const defaultStackNavOptions = {
        headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTitleStyle: {
            fontFamily: 'open-sans-bold',
        },
        headerBackTitleStyle: {
            fontFamily: 'open-sans'
        },
        headerTintColor:
            Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        // headerTitle: 'A Screen',
        headerTitleStyle: { width: Dimensions.get('window').width }
}

const MealsNavigator = createStackNavigator(
    {
    Categories: {
        screen: CategoriesScreen
    },
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: {
        screen: MealDetailScreen
    }
    },
    {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
    });

const FavNavigator = createStackNavigator({
    Favourites: FavouritesScreen,
    MealDetail: MealDetailScreen
},     {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
});

const FiltersNavigator = createStackNavigator(
    {
    Filters: FiltersScreen
    },
    {
    defaultNavigationOptions: defaultStackNavOptions 
});

const CalendarNavigator = createStackNavigator({
    Calendar: CalendarScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions 
});

const GroceriesNavigator = createStackNavigator({
    Groceries: GroceryListScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions 
});

const SettingsNavigator = createStackNavigator({
    Groceries: SettingsScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions 
});

// Delete login navigator and from main navigator
// const LoginNavigator = createStackNavigator({
//     Login: LoginScreen
// }, {
//     defaultNavigationOptions: defaultStackNavOptions 
// });


const MealsFavTabNavigator = createBottomTabNavigator({
    Recipes: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-book' size={25} color={tabInfo.tintColor} />;
        }
    }},
    Groceries: {
        screen: GroceriesNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />;
        }
    }},
    Favourites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-heart' size={25} color={tabInfo.tintColor} />;
        }
    }},
    Calendar: {
        screen: CalendarNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-calendar' size={25} color={tabInfo.tintColor} />;
        }
    }}
    }, {
    tabBarOptions: {
        activeTintColor: Colors.primaryColor
    }
});

const MainNavigator = createDrawerNavigator({
    Recipes: {screen: MealsFavTabNavigator, navigationOptions: {
        drawerLabel: 'Recipes'
    }},
    Filters: {screen: FiltersNavigator},
    Logout: {screen: LoginScreen}
}, {
    contentOptions: {
        activeTintColor: Colors.primaryColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
});

export default createAppContainer(MainNavigator);
