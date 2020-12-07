const denver = {
  elevation: 5280,
  mayor: "Michael Hancock",
  neighborhoods: [
   { name: "LoDo", population: 9704 },
   { name: "Five Points", population: 16350 },
   { name: "Cap Hill", population: 37660 },
   { name: "RiNo", population: 42849 },
   { name: "Wash Park", population: 57759 },
   { name: "Uptown", population: 37660 },
   { name: "City Park", population: 8202 },
   { name: "Highlands", population: 43499 },
   { name: "Golden Triangle", population: 1577 },
   { name: "Platt Park", population: 35577 },
  ],
  buildings: {
    commercial: [
      { name: "707 17th Street", floors: 42, completed: 1981, height: 552 },
      { name: "1125 17th Street", floors: 25, completed: 1980, height: 363 },
      { name: "1600 Glenarm Place", floors: 32, completed: 1967, height: 352 }
    ],
    historical: [
      { name: "Avoca Lodge", floors: 2, completed: 1897, height: 24 },
      { name: "Brown Palace Hotel", floors: 9, completed: 1892, height: 100 },
      { name: "Denver Public Library", floors: 6, completed: 1995, height: 12 }
    ],
    athletic: [
      { name: "Coors Field", floors: 4, completed: 1995, height: 64 },
      { name: "Sports Authority Field at Mile High", floors: 8, completed: 2011, height: 112 },
      { name: "Pepsi Center", floors: 5, completed: 1999, height: 68 }
    ],
    entertainment: [
      { name: "Cherry Creek Shopping Center", floors: 2, completed: 1953, height: 30 },
      { name: "Casa Bonita", floors: 2, completed: 1974, height: 44 },
      { name: "Denver Museum of Nature and Science", floors: 5, completed: 1900, height: 54 }
    ],
    medical: [
      { name: "Saint Joseph Hospital", floors: 12, completed: 1873, height: 120, beds: 365 },
      { name: "Denver Health Medical Center", floors: 9, completed: 1860, height: 100, beds: 477 },
      { name: "Swedish Medical Center", floors: 6, completed: 1905, height: 65, beds: 368 }
    ]
  },
  restaurants: [
    { name: "Fruition Restaurant", type: "Fine Dining", number_of_reviews: 788, neighborhood: "Cap Hill" },
    { name: "Sushi Den", type: "Fine Dining", number_of_reviews: 479, neighborhood: "Platt Park" },
    { name: "A Taste Of Haiti", type: "Haitian", number_of_reviews: 218, neighborhood: "Five Points" },
    { name: "Cuba Cuba", type: "Cuban", number_of_reviews: 872, neighborhood: "Golden Triangle" },
    { name: "Sam's No. 3", type: "Cheap Eats", number_of_reviews: 1870, neighborhood: "LoDo" },
    { name: "Pete's Kitchen", type: "Cheap Eats", number_of_reviews: 236, neighborhood: "City Park" },
    { name: "Root Down", type: "Lunch", number_of_reviews: 972, neighborhood: "Highlands" },
    { name: "The Capital Grille", type: "Lunch", number_of_reviews: 531, neighborhood: "LoDo" },
    { name: "Acorn", type: "Dinner", number_of_reviews: 309, neighborhood: "RiNo" },
    { name: "Panzano", type: "Dinner", number_of_reviews: 1316, neighborhood: "LoDo" }
  ],
  breweries: [
    { name: "Little Machine Brew", neighborhood: "Highlands", number_of_beers: 13,
      beers: [
        { name: 'B.B. Rodriguez', type: 'Coffee Double Brown', abv: 8, ibu: 30, },
        { name: 'West Side is the Blessed Side', type: 'Barrel-Aged Tripel', abv: 7.3, ibu: 35, },
        { name: 'Tigercat', type: 'American Pale Ale', abv: 5.6, ibu: 48, },
        { name: 'Miner Threat', type: 'Rhubarb Grisette', abv: 4, ibu: 10, },        
        { name: 'That\'s My Yam', type: 'Sweet Potato Stout', abv: 5.6, ibu: 25, },
        { name: 'Sir Veza', type: 'Mexican Style Lager', abv: 5.3, ibu: 8, },
        { name: 'Racer Back', type: 'English Pale', abv: 5.5, ibu: 18, },
        { name: 'The Gaffer', type: 'London Style Porter', abv: 5.6, ibu: 28, },
        { name: 'N22', type: 'Oatmeal Stout (Nitro)', abv: 5.7, ibu: 30, },
        { name: 'Razz Against The Machine', type: 'Tart Raspberry Ale', abv: 5.3, ibu: 12, },
        { name: 'Spirit of the Game', type: 'Saison', abv: 5.4, ibu: 25, },
        { name: 'Socialist Millionare Problem', type: 'Session Pale Ale', abv: 4.9, ibu: 25, },
      ]
    },
    { name: "Ratio Beerworks", neighborhood: "RiNo", number_of_beers: 5,
      beers: [
        { name: 'Domestica', type: 'American Standard Ale', abv: 4.9, ibu: 11, },
        { name: 'Dear You', type: 'French Saison', abv: 5.5, ibu: 25, },
        { name: 'Hold Steady', type: 'Chocolate Rye Scotch Ale', abv: 7.5, ibu: 27, },
        { name: 'Antidote', type: 'India Pale Ale', abv: 7.0, ibu: 69, },
        { name: 'Repeater', type: 'Extra Pale Ale', abv: 6.1, ibu: 50, }
      ]
    },
    { name: "Spangalang Brewery", neighborhood: "Five Points", number_of_beers: 9,
      beers: [
        { name: 'Sugarfood', type: 'Belgian', abv: 3.5, ibu: 15, },
        { name: 'Sidewinder Wit', type: 'Belgian Style Wit', abv: 5.5, ibu: 12, },
        { name: 'Beatrice', type: 'Saison', abv: 6, ibu: 30, },
        { name: 'Sir Hops-A-Lot', type: 'Dry Hopped Petit Saison', abv: 4.5, ibu: 40, },
        { name: 'Birth of Cool', type: 'Gose', abv: 4.6, ibu: 10, },
        { name: 'Dysfunction Junction', type: 'Sour', abv: 6.2, ibu: 4, },
        { name: 'Dry Hopped Lager', type: 'Lager', abv: 5.3, ibu: 30, },
        { name: 'Summer Citrus IPA', type: 'India Pale Ale', abv: 6.5, ibu: 60, },
        { name: 'D-Train', type: 'India Pale Ale', abv: 6.5, ibu: 50, },
      ]
    },
    { name: "Great Divide", neighborhood: "RiNo", number_of_beers: 24, beers: [] },
    { name: "Beryl's Beer Co.", neighborhood: "RiNo", number_of_beers: 30, 
      beers: [
        { name: '5 to 7', type: 'Hoppy Pils', abv: 5.7, ibu: 50, },
        { name: 'Dick Nichols', type: 'English IPA', abv: 7.1, ibu: 60, },
        { name: 'Heaven-N-Helles', type: 'Helles', abv: 4.9, ibu: null, },
        { name: 'Mila', type: 'Petite Sour Saison', abv: 4.2, ibu: null, },
        { name: 'O.G. Dunkel', type: 'Bavarian Dunkel', abv: 5.1, ibu: null, },
        { name: 'Paper Moon', type: 'Pale Ale', abv: 5.8, ibu: null, },
        { name: 'Riga', type: 'Baltic Porter', abv: 7.2, ibu: null, },
      ]
    },
    { name: "LowDown Brewery", neighborhood: "Cap Hill", number_of_beers: 14, beers: [] },
    { name: "Call to Arms", neighborhood: "Highlands", number_of_beers: 7, beers: [] },
    { name: "Denver Beer Co.", neighborhood: "LoDo", number_of_beers: 22, beers: [] },
    { name: "Platt Park Brewing Co.", neighborhood: "Platt Park", number_of_beers: 12,
      beers: [
        { name: 'Platt Park Porter', type: 'Porter', abv: 5.4, ibu: 22, },
        { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 },
        { name: 'Phaded Pale Ale', type: 'American Pale Ale', abv: 5.1, ibu: 42 },
        { name: 'Old Man Strength', type: 'Imperial Red Ale', abv: 10.3, ibu: 88 },
        { name: 'Tropical Snow Dance IPA', type: 'India Pale Ale', abv: 6.9, ibu: 90 },
        { name: 'Madagascar Dream', type: 'Cream Ale', abv: 6.9, ibu: 18 },
        { name: 'Oktoberfest', type: 'Oktoberfest', abv: 5.5, ibu: 29 },
      ]
    }
  ]
};

module.exports = denver;