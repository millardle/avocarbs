import React from 'react';
import { 
    FlatList, 
    StyleSheet,
ScrollView,
View,
Text,
TextInput,
} from 'react-native';
import { CATEGORIES1, CATEGORIES2, CATEGORIES3, CATEGORIES4, CATEGORIES5 } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import CategoryGridTile2 from '../components/CategoryGridTile2';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/colors';

const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile 
            title={itemData.item.title}
            color={itemData.item.color}
            image={itemData.item.image}
            onSelect={() => {
            props.navigation.navigate({
                routeName: 'CategoryMeals',
                params: {
                    categoryId: itemData.item.id
                }
            });
        }} 
            />
        );
    };

    const renderGridItem2 = (itemData) => {
        return (
            <CategoryGridTile2
            title={itemData.item.title}
            color={itemData.item.color}
            image={itemData.item.image}
            onSelect={() => {
            props.navigation.navigate({
                routeName: 'CategoryMeals',
                params: {
                    categoryId: itemData.item.id
                }
            });
        }} 
            />
        );
    };

    // const renderGridItem3 = (itemData) => {
    //     return (
    //         <CategoryGridTile3
    //         title={itemData.item.title}
    //         // color={itemData.item.color}
    //         onSelect={() => {
    //         props.navigation.navigate({
    //             routeName: 'CategoryMeals',
    //             params: {
    //                 categoryId: itemData.item.id
    //             }
    //         });
    //     }} 
    //         />
    //     );
    // };

    // const renderGridItem4 = (itemData) => {
    //     return (
    //         <CategoryGridTile4
    //         title={itemData.item.title}
    //         // color={itemData.item.color}
    //         onSelect={() => {
    //         props.navigation.navigate({
    //             routeName: 'CategoryMeals',
    //             params: {
    //                 categoryId: itemData.item.id
    //             }
    //         });
    //     }} 
    //         />
    //     );
    // };

    // const renderGridItem5 = (itemData) => {
    //     return (
    //         <CategoryGridTile5
    //         title={itemData.item.title}
    //         // color={itemData.item.color}
    //         onSelect={() => {
    //         props.navigation.navigate({
    //             routeName: 'CategoryMeals',
    //             params: {
    //                 categoryId: itemData.item.id
    //             }
    //         });
    //     }} 
    //         />
    //     );
    // };

    return (
        <ScrollView>
        {/* <View style={styles.searchbar}>
            <TextInput placeholder='Search' style={styles.searchtext} />
        </View> */}
        <Text style={styles.title}>Recommended</Text>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={CATEGORIES1}
        // numColumns={2}
        renderItem={renderGridItem} 
        />
        <Text style={styles.title}>Breakfast</Text>
        <FlatList
        data={CATEGORIES2}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderGridItem2} 
        />
        <Text style={styles.title}>Lunch</Text>
        <FlatList
        data={CATEGORIES3}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderGridItem2} 
        />
        <Text style={styles.title}>Dinner</Text>
        <FlatList
        data={CATEGORIES4}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderGridItem2} 
        />
        <Text style={styles.title}>Snacks & Desserts</Text>
        <FlatList
        data={CATEGORIES5}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{marginBottom: 20}}
        renderItem={renderGridItem2} 
        />
        </ScrollView>
    );
}

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Recipes',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Menu' iconName='ios-menu' onPress={() => {
                    navData.navigation.toggleDrawer();
                }} />
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
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        marginLeft: 15,
        marginTop: 15
    },
    searchbar: {
        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 6,
        marginHorizontal: 10,
        marginTop: 20,
        marginBottom: 5
    },
    searchtext: {
        flex: 1,
        fontSize: 16,
        marginLeft: 15
    }

})

export default CategoriesScreen;