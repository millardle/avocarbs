import React, { 
  useEffect, 
  useCallback 
} from 'react';
import { 
  ScrollView, 
  View, 
  Image, 
  Text, 
  Button, 
  StyleSheet 
} from 'react-native';
import { 
  useSelector, 
  useDispatch 
} from 'react-redux';
import { 
  HeaderButtons, 
  Item 
} from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import { toggleFavourite } from '../store/actions/meals';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = props => {
  const availableMeals = useSelector(state => state.meals.meals);
  const mealId = props.navigation.getParam('mealId');
  const currentMealIsFavourite = useSelector(state =>
    state.meals.favouriteMeals.some(meal => meal.id === mealId)
  );

  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavouriteHandler = useCallback(() => {
    dispatch(toggleFavourite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    // props.navigation.setParams({ mealTitle: selectedMeal.title });
    props.navigation.setParams({ toggleFav: toggleFavouriteHandler });
  }, [toggleFavouriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealIsFavourite });
  }, [currentMealIsFavourite]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>Prep Duration: {selectedMeal.duration} minutes</DefaultText>
        <DefaultText>{selectedMeal.netcarbs}g Net Carbs</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
      <View style={styles.bottom}></View>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  // const mealId = navigationData.navigation.getParam('mealId');
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFavourite = navigationData.navigation.getParam('toggleFav');
  const isFavourite = navigationData.navigation.getParam('isFav');
  // const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favourite"
          iconName={isFavourite ? 'ios-heart' : 'ios-heart-empty'}
          onPress={toggleFavourite}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
    backgroundColor: 'white',
    marginBottom: 10
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    marginVertical: 10,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 5,
    marginHorizontal: 20,
    padding: 10
  },
  bottom: {
    marginBottom: 50
  }
});

export default MealDetailScreen;

