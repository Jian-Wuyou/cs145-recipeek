import { type Recipe } from '$lib/models';

export const recipes: { [recipeName: string]: Recipe } = {
    'Instant Pot Mashed Potatoes': {
        keywords: 'potato, side dish, gluten free, mashed potato',
        alias: 'mashed potato, boiled potato',
        ingredients: {
            potato: 5,
            butter: 2,
        },
        instructions:
            "<ol> <li>Set a rack in the bottom of a 6-quart Instant Pot® and add 3 cups water. Stack the potatoes on the rack. Follow the manufacturer's guide for locking the lid and preparing to cook. Set to pressure cook on high for 15 minutes. </li> <li>After the pressure-cook cycle is complete, turn off the heat and let the steam release naturally for 20 minutes. After 20 minutes, follow the manufacturer's guide for steam release and allow any residual steam to air out. Being careful of any remaining steam, unlock and remove the lid; transfer the potatoes to a large bowl. Add the half-and-half, butter, sour cream and a large pinch of salt and pepper. Mash with a potato masher until desired texture and smoothness. Season with additional salt and pepper if needed. </li> </ol>",
        imgUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/7/25/0/fnk_instant-pot-mashed-potatoes-h_s4x3.jpg.rend.hgtvcom.686.515.suffix/1532527788133.jpeg',
    },
    'Twice-Baked Potatoes': {
        keywords: 'potato, side dish, cheese, easy baking, gluten free',
        alias: 'baked potato, boiled potato',
        ingredients: {
            potato: 8,
            butter: 3,
            cheese: 1,
            onion: 3,
        },
        instructions:
            "<ol> <li>Preheat the oven to 400 degrees F. </li> <li>Place the potatoes on a baking sheet. Rub them with the canola oil and bake for 1 hour, making sure they're sufficiently cooked through. </li> <li>Slice the butter into pats. Place in a large mixing bowl and add the bacon bits and sour cream. Remove the potatoes from the oven. Lower the heat to 350 degrees F.</li> <li>With a sharp knife, cut each potato in half lengthwise. Scrape out the insides into the mixing bowl, being careful not to tear the shell. Leave a small rim of potato intact for support. Lay the hollowed out potato shells on a baking sheet. </li> <li>Smash the potatoes into the butter, bacon and sour cream. Add the cheese, milk, seasoned salt, green onions and black pepper to taste and mix together well. (IMPORTANT: If you plan to freeze the twice-baked potatoes, do NOT add the green onions.) </li> <li>Fill the potato shells with the filling. I like to fill the shells so they look abundant and heaping. Top each potato with a little more grated cheese and pop 'em in the oven until the potato is warmed through, 15 to 20 minutes. </li> </ol>",
        imgUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/8/13/1/WU-0106_cheesy-baked-potatoes_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1382375911904.jpeg',
    },
    'Oven-Fried Potatoes': {
        keywords: 'potato, side dish, vegan, gluten free',
        alias: 'baked potato, fried potato',
        ingredients: {
            potato: 3,
        },
        instructions:
            "<ol> <li>Preheat the oven to 450 degrees F.</li> <li>Leaving peel on, cut the potatoes into 6 lengthwise to make long wedges, about 3/4-inch to 1-inch wide. Combine the potatoes, oil, salt and cayenne on the baking sheet and toss to combine. (1 less bowl to wash) Arrange the potatoes on a baking sheet in a single layer, so a cut side is in contact with the pan, but evenly spaced so the potatoes aren't touching each other. Bake until golden brown and cooked through, about 30 minutes. Slip a spatula under the potatoes to turn them over and cook for 5 minutes more.</li> <li>Transfer potatoes to a serving dish and serve immediately.</li> </ol>",
        imgUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2004/2/25/0/bw2b07_french_fries1.jpg.rend.hgtvcom.686.515.suffix/1383933925968.jpeg',
    },
    'Salt Potatoes': {
        keywords: 'potato, gluten free',
        alias: 'boiled potato, salt potato',
        ingredients: {
            potato: 4,
            butter: 1,
        },
        instructions:
            '<ol> <li>Put the potatoes, 8 cups water and the salt in a large pot. Cover and bring to a boil over high heat, then reduce the heat to medium and simmer until the potatoes are fork-tender, about 30 minutes.</li> <li>Drain the potatoes in a colander and shake to remove excess water. Let the skins dry in the colander so that some of the salt crystallizes.</li> <li>Meanwhile, put the butter in a microwave-safe bowl and microwave until melted. Serve the potatoes hot with the butter for dipping.</li> </ol>',
        imgUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/4/26/0/FNM_060110-Only-In-003_s4x3.jpg.rend.hgtvcom.686.515.suffix/1371591113661.jpeg',
    },
    'Mashed Potatoes': {
        keywords: 'potato, mashed potato, boiled potato',
        alias: 'boiled potato',
        ingredients: {
            potato: 4,
            butter: 3,
            'bay leaf': 1,
            chive: 2,
        },
        instructions:
            '<ol> <li>Put the potatoes into a large pot, add the bay leaf, 2 tablespoons salt, and cover with cold water. Bring to a boil over medium-high heat and cook until the potatoes are tender, about 20 minutes.</li> <li>Drain them well and remove the bay leaf.</li> <li>Meanwhile, heat the cream and butter in a small saucepan. </li> <li>Put the potatoes through a ricer or food mill into a bowl.</li> <li>Add the hot cream and season with salt and pepper.</li> <li>Mix together with a spoon and add the chives.</li></ol>',
        imgUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/9/3/0/mashedpotatoes_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1384541148269.jpeg',
    },
};
