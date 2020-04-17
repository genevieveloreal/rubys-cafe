const menu = {
   allday: [
        {
            name: "Bacon & Egg Roll",
            desc: "Bacon, fried egg on a milk bun. Your choice of tomato or BBQ sauce",
            price: "7",
        },
        {
            name: "Chorizo Roll",
            desc: "Chorizo, fried egg, leafy greens, aioli on a milk bun",
            price: "10",
        },
        {
            name: "Haloumi Roll",
            desc: "Grilled haloumi, mushrooms, leafy greens and tomato relish on a milk bun",
            price: "10",
        },
        {
            name: "Benny Roll",
            desc: "Fried egg, bacon, spinach, hollandaise on a milk bun",
            price: "10",
        },
       {
           name: "Smashed Avocado",
           desc: "Toasted sourdough and avo smash finished with feta, cherry tomatoes, relish, cracked pepper, lemon wedge",
           price: "11",
       },
       {
            name: "Grilled toasties",
            desc: "",
            price: "",
            items: [
                {
                    name: "Ham, cheese, tomato on sourdough",
                    price: "6"
                },
                {
                    name: "Caramelised onion, goat's cheese, balsamic mushrooms, spinach and tomato",
                    price: "7"
                }
            ]
        },
        {
            name: "Wraps",
            desc: "",
            price: "",
            items: [
                {
                    name: "Chicken, cheese, tomato, leafy greens and aioli",
                    price: "10"
                },
                {
                    name: "Mushroom, feta, capsicum, spinach, tomato relish",
                    price: "10"
                }
            ]
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
            price: "15",
        },
        {
            name: "The Double Patty (USB)",
            desc: "Double beef, American cheese, pickles, bacon & special sauce\n",
            price: "15",
        },
        {
            name: "Peri Chicken (Picante)",
            desc: "Grilled chicken, shredded cheese, tomato, salad leaves, house made Peri sauce",
            price: "15",
        },
        {
            name: "Old School Burger",
            desc: "Smashed beef patty, cheese, pineapple, beetroot, bacon, smokey bbq sauce",
            price: "15",
        },
        {
            name: "Schnitty & Truffle",
            desc: "Chicken Schnitzel, shredded cheese, tomato, leafy greens & truffle mayo",
            price: "15",
        },
        {
            name: "Garden of Vegan",
            desc: "Chickpea & zucchini patty, avocado, tomato, mixed greens, vegan chipotle on a vegan bun",
            price: "15",
        },
    ],
    seafood: [
        {
            name: "Fish and Chips",
            desc: "Okains bay blue eyed cod fillets in light batter, chips, salad, tartare sauce, lemon",
            price: "15",
        },
        {
            name: "Calamari",
            desc: "Panko calamari rings, chips and salad, aioli, lemon",
            price: "15",
        },
        {
            name: "Seafood Basket",
            desc: "Battered cod fillets, crispy prawns, calamari rings, chips, salad, tartare sauce",
            price: "22",
        },
        {
            name: "Chicken Schnitzel",
            desc: "Panko crumbed, served with chips, and  gravy",
            price: "14",
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
