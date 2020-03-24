class Meal {
    constructor(
        id, 
        categoryIds, 
        title, 
        netcarbs, 
        imageUrl, 
        duration, 
        ingredients, 
        steps, 
        isGlutenFree, 
        isVegetarian, 
        isLactoseFree
        ) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.netcarbs = netcarbs;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.ingredients = ingredients;
        this.steps = steps;
        this.isGlutenFree = isGlutenFree;
        this.isVegetarian = isVegetarian;
        this.isLactoseFree = isLactoseFree;
    }
}

export default Meal;