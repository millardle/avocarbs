import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Highly Rated'),
  new Category('c2', 'Quick & Easy'),
  new Category('c3', 'On A Budget'),
  new Category('c4', 'Eggs'),
  new Category('c5', 'Pancakes'),
  new Category('c6', 'Sandwiches'),
  new Category('c7', 'Salads'),
  new Category('c8', 'Burgers'),
  new Category('c9', 'Cauliflower'),
  new Category('c10', 'Pizza'),
  new Category('c11', 'Pasta'),
  new Category('c12', 'Vegetarian'),
  new Category('c13', 'Cake'),
  new Category('c14', 'Icecream'),
  new Category('c15', 'Chocolate'),
  // new Category('b4', 'Vegetarian', '#008C3F'),
];

// Recommended
export const CATEGORIES1 = [
  new Category('c1', 'Highly Rated', 'blue', 'https://images.pexels.com/photos/793785/pexels-photo-793785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
  new Category('c2', 'Quick & Easy', '#C5A3FF', 'https://images.pexels.com/photos/90893/pexels-photo-90893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
  new Category('c3', 'On A Budget', '#B5B9FF', 'https://images.pexels.com/photos/3877676/pexels-photo-3877676.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
];

// Breakfast
export const CATEGORIES2 = [
  new Category('c4', 'Eggs', '#AFCBFF', 'https://images.pexels.com/photos/824635/pexels-photo-824635.jpeg'),
  new Category('c5', 'Pancakes', '#AFF8DB', 'https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
  new Category('c6', 'Sandwiches', '#C4FAF8', 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
];

// Lunch
export const CATEGORIES3 = [
  new Category('c7', 'Salads', '#ACE7FF', 'https://images.pexels.com/photos/1580466/pexels-photo-1580466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'), 
  new Category('c8', 'Burgers', '#E7FFAC', 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg'),
  new Category('c9', 'Cauliflower', '#FFFFD1', 'https://images.pexels.com/photos/2226987/pexels-photo-2226987.jpeg'),

];

// Dinner
export const CATEGORIES4 = [
  new Category('c10', 'Pizza', '#FFC9DE', 'https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg'),
  new Category('c11', 'Pasta', '#FFABAB', 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
  new Category('c12', 'Vegetarian', '#FFCCF9', 'https://images.pexels.com/photos/3510155/pexels-photo-3510155.jpeg')
];

// Snacks & Desserts
export const CATEGORIES5 = [
  new Category('c13', 'Cake', '#D5AAFF', 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
  new Category('c14', 'Icecream', '#B5B9FF', 'https://images.pexels.com/photos/2161643/pexels-photo-2161643.jpeg'),
  new Category('c15', 'Chocolate', '#E7FFAC', 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg')
];

export  const MEALS = [
  new Meal (
      'm1',
      ['c1', 'c2', 'c3', 'c4'],
      'Class Bacon & Eggs',
      1,
      'https://i.dietdoctor.com/wp-content/uploads/2015/12/DD-14.jpg?auto=compress%2Cformat&w=800&h=450&fit=crop',
      10,
      [
          '2 eggs',
          '35g bacon, in slices',
          'Salt and pepper',
          'Cherry tomatoes (optional)',
          'Fresh parsley (optional)'
      ],
      [
          '1. Fry the bacon in a pan on medium high heat until crispy. Put aside on a plate. Leave the rendered fat in the pan.',
          '2. Use the same pan to fry the eggs. Place it over medium heat and crack your eggs into the bacon grease. You can also crack them into a measuring cup and carefully pour into the pan to avoid splattering of hot grease.',
          '3. Cook the eggs any way you like them. For sunny side up — leave the eggs to fry on one side and cover the pan with a lid to make sure they get cooked on top. For eggs cooked over easy — flip the eggs over after a few minutes and cook for another minute. Cut the cherry tomatoes in half and fry them at the same time.',
          '4. Salt and pepper to taste.'
      ],
      true,
      false,
      true
  ),

  new Meal (
      'm2',
      ['c1', 'c2', 'c3', 'c4'],
      'Keto Mexican Scrambled Eggs',
      2,
      'https://i.dietdoctor.com/wp-content/uploads/2015/12/DD-16.jpg?auto=compress%2Cformat&w=800&h=450&fit=crop',
      15,
      [
          '7g butter',
          '1/4 scallion, finely chopped',
          '1/2 pickled jalapeños, finely chopped',
          '1/4 tomato, finely chopped',
          '2 eggs',
          '20g shredded cheese',
          'salt and pepper'
      ],
      [
          '1. In a large frying pan, melt the butter over medium high heat.',
          '2. Add scallions, jalapeños and tomatoes, and fry for 3-4 minutes.',
          '3. Beat the eggs and pour into the pan. Scramble for 2 minutes. Add cheese and seasonings.'
      ],
      true,
      true,
      false
  ),

  new Meal (
      'm3',
      ['c4'],
      'Low-carb Baked Eggs',
      2,
      'https://i.dietdoctor.com/wp-content/uploads/2016/05/DD-40.jpg?auto=compress%2Cformat&w=800&h=450&fit=crop',
      15,
      [
          '75g ground beef, ground lamb, or ground pork',
          '2 eggs',
          '50g shredded cheese'
      ],
      [
          '1. Preheat the oven to 400°F (200°C).',
          '2. Arrange cooked ground-beef mixture in a small baking dish. Then make two holes with a spoon and crack the eggs into them.',
          '3. Sprinkle shredded cheese on top.',
          '4. Bake in the oven until the eggs are done, about 10-15 minutes.',
          '5. Let cool for a while. The eggs and ground meat get very hot!'
      ],
      true,
      false,
      false
  ),

  new Meal (
      'm4',
      ['c1', 'c5'],
      'Pancakes with Berries & Whipped Cream',
      4,
      'https://i.dietdoctor.com/wp-content/uploads/2015/03/kesoplattar_16-9.jpg?auto=compress%2Cformat&w=1600&h=900&fit=crop',
      25,
      [
          '1 egg',
          '50g (50ml) cottage cheese',
          '1/4 tbsp (2g) ground psyllium husk powder',
          '15g butter or coconut oil',
          '15g raspberries, blueberries, or strawberries',
          '60ml heavy whipping cream'
      ],
      [
          '1. Add eggs, cottage cheese and psyllium husk to a medium size bowl and mix together. Let sit for 5-10 minutes to thicken up a bit.',
          "2. Heat up butter or oil in a non-stick skillet. Fry the pancakes on medium-low heat for 3–4 minutes on each side. Don't make them too big or they will be hard to flip.",
          "3. Add cream to a separate bowl and whip until soft peaks form.",
          "4. Serve the pancakes with the whipped cream and berries of your choice."
      ],
      true,
      true,
      false
  ),

  new Meal (
      "m5",
      ['c5'],
      "Maria's Keto Pancakes",
      2,
      'https://i.dietdoctor.com/wp-content/uploads/2017/05/DD-419-zerocarbpancakes.jpg?auto=compress%2Cformat&w=800&h=450&fit=crop',
      20,
      [
          "20g pork rinds",
          "2 eggs",
          "2 tbsp unsweetened cashew milk",
          "1 tbsp maple extract",
          "1 tbsp ground cinnamon",
          "2 tbsp coconut oil, for frying"
      ],
      [
          "1. Place the pork rinds in a blender or food processor and pulse until ground into a fine powder. You can also crush the pork rinds with mortar and pestle, or in a plastic bag, just use a rolling pin to get it really fine.",
          "2. Add the rest of the ingredients and combine until smooth.",
          "3. Heat a skillet to medium heat. Once hot, add a tablespoon of coconut oil.",
          "4. Pour 1/4 cup batter into the skillet. Fry until golden brown and set, about 2 minutes. Flip and continue to cook until cooked all the way through.",
          "5. Remove from skillet and repeat with remaining batter. Add more coconut oil as needed."
      ],
      true,
      false,
      false
  ),

  new Meal (
      "m6",
      ['c5'],
      "Oven Pancake with Bacon & Onion",
      5,
      'https://i.dietdoctor.com/wp-content/uploads/2018/08/DD_Oven_pancake_JillW_H_2.jpg?auto=compress%2Cformat&w=800&h=450&fit=crop',
      40,
      [
          "25g turkey or pork bacon",
          "1/8 yellow onion",
          "1/2 tbsp butter to fry in",
          "1 egg",
          "60ml heavy whipping cream",
          "30ml (25g) cottage cheese",
          "30ml (15g) almond flour",
          "1/4 tbsp (2g) ground psyllium husk powder",
          "1/4 tbsp (1.1g) baking powder",
          "1/4 tbsp salt",
          "1 tbsp chopped fresh parsley, for garnish (optional)"
      ],
      [
          "1. Preheat the oven to 350°F (175°C).",
          "2. Slice the bacon and onion. Heat butter in a frying pan and add bacon and onion. Fry until the onion is soft and the bacon starts getting crispy.",
          "3. In a bowl, whisk together eggs, cottage cheese and cream. Add almond flour, psyllium husk, baking powder and salt. Whisk until thoroughly combined. Let it rest for a couple of minutes.",
          "4. Pour the pancake batter into a greased baking pan and sprinkle the fried bacon and onions on top.",
          "5. Bake for 20-25 minutes. It's ready when it's puffy, golden brown and the center has set."
      ],
      true,
      false,
      false
  ),

  new Meal (
      "m7",
      ['c2', 'c3', 'c6'],
      "Salad Sandwich",
      3,
      "https://i.dietdoctor.com/wp-content/uploads/2015/05/Keto-salad-sandwich-h.jpg?auto=compress%2Cformat&w=800&h=450&fit=crop",
      5,
      [
          "50g Romaine lettuce or baby gem lettuce",
          "15g butter",
          "30g edam cheese or other cheese of your liking (Optional)",
          "1/2 avocado",
          "1 cherry tomato"
      ],
      [
          "1. Rinse the lettuce thoroughly and use as a base for the toppings.",
          "2. Smear butter on the lettuce leaves and slice the cheese, avocado and tomato and add on top."
      ],
      true,
      true,
      true
  ),

  new Meal (
      "m8",
      ['c3', 'c6'],
      "No-bread Keto Sandwich",
      2,
      "https://i.dietdoctor.com/wp-content/uploads/2016/04/DD-49.jpg?auto=compress%2Cformat&w=800&h=450&fit=crop",
      15,
      [
          "1 tbsp butter",
          "2 eggs",
          "salt and pepper",
          "15g smoked deli ham",
          "30g cheddar cheese or cheese of your liking, cut in thick slices (optional)",
          "A few drops of tabasco or Worcestershire sauce (optional)",
      ],
      [
          "1. Add butter to a large frying pan and place it over medium heat. Add the eggs and fry them over easy, on both sides. Salt and pepper to taste.",
          "2. Use a fried egg as the base for each 'sandwich'. Place the ham/pastrami/cold cuts on each stack next, and then add the cheese. Top off each stack with a fried egg. Leave in the pan, on low heat, if you want the cheese to melt.",
          "3. Sprinkle a few drops of Tabasco or Worcestershire sauce if you want, and serve immediately."
      ],
      true,
      false,
      true
  ),

  new Meal (
    "m9",
    ['c1', 'c6'],
    "Keto Sandwich with Smoked Salmon & Horseradish Cream",
    4,
    "https://i.dietdoctor.com/wp-content/uploads/2018/05/DD-623-opensalmonsandwich-2.jpg?auto=compress%2Cformat&w=800&h=450&fit=crop",
    15,
    [
        "100g smoked salmon",
        "60ml mayonnaise or sour cream",
        "15g fresh horseradish, grated",
        "1 tbsp (8g) almond flour",
        "1 tbsp (8g) coconut flour",
        "3/4 tbsp (3.5g) baking powder",
        "1/8 tbsp salt",
        "1 egg",
        "1 tbsp heavy whipping cream",
        "1 1/2 tsp butter",
        "7g arugula lettuce",
        "1/8 small zucchini, finely sliced (optional)",
        "1/2 tbsp pink peppercorns (optional)"
    ],
    [
        "1. Chop the salmon into small pieces and mix with mayonnaise and freshly grated horseradish. Set aside in the refrigerator until it's time to serve.",
        "2. Mix together all dry ingredients for the bread. Crack in the egg and stir in the cream. Combine until smooth. Pour into well-greased mugs or glass molds. 1 egg equals one portion / mug.",
        "3. Microwave on high (approximately 700 watts) for 2 minutes. Check if the bread is done in the middle – if not, microwave for another 15-30 seconds.",
        "4. Let cool and remove from the mug. Slice in half and toast for best taste and texture.",
        "5. Spread butter on each slice, add lettuce leaves, thinly sliced zucchini and a generous dollop of the salmon and horseradish cream. Top with crushed pink peppercorns."
    ],
    true,
    false,
    true
),

  new Meal (
      "m10",
      ['c1', 'c7'],
      "Pastrami Salad with Fried Eggs",
      5,
      "https://i.dietdoctor.com/wp-content/uploads/2016/10/DD-208-2.jpg?auto=compress%2Cformat&w=400&h=600&fit=crop",
      20,
      [
          "60ml mayonnaise",
          "1 tbsp Dijon mustard",
          "1/2 shallot",
          "1/2 dill pickle",
          "50g lettuce",
          "110g pastrami",
          "2 eggs"
      ],
      [
          "1. Stir together mayonnaise and mustard and set aside.",
          "2. Place the lettuce on two plates. Chop the onion and place on top.",
          "3. Cut the pickled cucumber lengthwise into four pieces and place on the lettuce.",
          "4. Add pastrami and a generous amount of the mustard mayonnaise.",
          "5. Fry the eggs just before serving the salad. Sunny side up or over easy, and serve immediately.",
      ],
      true,
      false,
      true
  ),

  new Meal (
      'm11',
      ['c1', 'c7'],
      "Avocado, Bacon, & Goat-cheese Salad",
      6,
      "https://i.dietdoctor.com/wp-content/uploads/2015/11/DD-4-2.jpg",
      30,
      [
          "50g goat cheese",
          "50g bacon",
          "1/2 avocado",
          "30g arugula lettuce",
          "30g walnuts",
          "1/4 tbsp lemon, the juice",
          "30ml mayonnaise",
          "30ml olive oil",
          "1/2 tbsp heavy whipping cream",
          "salt and pepper"
      ],
      [
          "1. Preheat the oven to 400°F (200°C) and place parchment paper in a baking dish.",
          "2. Cut the goat cheese into round half inch (~1 cm) slices and place in the baking dish. Bake on upper rack until golden.",
          "3. Fry the bacon in a pan until crispy.",
          "4. Cut the avocado into pieces and put on top of the arugula. Add the fried bacon and goat cheese. Sprinkle nuts on top.",
          "5. Using an immersion blender, make the dressing with the lemon juice, mayonnaise, olive oil and cream. Season with salt and pepper to taste."
      ],
      true,
      false,
      false
  ),

  new Meal (
      'm12',
      ['c7'],
      "Chicken Caesar Salad",
      4,
      "https://i.dietdoctor.com/wp-content/uploads/2017/03/DD-382-2.jpg?auto=compress%2Cformat&w=400&h=600&fit=crop",
      35,
      [
          "175g chicken breasts",
          "1/2 tbsp olive oil",
          "salt and pepper",
          "40g bacon",
          "100g Romaine lettuce",
          "15g parmesan cheese, freshly grated",
          "60ml mayonnaise",
          "1/2 tbsp Dijon mustard",
          "1/4 lemon, zest and juice",
          "7g grated parmesan cheese, finely grated",
          "1 tbsp finely chopped filets of anchovies",
          "1/2 garlic clove, pressed or finely chopped",
      ],
      [
          "1. Preheat the oven to 350°F (175°C).",
          "2. Mix the ingredients for the dressing with a whisk or an immersion blender. Set aside in the refrigerator.",
          "3. Place the chicken breasts in a greased baking dish.",
          "4. Season the chicken with salt and pepper and drizzle olive oil or melted butter on top. Bake the chicken in the oven for about 20 minutes or until fully cooked through. You can also cook the chicken on the stove top if you prefer.",
          "5. Fry the bacon until crisp. Chop the lettuce and place as a base on two plates. Place sliced chicken and the crispy, crumbled bacon on top.",
          "6. Finish with a generous dollop of dressing and a good grating of parmesan cheese."
      ],
      true,
      false,
      true
  ),

  new Meal (
      'm13',
      ['c8'],
      "Burger Patties with Creamy Tomato Sauce & Fried Cabbage",
      10,
      "https://i.dietdoctor.com/wp-content/uploads/2015/12/Patties-2.jpg?auto=compress%2Cformat&w=400&h=600&fit=crop",
      60,
      [
          "175g ground beef",
          "1/4 egg",
          "20g crumbled feta cheese",
          "22g fresh parsley, finely chopped",
          "1/4 tbsp olive oil, for frying",
          "1/2 tbsp butter, for frying",
          "50 ml heavy whipping cream",
          "1/2 tbsp tomato paste or ajvar relish",
          "175g shredded green cabbage",
          "30g butter",
          "salt and pepper",
      ],
      [
          "1. Shred the cabbage finely using a food processor or sharp knife.",
          "2. Add butter to a large frying pan.",
          "3. Place the pan over medium high heat and sauté the shredded cabbage for at least 15 minutes or until the cabbage is wilted and golden brown around the edges.",
          "4. Stir regularly and lower the heat a little towards the end. Add salt and pepper to taste.",
          "5. Add all ingredients for the hamburgers to a large bowl. Blend it using a wooden spoon or your clean hands. Don't over mix since that can make your patties tough. Use wet hands to form eight oblong patties.",
          "6. Add butter and olive oil to a large frying pan. Fry over medium-high heat for at least 10 minutes or until the patties have turned a nice color. Flip them a few times for even cooking.",
          "7. In a small bowl, whisk together the tomato paste and cream. Add this mixture to the pan when the patties are almost done. Stir and let simmer for a few minutes. Salt and pepper to taste.",
          "8. Sprinkle chopped parsley on top before serving.",
      ],
      true,
      false,
      false
  ),

  new Meal (
      'm14',
      ['c1', 'c8'],
      "Class Keto Hamburger",
      6,
      "https://i.dietdoctor.com/wp-content/uploads/2016/06/hb-high.jpg?auto=compress%2Cformat&w=400&h=600&fit=crop",
      70,
      [
          "75 ml (40 g) super fine almond flour",
          "1 1/4 tbsp (10 g) ground psyllium husk powder",
          "1/2 tbsp (2.5 g) baking",
          "1/4 tbsp sea salt",
          "75ml water",
          "1/2 tbsp white wine vinegar or cider vinegar",
          "3/4 egg white",
          "1/4 tbsp (2.2 g) sesame seeds",
          "200g ground beef",
          "7g butter or olive oil, for frying",
          "salt and pepper",
          "15g lettuce, shredded",
          "1/4 tomato, thinly sliced",
          "1/4 red onion, thinly sliced",
          "30ml mayonnaise",
          "35g bacon"
      ],
      [
          "1. Preheat the oven to 350°F (175°C).",
          "2. Start by making the hamburger buns. Mix together the dry ingredients in a bowl.",
          "3. Bring water to a boil. Add the water, the vinegar and the egg whites to the bowl while beating with a hand mixer for about 30 seconds. Don't overmix the dough; the consistency should resemble Play-Doh.",
          "4. With moist hands, form the dough into individual pieces of bread, one for each serving. Sprinkle sesame seeds on top. Be sure to leave enough room on the baking sheet for the buns to double in size.",
          "5. Bake on lower rack in oven for 50-60 minutes. They're done when you hear a hollow sound when tapping the bottom of the buns.",
          "6. Fry the bacon slices over medium heat.",
          "7. Form the ground beef into individual hamburgers and either grill or fry. Season with salt and pepper when the hamburgers are almost done.",
          "8. Split each roll in half and spread a generous amount of mayonnaise on each half.",
          "9. Build your hamburger to your taste."
      ],
      true,
      false,
      true
  ),

  new Meal (
      'm15',
      ['c1', 'c2', 'c9'],
      "Cauliflower Soup With Crispy Pancetta",
      6,
      "https://i.dietdoctor.com/wp-content/uploads/2016/04/DD-84-2.jpg?auto=compress%2Cformat&w=400&h=600&fit=crop",
      20,
      [
          "1 liter chicken broth or vegetable stock",
          "450g cauliflower",
          "1 tbsp butter, for frying",
          "200g cream cheese",
          "1 tbsp Dijon mustard",
          "110g butter",
          "salt and pepper",
          "200g pancetta or bacon, diced",
          "1 tsp paprika powder or smoked chili powder",
          "75g pecans"
      ],
      [
          "1. Trim the cauliflower and cut into smaller florets. The smaller you cut them, the quicker the soup will be ready.",
          "2. Save a handful of fresh cauliflower and chop into tiny 1/4 inch bits.",
          "3. Sauté the finely chopped cauliflower (from step 2) and pancetta or bacon in butter until crispy. Add nuts and paprika powder towards the end. Set aside the mixture for serving.",
          "4. Meanwhile, boil the cauliflower florets in the stock until soft. Add cream cheese, mustard and butter.",
          "5. Mix the soup, using an immersion blender, to desired consistency. The longer you blend, the creamier the soup. Salt and pepper to taste.",
          "6. Serve the soup in bowls, and top with the fried pancetta mixture."
      ],
      true,
      false,
      false
  ),

  new Meal (
    'm16',
    ['c1', 'c3', 'c10'],
    "Classic Keto Pizza",
    5,
    "https://i.dietdoctor.com/wp-content/uploads/2016/01/keto_pizza_h.jpg?auto=compress%2Cformat&w=400&h=600&fit=crop",
    30,
    [
        "4 eggs",
        "325g shredded cheese, preferably mozzarella or provolone",
        "3 tbsp unsweetened tomato sauce",
        "1 tbsp dried oregano",
        "40g pepperoni (optional)",
        "olives (optional)",
        "50 g leafy greens",
        "4 tbsp olive oil",
        "sea salt and ground black pepper"
    ],
    [
        "1. Preheat the oven to 400°F (200°C).",
        "2. Start by making the crust. Crack eggs into a medium-sized bowl and add shredded cheese. Give it a good stir to combine.",
        "3. Use a spatula to spread the cheese and egg batter on a baking sheet lined with parchment paper. You can form two round circles or just make one large rectangular pizza. Bake in the oven for 15 minutes until the pizza crust turns golden. Remove and let cool for a minute or two.",
        "4. Increase the oven temperature to 450°F (225°C).",
        "5. Spread tomato sauce on the crust and sprinkle oregano on top. Top with cheese and place the pepperoni and olives on top.",
        "6. Bake for another 5-10 minutes or until the pizza has turned a golden brown color.",
        "7. Serve with a fresh salad on the side."
    ],
    true,
    true,
    false
  ),

  new Meal (
      'm17',
      ['c10'],
      "Fathead Pizza",
      9,
      "https://i.dietdoctor.com/wp-content/uploads/2016/09/DD-213-2.jpg?auto=compress%2Cformat&w=400&h=600&fit=crop",
      45,
      [
          "225g fresh italian sausage",
          "1 tbsp butter",
          "125ml unsweetened tomato sauce",
          "1/2 tsp dried oregano",
          "225g mozzarella cheese, shredded",
          "2 tbsp cream cheese",
          "175ml (100 g) almond flour",
          "1 tbsp white wine vinegar",
          "1 egg",
          "1/2 tbsp salt",
          "olive oil, to grease your hands"
      ],
      [
          "1. Preheat the oven to 400°F (200°C).",
          "2. Heat mozzarella and cream cheese in a non-stick pan on medium heat or in a bowl in the microwave oven. Stir until they melt together. Add the other ingredients and mix well. Tip: use a hand mixer with dough hooks.",
          "3. Moisten your hands with olive oil and flatten the dough on parchment paper, making a circle about 8 inches (20 cm) in diameter. You can also use a rolling pin to flatten the dough between two sheets of parchment paper.",
          "4. Remove top parchment sheet (if used). Prick the crust with a fork (all over) and bake in the oven for 10–15 minutes until golden brown. Remove from the oven.",
          "5. While the crust is baking, sautée the ground sausage meat in olive oil or butter.",
          "6. Spread a thin layer of tomato sauce on the crust. Top the pizza with meat and plenty of cheese. Bake for 10–15 minutes or until the cheese has melted.",
          "7. Sprinkle with oregano and enjoy!"
      ],
      true,
      false,
      false
  ),

  new Meal (
      'm18',
      ['c1', 'c11'],
      "Chicken Alfredo Pasta",
      11,
      "https://i.dietdoctor.com/wp-content/uploads/2015/07/012A0910.jpg",
      60,
      [
          "4 eggs",
          "6 egg yolks",
          "175ml water",
          "2 tbsp olive oil",
          "125ml (75 g) ground psyllium husk powder",
          "4 tbsp (30 g) coconut flour",
          "2 1/2 tbsp herbal salt",
          "900g chicken breasts",
          "275g bacon, fried",
          "300ml heavy whipping cream",
          "175ml whole milk",
          "75g parmesan cheese",
          "4 garlic cloves",
          "4 tbsp green pesto",
          "salt and ground black pepper",
          "8 mushrooms",
          "1 red bell pepper",
          "butter, for frying"
      ],
      [
          "1. Set the oven to 300°F (150°C). Start with the pasta: Whisk the eggs until fluffy, add liquids and olive oil.",
          "2. Mix together the dry ingredients and whisk into the egg batter. Let sit for 7–8 minutes. Stir.",
          "3. Spread the batter onto two sheets of parchment paper. Place plastic wrap on top and roll out towards the edges of the papers. Try to spread evenly and thinly.",
          "4. Remove the plastic foil before baking. Bake for about 10 minutes. Let cool and remove the top paper and roll up from the short side. Then cut into strips with a sharp knife.",
          "5. Turn the oven temperature up to 400°F (200°C).",
          "6. Clean the chicken breasts and split lengthwise so that you get twice as many filets. Add salt and pepper and fry in butter over medium heat until the fillets turn golden. Place the chicken on a baking pan and bake about 10 minutes, or until chicken registers 165 degrees.",
          "7. Fry the bacon until crisp. Shred the parmesan cheese. Bring the cream and milk to a boil, stir in finely chopped garlic and pesto and season with salt and pepper.",
          "8. Fry the sliced peppers and mushrooms in butter, and season with salt and pepper. Mix the pasta with the vegetables, and pour the sauce on top. Only mix enough so that everything holds together, the rest of the sauce is served on the side. Spread the chicken on top of everything together with a couple of bacon strips and perhaps a little more parmesan cheese!"
      ],
      true,
      false,
      false
  ),

  new Meal (
      'm19',
      ['c11'],
      "Pasta Carbonara with Zoodles",
      9,
      "https://i.dietdoctor.com/wp-content/uploads/2016/06/keto_pasta_carbonara_v.jpg?auto=compress%2Cformat&w=400&h=600&fit=crop",
      35,
      [
          "300ml heavy whipping cream",
          "1 tbsp butter",
          "275g bacon or pancetta, diced (optional)",
          "60ml mayonnaise",
          "salt and pepper",
          "900g zucchini",
          "4 egg yolks",
          "75g grated parmesan cheese (optional)"
      ],
      [
          "1. Pour the heavy cream into a sauce pan, and bring it to a boil over medium high heat. Lower the heat to medium low, and let boil for a few minutes until reduced by a fourth.",
          "2. In a large frying pan, melt the butter over medium heat. Add bacon to the pan, frying until crispy. Set bacon aside. Keep the fat warm in the pan, on lowest setting.",
          "3. Whisk the mayonnaise into the heavy cream. Salt and pepper to taste, and cook until mayonnaise is warmed through. Reduce temperature to low, stirring occasionally.",
          "4. Make spirals of the zucchini with a spiralizer. If you don't have a spiralizer you can make thin zucchini strips with a potato peeler.",
          "5. Place zoodles in a microwave safe bowl, and microwave on high for 3-5 minutes, until warmed through, yet have a fresh, crispy texture. If you don't want to microwave, you can boil the zoodles in hot water for 30 seconds.",
          "6. In a separate bowl, combine the egg yolks, diced bacon and parmesan cheese.",
          "7. Add the bacon fat and the warm cream sauce to the zoodles, tossing together until zoodles are completely coated. Ensure that this mixture is slightly warm, and then add the egg-bacon-parmesan cheese mixture to the zoodles, tossing all together (the egg mixture will scramble if too warm when combining).",
          "8. Divide between four plates. Top with a generous amount of freshly grated parmesan."
      ],
      true,
      true,
      true
  ),

  new Meal (
      'm20',
      ['c2', 'c12'],
      "Keto Mushroom Omelet",
      5,
      "https://i.dietdoctor.com/wp-content/uploads/2015/12/Mushroom-omelette-v.jpg?auto=compress%2Cformat&w=400&h=600&fit=crop",
      15,
      [
          "3 eggs",
          "30g butter, for frying",
          "30g shredded cheese",
          "1/4 yellow onion, chopped",
          "4 large mushrooms, sliced",
          "salt and pepper"
      ],
      [
          "1. Crack the eggs into a mixing bowl with a pinch of salt and pepper. Whisk the eggs with a fork until smooth and frothy.",
          "2. Melt the butter in a frying pan, over medium heat. Add the mushrooms and onion to the pan, stirring until tender, and then pour in the egg mixture, surrounding the veggies.",
          "3. When the omelet begins to cook and get firm, but still has a little raw egg on top, sprinkle cheese over the egg.",
          "4. Using a spatula, carefully ease around the edges of the omelet, and then fold it over in half. When it starts to turn golden brown underneath, remove the pan from the heat and slide the omelet on to a plate."
      ],
      true,
      true,
      false
  ),

  new Meal (
      'm21',
      ['c12'],
      "Keto Bread Twists",
      1,
      "https://i.dietdoctor.com/wp-content/uploads/2016/05/DD-92-2.jpg?auto=compress%2Cformat&w=400&h=600&fit=crop",
      40,
      [
          "125ml (60 g) almond flour",
          "60ml (30 g) coconut flour",
          "1/2 tbsp salt",
          "1 tbsp (5 g) baking powder",
          "2 eggs, beaten",
          "50g butter",
          "175g shredded cheese, preferably mozzarella",
          "60ml green pesto"
      ],
      [
          "1. Preheat the oven to 350°F (175°C).",
          "2. Mix all dry ingredients in a bowl. Add the egg and combine.",
          "3. Melt the butter and the cheese together in a pot on low heat. Stir until the batter is smooth.",
          "4. Slowly add the butter-cheese batter to the dry mixture bowl and mix together into a firm dough.",
          "5. Place the dough on parchment paper at is the size of a rectangular cookie sheet. Use a rolling pin and make a rectangle, about 1/5-inch (5 mm) thick.",
          "6. Spread pesto on top and cut into 1-inch (2.5 cm) strips. Twist them and place on a baking sheet lined with parchment paper. Brush twists with the whisked egg.",
          "7. Bake in the oven for 15–20 minutes until they're golden brown."
      ],
      true,
      true,
      false
  ),

  new Meal (
    'm22',
    ['c13'],
    "Keto No-bake Chocolate Cake",
    4,
    "https://i.dietdoctor.com/wp-content/uploads/2019/10/Photo-EmmaShevtzoff-Chocolate-cake-v2.jpg?auto=compress%2Cformat&w=400&h=600&fit=crop",
    20,
    [
        "300ml heavy whipping cream or coconut cream",
        "3tbsp (35g) erythritol",
        "200g sugar-free dark chocolate, stevia sweetened",
        "7 tbsp butter",
        "1 pinch sea salt",
        "200g hazelnuts",
        "100g (175ml) pumpkin seeds"
    ],
    [
        "1. In a saucepan, bring heavy cream and sweetener to a boil. Let it simmer for a couple of minutes until creamy. Turn off the heat.",
        "2. Cut the chocolate and butter in smaller pieces and add to the hot cream together with salt. Stir until the chocolate and butter are completely melted and combined.",
        "3. In a large frying pan, roast the hazelnuts and pumpkin seeds until golden and fragrant. Chop them roughly and add almost all of it to the chocolate and mix. Save some for the topping.",
        "4. Spoon the chocolate mixture into a 8-inch (20 cm) springform pan, preferably covered in parchment paper. Press the parchment paper down well to cover the base of the pan. Sprinkle the cake with the remaining nuts and seeds and a pinch of sea salt.",
        "5. Cover with plastic film and put it in the fridge for about an hour or until the chocolate has hardened."
    ],
    true,
    true,
    true
  ),

  new Meal (
      'm23',
      ['c14'],
      "Keto Buttercream",
      1,
      "https://i.dietdoctor.com/wp-content/uploads/2016/06/DD-119-2flip.jpg?auto=compress%2Cformat&w=1487&h=2230&fit=crop",
      15,
      [
          "225g unsalted butter, at room temperature, divided",
          "2 tbsp vanilla extract",
          "1 1/2 tsp ground cinnamon",
          "1 tsp (4g) erythritol (optional)"
      ],
      [
          "1. Brown 1/4 of the butter in a small sauce pan until it turns amber in color, but without burning it.",
          "2. Pour the browned butter in a beaker and whisk in the rest of the butter bit by bit with a hand mixer until fluffy.",
          "3. Add cinnamon, vanilla and optional sweetener towards the end."
      ],
      true,
      true,
      true
  ),

  new Meal (
      'm24',
      ['c15'],
      "Chocolate Macadamia Nut Fat Bomb",
      2,
      "https://i.dietdoctor.com/wp-content/uploads/2018/08/chocolate_covered_macadamia_nut_fat_bombs.png?auto=compress%2Cformat&w=400&h=600&fit=crop",
      40,
      [
          "40g sugar-free dark chocolate, stevia-sweetened chocolate chips",
          "1 tbsp MCT oil or coconut oil",
          "Coarse salt or sea salt",
          "40g raw macadamia nuts halves"
      ],
      [
          "1. Select a truffle mold, mini muffin pan, or mini baking cups with wells that are 2x1.",
          "2. Place 3 macadamia nut halves in each of 8 wells of the mold or mini muffin pan or in each of 8 mini baking cups.",
          "3. In a small microwave-safe dish, microwave the chocolate chips for 50 seconds or until melted. Stir until smooth, then add the MCT oil and a pinch of coarse salt. Mix until blended.",
          "4. Spoon some of the chocolate mixture into each well or baking cup, completely covering the nuts. Sprinkle additional salt over the chocolate.",
          "5. Transfer the mold or baking cups to the freezer for a minimum of 30 minutes, until the chocolate is solid."
      ],
      true,
      true,
      true
  )
];