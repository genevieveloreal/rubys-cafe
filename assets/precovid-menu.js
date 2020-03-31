const precovid_menu = {
    breakfast: [
        {
            name: "Eggs your way",
            desc: "Sourdough toast with a choice of fried, scrambled or poached eggs",
            price: "11",
        },
        {
            name: "Bacon & Eggs",
            desc: "Bacon and eggs cooked your way on sourdough",
            price: "15",
        },
        {
            name: "Eggs Benedict",
            desc: "Ham, wilted spinach, poached eggs, hollandaise sauce on a toasted english muffin",
            price: "15",
        },
        {
            name: "Bruschetta",
            desc: "Sourdough toast, tomato salsa, onion relish, basil, poached egg, finished with balsamic glaze",
            price: "12",
        },
        {
            name: "Haloumi Stack",
            desc: "Toasted sourdough, haloumi, poached egg, romesco with salad of roast capsicum, spinach and artichoke, finished with basil leaves and salsa verde",
            price: "20",
        },
        {
            name: "Blueberry Pancakes",
            desc: "Buttermilk blueberry pancakes, topped with ice cream and maple syrup",
            price: "12",
        },
        {
            name: "Cinnamon French Toast",
            desc: "Brioche served with blueberry compote and sweetened yoghurt",
            price: "15",
        },
        {
            name: "Benny Roll",
            desc: "Poached eggs, bacon, spinach and hollandaise on a milk bun",
            price: "11",
        }
    ],

    allday: [
        {
            name: "Bacon & Egg Roll",
            desc: "Bacon, fried egg on a milk bun. Your choice of tomato or BBQ sauce",
            price: "9",
        },
        {
            name: "Chorizo Roll",
            desc: "Chorizo, fried egg, leafy greens, aioli on a milk bun",
            price: "12",
        },
        {
            name: "Haloumi Roll",
            desc: "Grilled haloumi, mushrooms, leafy greens and tomato relish on a milk bun",
            price: "13",
        },
        {
            name: "Steak Sandwich",
            desc: "Steak, bacon, cheese, caramelised onion, beetroot, leafy greens and BBQ sauce",
            price: "16",
        },
        {
            name: "Vegan Falafel Roll",
            desc: "Beetroot falafel, hash brown avocado and romesco on a vegan roll",
            price: "10",
        },
        {
            name: "Smashed Avocado",
            desc: "Toasted sourdough and avo smash finished with feta, cherry tomatoes, relish, cracked pepper, lemon wedge",
            price: "13",
        },
        {
            name: "Grilled toasties",
            desc: "",
            price: "",
            items: [
                {
                    name: "Ham, cheese, tomato on sourdough",
                    price: "8"
                },
                {
                    name: "Caramelised onion, goat's cheese, balsamic mushrooms, spinach and tomato",
                    price: "10"
                }
            ]
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
                    name: "Mushroom, feta, capsicum, spinach, romesco",
                    price: "12"
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
        },
    ],

    burgers: [
         {
            name: "Classic",
            desc: "Beef patty, relish, caramelised onion, salad and tomato",
            price: "18",
        },
        {
            name: "The Bulli",
            desc: "Beef patty, cheese, bacon, fried egg, hash brown, beetroot, tomato, leafy greens, onion, tomato sauce",
            price: "18",
        },
        {
            name: "Grilled Chicken",
            desc: "Grilled chicken, cheese, tomato, leafy greens, aioli",
            price: "18",
        },
        {
            name: "Peri Peri Chicken",
            desc: "Peri peri chicken, cheese, tomato, capsicum, leafy greens, peri peri mayo",
            price: "18",
        },
        {
            name: "Field Burger",
            desc: "Beetroot falafel patty, capsicum, harissa hummus, beetroot, tomato, spinach, Vegan parmesan on a vegan bun",
            price: "18",
        },
    ],
    seafood: [
        {
            name: "Grilled Barramundi",
            desc: "Cooked on the grill in lemon pepper butter, served with salad, chips, tartare sauce, lemon",
            price: "22",
        },
        {
            name: "Fish and Chips",
            desc: "Okains bay blue eyed cod fillets in light batter, chips, salad, tartare sauce, lemon",
            price: "19",
        },
        {
            name: "Calamari",
            desc: "Panko calamari rings, chips and salad, aioli, lemon",
            price: "17",
        },
        {
            name: "Seafood Basket",
            desc: "Battered cod fillets, crispy prawns, calamari rings, chips, salad, tartare sauce",
            price: "26",
        },
    ],
    kids: [
        {
            name: "Cheeseburger with tomato sauce",
            desc: "",
            price: "10",
            items: [
                {
                    name: "Add chips",
                    price: "2.50"
                }
            ]
        },
        {
            name: "Fish & Chups",
            desc: "",
            price: "10",
        },
        {
            name: "Nuggets & Chips",
            desc: "",
            price: "10",
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
        {
            name: "Noah's Fruit juice",
            desc: "",
            price: "4",
        },
        {
            name: "Bottled Soft Drink",
            desc: "",
            price: "4",
        },
        {
            name: "Canned Soft Drink",
            desc: "",
            price: "3",
        },
        {
            name: "Bottled water",
            desc: "",
            price: "3",
        },
        {
            name: "Sparkling Water",
            desc: "",
            price: "3.50",
        }
    ]
};

export default menu;
