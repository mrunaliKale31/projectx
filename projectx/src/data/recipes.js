export const recipes = [
  {
    id: '1',
    title: 'Avocado Quinoa Salad',
    description: 'A refreshing and nutrient-dense salad packed with protein and healthy fats.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    time: '15 mins',
    calories: '320 kcal',
    difficulty: 'Easy',
    tags: ['Vegan', 'Gluten-Free'],
    ingredients: [
      { name: 'Quinoa (cooked)', amount: '1 cup' },
      { name: 'Ripe Avocados (diced)', amount: '2' },
      { name: 'Cherry Tomatoes', amount: '1 cup' },
      { name: 'Cucumber (diced)', amount: '1/2' },
      { name: 'Red Onion (finely chopped)', amount: '1/4 cup' },
      { name: 'Lemon Juice', amount: '2 tbsp' },
      { name: 'Olive Oil', amount: '1 tbsp' },
      { name: 'Salt & Pepper', amount: 'to taste' },
    ],
    steps: [
      'In a large bowl, combine the cooked quinoa, diced avocados, cherry tomatoes, cucumber, and red onion.',
      'In a small jar, whisk together the lemon juice, olive oil, salt, and pepper to create the dressing.',
      'Pour the dressing over the salad and toss gently to combine ensuring the avocado isn\'t completely mashed.',
      'Serve immediately or chill for 30 minutes before serving for enhanced flavors.'
    ]
  },
  {
    id: '2',
    title: 'Baked Salmon with Asparagus',
    description: 'Heart-healthy Omega-3 rich salmon paired with roasted asparagus.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    time: '25 mins',
    calories: '450 kcal',
    difficulty: 'Medium',
    tags: ['Keto', 'Gluten-Free', 'High-Protein'],
    ingredients: [
      { name: 'Salmon Fillets', amount: '2 (6 oz each)' },
      { name: 'Asparagus', amount: '1 bunch' },
      { name: 'Olive Oil', amount: '2 tbsp' },
      { name: 'Garlic (minced)', amount: '2 cloves' },
      { name: 'Lemon (sliced)', amount: '1/2' },
      { name: 'Fresh Dill', amount: '1 tbsp' },
      { name: 'Salt & Pepper', amount: 'to taste' },
    ],
    steps: [
      'Preheat your oven to 400°F (200°C) and line a baking sheet with parchment paper.',
      'Place the salmon fillets in the center of the baking sheet and arrange the asparagus around them.',
      'Drizzle olive oil over the salmon and asparagus. Rub the minced garlic over the salmon fillets.',
      'Season everything generously with salt, pepper, and fresh dill. Top the salmon with lemon slices.',
      'Bake for 12-15 minutes, or until the salmon is opaque and flakes easily with a fork, and the asparagus is tender.'
    ]
  },
  {
    id: '3',
    title: 'Sweet Potato & Black Bean Bowl',
    description: 'A hearty plant-based bowl providing lasting energy and fiber.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    time: '35 mins',
    calories: '380 kcal',
    difficulty: 'Easy',
    tags: ['Vegan', 'High-Fiber'],
    ingredients: [
      { name: 'Sweet Potatoes (cubed)', amount: '2 medium' },
      { name: 'Black Beans (rinsed)', amount: '1 can (15oz)' },
      { name: 'Brown Rice (cooked)', amount: '1 cup' },
      { name: 'Corn', amount: '1/2 cup' },
      { name: 'Avocado', amount: '1/2' },
      { name: 'Cumin', amount: '1 tsp' },
      { name: 'Chili Powder', amount: '1/2 tsp' },
      { name: 'Lime Juice', amount: '1 tbsp' },
    ],
    steps: [
      'Preheat oven to 400°F (200°C). Toss cubed sweet potatoes with a little oil, cumin, chili powder, and salt.',
      'Roast the sweet potatoes for 25-30 minutes until tender and slightly caramelized on the edges.',
      'While the potatoes roast, warm the black beans and corn in a small pot.',
      'Assemble the bowls by layering brown rice, roasted sweet potatoes, black beans, and corn.',
      'Top with sliced avocado, a squeeze of fresh lime juice, and optional fresh cilantro.'
    ]
  },
  {
    id: '4',
    title: 'Matcha Chia Seed Pudding',
    description: 'An antioxidant-rich, make-ahead breakfast or snack.',
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    time: '5 mins + Chill',
    calories: '210 kcal',
    difficulty: 'Easy',
    tags: ['Vegan', 'Gluten-Free', 'Low-Carb'],
    ingredients: [
      { name: 'Chia Seeds', amount: '1/4 cup' },
      { name: 'Almond Milk', amount: '1 cup' },
      { name: 'Matcha Green Tea Powder', amount: '1 tsp' },
      { name: 'Maple Syrup', amount: '1 tbsp' },
      { name: 'Vanilla Extract', amount: '1/2 tsp' },
      { name: 'Fresh Berries', amount: 'for topping' },
    ],
    steps: [
      'In a bowl, sift the matcha powder to remove any clumps.',
      'Add a small splash of the almond milk and whisk vigorously until a smooth paste forms.',
      'Whisk in the remaining almond milk, maple syrup, and vanilla extract until well combined.',
      'Stir in the chia seeds. Wait 5 minutes, then stir again to prevent clumping.',
      'Cover and refrigerate for at least 2 hours or overnight. Top with fresh berries before serving.'
    ]
  }
];
