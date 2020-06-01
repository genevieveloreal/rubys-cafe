const menu = {
    breakfast: [
        {
            name: "Eggs your way",
            desc: "Sourdough toast with a choice of fried, scrambled or poached eggs",
            price: "11",
        },
        {
            name: "Eggs Benedict",
            desc: "Ham, wilted spinach, poached eggs, hollandaise sauce on a toasted english muffin",
            price: "14",
        },
        {
            name: "Breakfast Bruschetta",
            desc: "Sourdough toast with avocado, fresh tomato/cucumber salsa & a poached egg. Drizzled with Italian balsamic glaze.",
            price: "13",
        },
        {
            name: "Haloumi Stack",
            desc: "Smashed avocado on sourdough toast with grilled haloumi, poached egg & pesto aioli. Served with fresh rocket salad",
            price: "20",
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
            name: "Haloumi & Mushroom Roll",
            desc: "Grilled haloumi, mushrooms, leafy greens and tomato relish on a milk bun",
            price: "13",
        },
        {
            name: "Smashed Avocado & Fetta",
            desc: "On sourdough bread",
            price: "13",
        },
        {
            name: "Grilled toasties",
            desc: "Ham, cheese, tomato on sourdough",
            price: "8",
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
            name: "The US Bee",
            desc: "Double beef, American cheese, pickles, bacon & special sauce",
            price: "18",
        },
        {
            name: "Picante Chook",
            desc: "Grilled chicken breast fillet, shredded cheese, our house made Peri-Peri sauce with leafy greens & tomato",
            price: "18",
        },
        {
            name: "Old School Hamburger",
            desc: "Smashed beef pattie, cheese, pineapple, beetroot, bacon & smokey bbq sauce",
            price: "18",
        },
        {
            name: "Schnitty & Truffle",
            desc: "Schnitzel & shredded cheese with leafy greens, tomato & truffle mayo",
            price: "18",
        },
        {
            name: "Garden of Vegan",
            desc: "Chickpea & zucchini pattie with avocado, sliced tomato, mixed greens & vegan chipotle mayo on a vegan glazed bun",
            price: "18",
        },
    ],
    seafood: [
        {
            name: "Grilled Barramundi",
            desc: "Classic barramundi fillet cooked with lemon pepper",
            price: "22",
        },
        {
            name: "Fish and Chips",
            desc: "Lightly battered Okains Bay blue eyed cod fillets. Served with chips & tartare sauce",
            price: "18.50",
        },
        {
            name: "Prawns",
            desc: "Double-crunch spicy prawns. Served with chips and roast garlic aioli",
            price: "17",
        },
        {
            name: "Calamari",
            desc: "Australian Lakes Entrance squid rings. Served with chips and roast garlic aioli",
            price: "16",
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
            name: "Short Black / Macchiato",
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
