import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet 
} from 'react-native';
import { 
  HeaderButtons, 
  Item 
} from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import BasicFlatList from '../components/BasicFlatList';

const GroceryListScreen = props => {

    return (
      <View style={styles.screen}>
        <BasicFlatList />
      </View>
    );
  };
  
  GroceryListScreen.navigationOptions = (navData) => {
    return {
      headerTitle: 'Grocery List',
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
      flex: 1
    }
  });
  
  export default GroceryListScreen;
  