import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet 
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import Calendar from '../components/Calendar';

const CalendarScreen = props => {
    return (
        <View style={styles.screen}>
          <Calendar />
        </View>
      );
}

CalendarScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Calendar',
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
      flex: 1
    }
  });

export default CalendarScreen;