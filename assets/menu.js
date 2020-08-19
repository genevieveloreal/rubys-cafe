const menu = {
   allday: [
        {
            name: "Bacon & Egg Roll",
            desc: "Bacon, fried egg on a milk bun. Your choice of tomato or BBQ sauce",
            price: "9",
        },
        {
            name: "Haloumi Roll",
            desc: "Grilled haloumi, mushrooms, leafy greens and tomato relish on a milk bun",
            price: "13",
        },
       {
           name: "Smashed Avocado",
           desc: "Toasted sourdough and avo smash finished with feta",
           price: "13",
       },
       {
            name: "Grilled toasties",
            desc: "",
            price: "",
            items: [
                {
                    name: "Ham, cheese, tomato on white thick cut bread",
                    price: "8"
                },
                {
                    name: "Caramelised onion, goat's cheese, balsamic mushrooms, spinach and tomato",
                    price: "10"
                }
            ]
        },
       {
           name: "Toast",
           desc: "Your choice of white sourdough or quinoa and linseed, served with condiments",
           price: "5",
       },
        {
            name: "Banana Bread or Raisin Toast",
            desc: "",
            price: "5",
        }

    ],
   breakfast: [
        {
            name: "Eggs Your Way",
            desc: "Sourdough toast with a choice of fried, scrambled or poached eggs",
            price: "11",
        },
        {
            name: "Eggs Benedict",
            desc: "Ham, wilted spinach, poached eggs, hollandaise sauce on a toasted english muffin",
            price: "15",
        },
        {
            name: "Haloumi Stack",
            desc: "Toasted sourdough, haloumi, poached egg, romesco with a salad of roast capsicum, spinach and artichoke, finished with basil leaves and salsa verde",
            price: "20",
        },
        {
            name: "Benny Roll",
            desc: "Poached eggs, bacon, spinach and hollandaise on a milk bun",
            price: "11",
        },
        {
            name: "French Toast",
            desc: "Served with mixed berry compote and maple syrup",
            price: "11",
        },
       {
            name: "Big Breakfast",
            desc: "Eggs your way with grilled tomato, pork chipolata, bacon and hash brown",
            price: "22",
        },

    ],

    burgers: [
         {
            name: "Old School Burger",
            desc: "Smashed beef patty, cheese, pineapple, beetroot, leafy greens and BBQ sauce",
            price: "18",
        },
        {
            name: "The Double Patty",
            desc: "Double beef patty, cheese, bacon, tomato, lettuce and jalapeno mayo",
            price: "18",
        },
        {
            name: "Vegan Burger",
            desc: "Chickpea & Zucchini patty, avocado, tomato, mixed greens, vegan chipotle on a vegan bun",
            price: "18",
        },
        {
            name: "Hawaiian Chicken Burger",
            desc: "Marinated chicken breast, ham, pineapple, cheese, leafy greens, sweet chili mayo",
            price: "18",
        },
        {
            name: "Pork Katsu Burger",
            desc: "Crumbed pork, cabbage slaw, kewpie mayo, tonkatsu sauce",
            price: "18",
        },
        {
            name: "Steak Sandwich",
            desc: "Steak, greens, tomato, caramelised onion, tomato relish, cheese on a Turkish roll",
            price: "18",
        },
        {
          name: "Wraps",
          desc: "Served with salad garnish",
          price: "",
          items: [
            {
              name: "Chicken, cheese, tomato, leafy greens and aioli",
              price: "12"
            },
            {
              name: "Battered fish, tomato, lettuce and tartare",
              price: "12"
            }
          ]
        },
    ],
    seafood: [
        {
            name: "Fish and Chips",
            desc: "Okains bay blue eyed cod fillets in light batter, chips, salad, tartare sauce, lemon",
            price: "19",
        },
      {
        name: "Grilled Barramundi",
        desc: "Cooked on the grill in lemon pepper butter, served with salad, chips, tartare sauce, lemon",
        price: "22",
      },
        {
            name: "Calamari",
            desc: "Panko calamari rings, chips and salad, aioli, lemon",
            price: "17",
        },
        {
            name: "Seafood Basket",
            desc: "Battered cod fillets, crispy prawns, calamari rings, chips, salad, tartare sauce",
            price: "22",
        },
        {
            name: "Chicken Schnitzel",
            desc: "Chicken schnitzel served with chips, salad and gravy",
            price: "16",
        },
      {
        name: "Chicken Parma",
        desc: "Chicken Parma served with chips and salad",
        price: "17.50",
      },
    ],
    toshare: [
        {
            name: "Hot Chips",
            desc: "",
            price: "6",
        },
        {
            name: "Sweet Potato Fries",
            desc: "With aioli",
            price: "8.50",
        },
        {
            name: "Seasoned Potato Wedges",
            desc: "With sweet chili and sour cream",
            price: "8.50",
        },
        {
            name: "Potato Scallops (3)",
            desc: "",
            price: "5",
        },
    ],
    hotdrinks: [
        {
            name: "Coffees",
            desc: "Cappuccino / Flat White / Long Black / Mocha / Latte / Chai Latte / Hot Chocolate",
            price: "4",
            items: [
                {
                    name: "Make it a large!",
                    price: "4.80",
                }
            ]
        },
        {
            name: "Espresso / Macchiato",
            desc: "",
            price: "3.50",
        },
        {
            name: "Piccolo Latte",
            desc: "",
            price: "4",
        },
        {
            name: "Tumeric Latte",
            desc: "",
            price: "6",
        },
        {
            name: "Teas",
            desc: "English Breakfast / Green Tea / Peppermint Tea / Chai Tea / Earl Grey",
            price: "4",
        },

    ],
    coldrinks: [
        {
            name: "Iced Latte",
            desc: "",
            price: "4.80",
        },
        {
            name: "Iced Coffee / Iced Chocolate",
            desc: "",
            price: "7",
        },
        {
            name: "Milkshakes",
            desc: "Vanilla / Chocolate / Caramel / Strawberry",
            price: "6",
        },
        {
            name: "Smoothies",
            desc: "Banana / Mango",
            price: "8",
        },
        {
            name: "Green Smoothie",
            desc: "Apple, cucumber, mango, spinach, coconut water and lemon",
            price: "9",
        },

    ]
};

export default menu;
