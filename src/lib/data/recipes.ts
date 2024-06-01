import { type Recipe } from '$lib/models';

export const recipes: { [recipeName: string]: Recipe } = {
    'Instant Pot Mashed Potatoes': {
        keywords: 'potato, side dish, gluten free, mashed potato',
        alias: 'mashed potato, boiled potato',
        ingredients: {
            potato: '5 pounds of {0}es',
            butter: '1 cup unsalted {0}',
        },
        otherIngredients: {
            'sour cream': '1 cup {0}',
            'half-and-half': '1 1/2 cups {0}, heated',
            '': 'Kosher salt and ground black pepper',
        },
        instructions: [
            "Set a rack in the bottom of a 6-quart Instant Pot® and add 3 cups water. Stack the potatoes on the rack. Follow the manufacturer's guide for locking the lid and preparing to cook. Set to pressure cook on high for 15 minutes. ",
            "After the pressure-cook cycle is complete, turn off the heat and let the steam release naturally for 20 minutes. After 20 minutes, follow the manufacturer's guide for steam release and allow any residual steam to air out. Being careful of any remaining steam, unlock and remove the lid; transfer the potatoes to a large bowl. Add the half-and-half, butter, sour cream and a large pinch of salt and pepper. Mash with a potato masher until desired texture and smoothness. Season with additional salt and pepper if needed. ",
        ],
        imgUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/7/25/0/fnk_instant-pot-mashed-potatoes-h_s4x3.jpg.rend.hgtvcom.686.515.suffix/1532527788133.jpeg',
    },
    'Twice-Baked Potatoes': {
        keywords: 'potato, side dish, cheese, easy baking, gluten free',
        alias: 'baked potato, boiled potato',
        ingredients: {
            potato: '8 {0}s',
            butter: '1 cup salted {0}',
            cheese: '1 cup cheddar {0}',
            onion: '3 green {0}s, sliced',
        },
        otherIngredients: { 'whole milk': '1 cup {0}', salt: '2 teaspoons {0}' },
        instructions: [
            'Preheat the oven to 400 degrees F. ',
            "Place the potatoes on a baking sheet. Rub them with the canola oil and bake for 1 hour, making sure they're sufficiently cooked through. ",
            'Slice the butter into pats. Place in a large mixing bowl and add the bacon bits and sour cream. Remove the potatoes from the oven. Lower the heat to 350 degrees F.',
            'With a sharp knife, cut each potato in half lengthwise. Scrape out the insides into the mixing bowl, being careful not to tear the shell. Leave a small rim of potato intact for support. Lay the hollowed out potato shells on a baking sheet. ',
            'Smash the potatoes into the butter, bacon and sour cream. Add the cheese, milk, seasoned salt, green onions and black pepper to taste and mix together well. (IMPORTANT: If you plan to freeze the twice-baked potatoes, do NOT add the green onions.) ',
            "Fill the potato shells with the filling. I like to fill the shells so they look abundant and heaping. Top each potato with a little more grated cheese and pop 'em in the oven until the potato is warmed through, 15 to 20 minutes. ",
        ],
        imgUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/8/13/1/WU-0106_cheesy-baked-potatoes_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1382375911904.jpeg',
    },
    'Oven-Fried Potatoes': {
        keywords: 'potato, side dish, vegan, gluten free',
        alias: 'baked potato, fried potato',
        ingredients: {
            potato: '3 {0}es',
        },
        instructions: [
            'Preheat the oven to 450 degrees F.',
            "Leaving peel on, cut the potatoes into 6 lengthwise to make long wedges, about 3/4-inch to 1-inch wide. Combine the potatoes, oil, salt and cayenne on the baking sheet and toss to combine. (1 less bowl to wash) Arrange the potatoes on a baking sheet in a single layer, so a cut side is in contact with the pan, but evenly spaced so the potatoes aren't touching each other. Bake until golden brown and cooked through, about 30 minutes. Slip a spatula under the potatoes to turn them over and cook for 5 minutes more.",
            'Transfer potatoes to a serving dish and serve immediately.',
        ],
        imgUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2004/2/25/0/bw2b07_french_fries1.jpg.rend.hgtvcom.686.515.suffix/1383933925968.jpeg',
    },
    'Salt Potatoes': {
        keywords: 'potato, gluten free',
        alias: 'boiled potato, salt potato',
        ingredients: {
            potato: '4 {0}es',
            butter: '1 stickk {0}',
        },
        instructions: [
            'Put the potatoes, 8 cups water and the salt in a large pot. Cover and bring to a boil over high heat, then reduce the heat to medium and simmer until the potatoes are fork-tender, about 30 minutes.',
            'Drain the potatoes in a colander and shake to remove excess water. Let the skins dry in the colander so that some of the salt crystallizes.',
            'Meanwhile, put the butter in a microwave-safe bowl and microwave until melted. Serve the potatoes hot with the butter for dipping.',
        ],
        imgUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/4/26/0/FNM_060110-Only-In-003_s4x3.jpg.rend.hgtvcom.686.515.suffix/1371591113661.jpeg',
    },
    'Mashed Potatoes': {
        keywords: 'potato, mashed potato, boiled potato',
        alias: 'boiled potato',
        ingredients: {
            potato: '4 {0}es',
            butter: '1 1/2 cup {0}',
            'bay leaf': '{0}',
            chive: '{0}',
        },
        instructions: [
            'Put the potatoes into a large pot, add the bay leaf, 2 tablespoons salt, and cover with cold water. Bring to a boil over medium-high heat and cook until the potatoes are tender, about 20 minutes.',
            'Drain them well and remove the bay leaf.',
            'Meanwhile, heat the cream and butter in a small saucepan. ',
            'Put the potatoes through a ricer or food mill into a bowl.',
            'Add the hot cream and season with salt and pepper.',
            'Mix together with a spoon and add the chives.',
        ],
        imgUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/9/3/0/mashedpotatoes_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1384541148269.jpeg',
    },
    'Mung Bean Soup': {
        keywords: 'soup, mung beans, monggo beans, side dish',
        alias: 'monggo soup, monggo bean soup',
        ingredients: {
            monggo: '2 cups dry {0} beans',
            malunggay: '1 bunched chopped or pulled {0} leaves',
            onion: '1 {0}, minced',
            garlic: '2 cloves {0}, minced',
            ginger: '1 tablespoons freshly grated {0}',
            'coconut milk': '1 cup of canned {0}',
        },
        otherIngredients: {
            'vegetable broth': '6 cups {0}',
            oil: '1 tablespoon {0}',
            salt: '{0} to taste',
        },
        instructions: [
            'Bring the broth to a boil in a large pot. Add the rinsed monggo beans and cook, uncovered, for about 40 minutes. I checked on mine every 10 minutes and added more water as needed (mine needed more water every time I checked it). You want the consistency to be like a very thick soup.',
            'Heat the oil in a large skillet over medium heat. Saute the onion, garlic, and ginger in the oil in a large nonstick skillet until soft and fragrant, about 3 minutes. Add to the monggo pot and allow the mixture to simmer together for a few minutes.',
            'Stir in the coconut milk and malunggay leaves. Remove the monggo pot from the heat. It just needs to be hot enough to very slightly wilt the leaves. Serve over rice or plain, like a soup.',
        ],
        imgUrl: 'https://pinchofyum.com/wp-content/uploads/2013/04/monggo-soup-3.jpg',
    },
    'Filipino Style Chicken Soup with Mung Beans': {
        keywords: 'chicken soup, mung bean soup, filipino style, main dish, ulam',
        alias: 'mung bean soup, monggo soup, chicken monggo soup',
        ingredients: {
            onion: '2 {0}s, cut into wedges',
            garlic: '8 {0} cloves, peeled',
            'bay leaf': '3 cups of {0}',
            monggo: '2 cups {0} beans',
            potato: '10 small {0}',
        },
        otherIngredients: {
            turmeric: '2 tablespoons {0}',
            chicken: '2 lbs {0} wings',
            'chicken cube': '3 {0}s',
        },
        instructions: [
            'Place chicken, onions, bay leaves, garlic if fresh used and oil in a pot and saute until onions and chicken are golden brown. Add the rest of ingredients and cook covered on low heat about an hour, until chicken, mung and potatoes are ready.',
            'Add some more water if soup is too thick.',
            'Serve with rice topped with chilli sauce on a side.',
        ],
        imgUrl: 'https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_5:4/v1/img/recipes/37/81/86/picJTCAal.jpg',
    },
    'Canned Tuna Pasta': {
        keywords: 'pasta, tuna, canned tuna, main dish',
        alias: 'tuna pasta, tuna sphagetti',
        ingredients: {
            pasta: '200g of {0}',
            tuna: '285g canned {0} in oil',
            garlic: '2 cloves of finely minced {0}',
        },
        otherIngredients: {
            salt: '1 tablespoon of cooking {0}',
            'anchovy fillet': '2 minced {0}s',
            'chili flakes': '1/2 teaspoons {0}',
            parsley: '1 tablespoon of finely chopped {0}',
            'lemon zest': '1 teaspoon of {0}',
            'lemon juice': '2 tablespoons of {0}',
            'black pepper': '1/4 teaspoon of {0}',
        },
        instructions: [
            'Bring 3 litres / 3 quarts of water to the boil with the 1 tablespoon of salt. Cook pasta per the packet time minus 1 minute. Just before draining, scoop out ~1 cup pasta cooking water, then drain the pasta.',
            'In the same pot, heat the reserved oil from the tuna cans over medium heat. Add the garlic, anchovies and chilli flakes. Cook and stir for 1 minute.',
            'Add the pasta, capers and 1/3 cup of reserved pasta water. Toss using 2 spatulas for 2 minutes.',
            'Turn off the heat. Add tuna, parsley, lemon zest, juice, salt and pepper. Toss gently to mix through – try to keep some tuna chunks.',
            'Serve immediately!',
        ],
        imgUrl: 'https://www.recipetineats.com/wp-content/uploads/2023/04/Canned-tuna-pasta_3.jpg?resize=650,813',
    },
    'Tuna Sandwich': {
        keywords: 'tuna, century tuna, sandwhich, bread, snack',
        alias: 'century tuna sanwhich',
        ingredients: {
            tuna: '1 canned {0}, drained',
            onion: '1 small yellow {0}, chopped',
            mayonnaise: '1 cup {0}',
            bread: '2 loaves of {0}',
        },
        otherIngredients: {
            'pickle relish': '2 tablespoons sweet {0}',
            'white sugar': '1 teaspoon granulated {0}',
            salt: '1/4 teaspoon {0}',
            'garlic powder': '1/4 teaspoon {0}',
            'ground black pepper': '1/8 teaspoon {0}',
        },
        instructions: [
            'Arrange the onion in a bowl. Microwave for 30 seconds.',
            'Add the remaining ingredients in the same bowl.',
            'Fold the ingredients until well blended.',
            'Use as a sandwich spread for Pandesal. Enjoy!',
        ],
        imgUrl: 'https://panlasangpinoy.com/wp-content/uploads/2015/11/Tuna-Sandwich-Spread-2.jpg',
    },
    'Ginisang Corned Beef': {
        keywords: 'ulam, meal, main dish, corned beef',
        alias: 'cooked corned beef',
        ingredients: {
            'corned beef': '1 can of {0}',
            garlic: '4 cloves of {0}',
            potato: '1 {0}',
            onion: '1 {0}',
        },
        otherIngredients: {
            oil: '2 tablespoons of vegetable {0}',
        },
        instructions: [
            'Sauté garlic in oil until golden brown.',
            'Add potato and cook until light golden brown. Add corned beef .',
            'Add onion and season as you like. Transfer on a serving plate and serve.',
        ],
        imgUrl: 'https://images.aws.nestle.recipes/resized/d7e7bf512bf7d0f868377d5facea3ed0_nksb05s3-d03_7876_708_600.jpg',
    },
    'Sardines Rice Bowl': {
        keywords: 'ulam, meal, main dish, sardines',
        alias: 'ginisang sardinas, sardines in tomato sauce, sardines with rice',
        ingredients: {
            onion: '1/2 small sliced {0}',
            sardines: '1 can of {0} in tomato sauce',
        },
        otherIngredients: {
            oil: '1 teaspoon of {0}',
            'red pepper flakes': '1 tablespoon {0}',
            salt: '{0} to taste',
            pepper: '{0} to taste',
            rice: '2 cups of cooked {0}',
        },
        instructions: [
            'Add oil to a small frying pan and warm over medium heat.',
            'Add onion and cook until softened, about 5-7 minutes, stirring occasionally. Season with salt and pepper, to taste.',
            'While the onions are cooking, optionally, you can fry or poach an egg in a separate pan.',
            'Add sardines with tomato sauce to the pan with onions and heat until bubbly.',
            'Divide the rice between two bowls and spoon the sardines over top along with the cooked eggs.',
            'Sprinkle with red pepper flakes and enjoy.',
        ],
        imgUrl: 'https://www.kitchengidget.com/wp-content/uploads/2015/07/Sardine-Rice-Bowl-Pin.jpg.webp',
    },
    'Beans on Toast': {
        keywords: 'meal, snack, british',
        alias: 'british beans',
        ingredients: {
            beans: '1 tin can of {0}',
            bread: '3 slices of {0}',
        },
        otherIngredients: {
            butter: 'pat of {0} is optional',
        },
        instructions: [
            'Put the beans into a small pot over medium low heat.',
            'Put the bread in the toaster, and make the toast as desired. (If you like, you can butter the toast, but I find it unecessary as the beans are the primary flavor.)',
            "Stir the beans, and heat until almost boiling, but don't allow to boil. (According to directions on the tin, this will affect the flavor.)",
            'Place the toast on plates, and spoon ⅓ tin of the beans over the top of each slice. Serve immediately, preferably with a cup of hot tea.',
        ],
        imgUrl: 'https://www.christinascucina.com/wp-content/uploads/2021/06/fullsizeoutput_f3f5-768x526.jpeg',
    },
    'Lasagna Roll-Ups': {
        keywords: 'meal, lasagna, pasta, baked lasagna',
        alias: 'pasta roll',
        ingredients: {
            pasta: '6 {0} noodles',
            'fennel seed': '1 teaspoon {0}',
        },
        otherIngredients: {
            cheese: '2 cups shredded part-skim mozzarella {0}',
            'ground beef': '1 pound {0}',
            'pasta sauce': '1 jar {0}',
        },
        instructions: [
            'Cook lasagna noodles according to package directions. Meanwhile, in a large skillet, cook beef over medium heat until no longer pink, breaking it into crumbles; drain. Stir in spaghetti sauce and, if desired, fennel seed; heat through.',
            'Drain noodles. Spread 1/4 cup meat sauce over each noodle; sprinkle with 2 tablespoons cheese. Carefully roll up noodles and place seam side down in an 8-in. square baking dish. Top with remaining sauce and cheese.',
            'Bake, uncovered, at 400° for 10-15 minutes or until heated through and cheese is melted.',
        ],
        imgUrl: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/serve-with-lasagna-roll-ups_FT23_2718_EC_101723_6.jpg?fit=700%2C467',
    },
    'Skillet Mac & Cheese': {
        keywords: 'mac and cheese, pasta, macaroni, mac & cheese',
        alias: 'cheesy pasta, cheesy macaroni salad',
        ingredients: {
            pasta: '2 cups uncooked {0}',
            flour: '2 tablespoons all-purpose {0}',
        },
        otherIngredients: {
            cream: '1-1/2 cups half-and-half {0}',
            cheese: '3/4 pound process {0}',
            butter: '2 tablespoons {0}',
        },
        instructions: [
            'Cook pasta according to package directions; drain.',
            'Meanwhile, in a large cast-iron or other heavy skillet, melt butter over medium heat. Stir in flour until smooth; gradually whisk in cream. Bring to a boil, stirring constantly. Cook and stir until thickened, about 2 minutes. Reduce heat; stir in cheese until melted.',
            'Add macaroni; cook and stir until heated through. Top as desired.',
        ],
        imgUrl: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Skillet-Mac-Cheese_EXPS_TOH5ICFRTL21_27614_E07_15_3b.jpg?fit=700,700',
    },
};
