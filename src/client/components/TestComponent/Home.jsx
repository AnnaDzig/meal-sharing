import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const Home = () => {
  // Example meals data
  const meals = [
    {
      id: 1,
      title: "Vegetarian Jjajangmyeon",
      description:
        "Cook noodles according to package directions. Drain and rinse under cold water. Set aside.\r\n\r\nHeat 1 Tablespoon of vegetable oil over medium high heat in a wok or large skillet. Add mushrooms and radish and stir fry for 1 minute.\r\n\r\nAdd potato, onion, and zucchini and keep stirring for about 3 minutes until the potato looks a little translucent.\r\n\r\nClear a space in the center of the wok by pushing the ingredients to the edges.\r\n\r\nAdd 2 Tablespoons of vegetable oil to the center of the wok, then add 1/4 cup of black bean paste and stir it with a wooden spoon for 1 minute to fry it. Then mix everything in the wok and keep stirring.\r\n\r\nAdd  2 cups of water to the wok and let it cook with the lid closed for about 10 minutes.\r\n\r\nOpen the lid and taste a sample of the radish and potato. If they\u2019re fully cooked, stir in the starch water little by little. Keep stirring until it\u2019s well mixed and thick.\r\n\r\nAdd the sesame oil and remove from the heat.\r\n\r\nServe over noodles, garnish with cucumber.",
      ingredients: [
        "6 oz fresh udon noodles (or 4 oz dried udon or spaghetti noodles)\r",
        "1 tablespoon vegetable oil\r",
        "8 oz shiitake mushrooms\r",
        "1 cup daikon radish, cut into \u00bd inch cubes\r",
        "1 cup zucchini, cut into \u00bd inch cubes\r",
        "1 cup potato, peeled and cut into \u00bd inch cubes\r",
        "1 1/2 cup onion, large diced\r",
        "2 tablespoon vegetable oil\r",
        "1/4 cup black bean paste\r",
        "2 cup water\r",
        "2 tablespoon potato starch powder, combined with \u00bc cup water and 1 teaspoon of sugar in a small bowl, set aside\r",
        "1 teaspoon toasted sesame oil\r",
        "1/2 cup cucumber, cut into thin matchsticks for garnish",
      ],
      image:
        "https://www.opskrifter.dk/images/recipes/0XkmqwPM6gBf0zKw0vgSGyhSKgky2DQSiSmvwyxN.jpeg",
      stars: 5,
    },
    {
      id: 2,
      title: "Chicken Stir-Fry",
      description:
        "Bring stock to a boil in a medium pot. Once boiling, reduce to a low simmer. Meanwhile, prep remaining ingredients.\r\n\r\nHeat a drizzle of oil in a large pan over medium-high heat. Add mushrooms and season with salt and pepper. Cook, stirring occasionally, until browned and crisp, 6-8 minutes. Add garlic and shallot. Cook, stirring, until softened, 1 minute. Add rice; stir until translucent, 1-2 minutes. Add wine; stir until liquid has mostly absorbed. Add stock 1/2 cup at a time and stirring until liquid has mostly absorbed\u2014until rice is al dente and mixture is creamy, 25-30 minutes. TIP: Depending on the size of your pan, you may need a little more or a little less liquid.\r\n\r\nAfter about half of stock is used in risotto, pat scallops* dry with paper towels and season generously all over with salt and pepper. Heat a drizzle of oil in a large pan over medium-high heat. Add scallops and cook until browned and cooked through, 3-5 minutes per side. Turn off heat; remove from pan and set aside, covered. Wipe out pan.\r\n\r\nMelt 2 tbsp butter in same pan over medium heat. Cook, stirring, until foamy and flecked with amber brown bits, 2-4 minutes. Stir in half the chopped parsley and a squeeze of lemon juice. Immediately transfer to a small bowl. Once risotto is done, stir in Parmesan, 1 tbsp plain butter, a squeeze of lemon juice, and lemon zest and truffle oil to taste.\r\n\r\nSeason risotto with salt, pepper, and more lemon juice to taste. \u2022 Divide between bowls; top with scallops. Drizzle with as much brown butter as you like and any remaining truffle oil to taste. Garnish with remaining chopped parsley. Serve with any remaining lemon wedges on the side.\r\n\r\n",
      ingredients: [
        "3 1/2 cup chicken stock\r",
        "1 clove garlic, peeled and thinly sliced\r",
        "1 shallot, minced\r",
        "3/4 cup arborio rice\r",
        "1/4 cup dry white wine\r",
        "8 oz cremini mushrooms, sliced into 1/4-inch thick pieces\r",
        "1 lemon, zested and juiced\r",
        "1/4 oz fresh parsley, chopped\r",
        "8 oz scallops, tough muscle removed if needed\r",
        "2 tbsp butter\r",
        "<hr>\r",
        "1/4 cup parmesan cheese, grated\r",
        "1 tbsp butter\r",
        "5 tsp truffle oil\r",
        "vegetable oil\r",
        "salt\r",
        "pepper",
      ],
      image:
        "https://mccormick.widen.net/content/zfgopgfgrz/original/vegetable_and_chicken_stir_fry2000x1125.jpg",
      stars: 5,
    },

    {
      id: 3,
      title: "Pizza bianca",
      description:
        "Preheat oven to 500. Lightly dust a work surface, rolling pin, and a baking sheet with flour. Roll dough out to a 13-inch round and transfer to sheet.\r\n\r\nIn a small bowl, stir together ricotta, oil and garlic; season with salt and pepper. Spread ricotta mixture on dough, leaving a 1/2-inch border. Top with mozzarella, then Parmesan. Brush oil on edge of dough. Bake until crust is golden and cheese is melted and browned in spots, 12 to 14 minutes. \r\n\r\nIn a small bowl, toss arugula with oil and season to taste with salt and pepper. Top pizza with arugula and serve.",
      ingredients: [
        "all-purpose flour, for dusting and rolling\r",
        "1 pound pizza dough, thawed if frozen\r",
        "1 teaspoon extra-virgin olive oil, for brushing\r",
        "<hr>\r",
        "1/2 cup whole-milk ricotta cheese\r",
        "1 tablespoon extra-virgin olive oil\r",
        "1 garlic clove, minced\r",
        "salt and freshly ground pepper\r",
        "<hr>\r",
        "6 oz mozzarella, shredded\r",
        "1 oz Parmesan, grated (or Pecorino Romano)\r",
        "2 oz baby arugula\r",
        "1 tsp extra-virgin olive oil",
      ],
      image:
        "https://www.valdemarsro.dk/wp-content/2011/05/pizza-margharita-1.jpg",
      stars: 5,
    },
    {
      id: 4,
      title: "Baked Shrimp Scampi",
      description:
        "Preheat the oven to 425 degrees F.\r\n\r\nDefrost shrimp by putting in cold water, then drain and toss with wine, oil, salt, and pepper. Place in oven-safe dish and allow to sit at room temperature while you make the butter and garlic mixture.\r\n\r\nIn a small bowl, mash the softened butter with the rest of the ingredients and some salt and pepper.\r\n\r\nSpread the butter mixture evenly over the shrimp. Bake for 10 to 12 minutes until hot and bubbly. If you like the top browned, place under a broiler for 1-3 minutes (keep an eye on it). Serve with lemon wedges and French bread.\r\n\r\nNote: if using fresh shrimp, arrange for presentation. Starting from the outer edge of a 14-inch oval gratin dish, arrange the shrimp in a single layer cut side down with the tails curling up and towards the center of the dish. Pour the remaining marinade over the shrimp. ",
      ingredients: [
        "2/3 cup panko\r",
        "1/4 teaspoon red pepper flakes\r",
        "1/2 lemon, zested and juiced\r",
        "1 extra-large egg yolk\r",
        "1 teaspoon rosemary, minced\r",
        "3 tablespoon parsley, minced\r",
        "4 clove garlic, minced\r",
        "1/4 cup shallots, minced\r",
        "8 tablespoon unsalted butter, softened at room temperature\r",
        "<hr>",
        "2 tablespoon dry white wine\r",
        "Freshly ground black pepper\r",
        "Kosher salt\r",
        "3 tablespoon olive oil\r",
        "2 pound frozen shrimp",
      ],
      image:
        "https://images.pexels.com/photos/16892372/pexels-photo-16892372/free-photo-of-shrimp-and-a-dip-on-a-plate.jpeg",
      stars: 5,
    },
    {
      id: 5,
      title: "Strawberries Romanov (La Madeleine copycat)",
      description:
        "Wash strawberries and cut the tops off. Let strawberries drain.  Mix together heavy whipping cream, powdered sugar, and the brandy. Beat with a mixer till this becomes thick.  Place strawberries into glasses and spoon over the sauce.\r\n",
      ingredients: [
        "2 tbsp powdered sugar\r",
        "1/2 pt heavy whipping cream\r",
        "1 lb strawberries, (2 pints)\r",
        "4 tbsp brandy",
      ],
      image:
        "https://images.pexels.com/photos/16855802/pexels-photo-16855802/free-photo-of-ready-to-eat-cake-on-a-cakestand.jpeg",
      stars: 5,
    },
    {
      id: 7,
      title: "John Thorne's Pecan Pie",

      description:
        "Preheat oven to 350F. In a large saucepan, heat the brown sugar, golden syrup and butter to the boiling point. Stirring constantly and scraping back any foam that clings to the side of the pan, let this mixture boil for about 1 minute. Remove from the heat and let cool while, in a separate bowl, you beat the eggs until creamy. \r\n\r\nWhen the boiled syrup has cooled, beat in the eggs, salt and pecans. Pour into the unbaked pie shell and bake for about 50 minutes.\r\n\r\nNotes:\r\n\r\n* A little cream (about 1/4 to 1/2 cup) mixed into a pecan pie filling before baking gives it a richer, lighter texture. \r\n\r\n* For a sweeter, lighter pie: add more sugar and use fewer pecans; for a denser, less sweet pie: add more pecans and use less sugar. \r\n\r\n* The buttery flavour and the lard-induced flakiness of a butter and lard crust make it the perfect one for a perfect pecan pie. And a Southern pecan pie authority I know suggests that you roll out the dough a little thicker than usual; a thick, richly shortened crust provides an appetizing balance to the sweetness of the filling. ",
      ingredients: [
        "1/4 tsp salt \r",
        "3 eggs \r",
        "4 tbsp butter \r",
        "2 tbsp dark rum \r",
        "2/3 cup golden syrup \r",
        "1 cup dark brown sugar, well-packed\r",
        "2 cup pecans, chopped \r",
        "9-inch unbaked pie shell",
      ],
      image:
        "https://images.pexels.com/photos/4748402/pexels-photo-4748402.jpeg",
      stars: 5,
    },
    {
      id: 8,
      title: "Smoked Salmon Ebelskivers",

      description:
        "Preheat oven to 200F.\r\n\r\nIn a large bowl, whisk together the flour, sugar, baking powder, salt, and pepper. In a small bowl, lightly whisk the egg yolks, then whisk in the milk, 2 tablespoons of melted butter and lemon juice. Add the yolk mixture to the flour mixture and, using a wooden spoon, stir until well blended. The batter will be lumpy.\r\n\r\nIn a clean bowl, using an electric mixer on high speed, beat the egg whites until stiff, but not dry, peaks form. Using a silicone spatula, fold about one-third of the egg whites into the batter to lighten it, then fold in the rest just until no white streaks remain. Stir in fresh dill.\r\n\r\nBrush the wells of the ebelskiver pan with some of the remaining melted butter and place over medium heat. When the butter starts to bubble, add about 1 tablespoon batter to each well. Working quickly, carefully spoon about 1/2 teaspoon of the smoked salmon into the center of each pancake, then spoon about 1/2 teaspoon of the cream cheese on top. Top each with another 1 tablespoon batter. (Alternatively, gently mix the cream cheese and salmon together. Spoon about 1 teaspoon into the center of each pancake)\r\n\r\nCook until the bottoms of the pancakes are lightly browned and crisp, 3-5 minutes. Use 2 short wooden skewers to turn all the  pancakes and cook until lightly browned on the second side, about 3 minutes longer.\r\n\r\nTransfer the finished pancakes to a platter and keep warm  in the oven while you repeat to make 2 more batches. Serve right away.",
      ingredients: [
        "1 cup all-purpose flour\r",
        "1 1/2 tsp sugar\r",
        "1/2 tsp baking powder\r",
        "1/4 tsp salt\r",
        "1/2 tsp pepper, freshly ground\r",
        "2 large eggs, separated\r",
        "1 cup milk\r",
        "3 tbsp unsalted butter, melted and slightly cooled, divided use\r",
        "1 tsp fresh lemon juice\r",
        "1/4 cup fresh dill, chopped and firmly packed\r",
        "3 1/2 tbsp smoked salmon, minced (about 4 oz)\r",
        "3 1/2 tbsp whipped-style cream cheese, at room temperature\r",
        "2 servings [cocktail sauce](http://www.xanthir.com/recipes/showrecipe.php?id=id50)",
      ],
      image: "https://thefrillyapron.files.wordpress.com/2012/03/eb-cover.jpg",
      stars: 5,
    },
    {
      id: 9,
      title: "Godiva Angel Pie",

      description:
        "TO MAKE SHELL: Preheat oven to 300 degrees. In mixer bowl, beat egg whites until foamy. Beat in salt and cream of tartar and beat until soft peaks form. Add sugar, a tablespoon at a time, beating after each addition. Continue until very stiff peaks form. Fold in nuts and vanilla. Lightly butter a metal 8-inch pie plate. (Do NOT use glass.) Spoon meringue into pan lightly, building up the edges to come at least 1/2 inch above the side of the pan. Bake in preheated 300 degree oven for 35 to 40 minutes until light brown. Cool completely before adding filling. TO MAKE FILLING: Melt chocolate and water in a pan over hot, but not boiling, water, stirring occasionally, to blend. Add vanilla and chocolate mixture (cooled) to whipped cream and pile into meringue shell, swirling top with spatula. Be sure to cool the chocolate mixture before adding to the whipped cream. If it is too warm, the mixture will thin out. If this happens, chill until it is thick enough to put in shell.",
      ingredients: [
        "4 (1 oz.) squares Godiva cooking chocolate or 4 oz. Baker's German sweet chocolate\r",
        "1/2 tsp vanilla\r",
        "1 cup pecans, finely chopped\r",
        "1/2 cup sugar\r",
        "1/8 tsp cream of tartar\r",
        "1/8 tsp salt\r",
        "2 egg whites, at room temperature\r",
        "3 tbsp water\r",
        "1 tsp vanilla\r",
        "1 cup heavy cream, whipped",
      ],
      image:
        "https://images.pexels.com/photos/1247670/pexels-photo-1247670.jpeg",
      stars: 5,
    },
    {
      id: 10,
      title: "Spaetzle",

      description:
        "Bring a saucepan of salted water it a boil, reduce the heat, and maintain a simmer. In a bowl, stir all the ingredients together (eggs, flour, milk, salt, baking powder, and nutmeg). Place a colander over the pan, pour about1/4 of the batter into the colander, and press through the holes with a plastic spatula into the hot water. When the spatzle starts to float to the surface, cover the pan and keep covered until the spatzle appears to swell and is fluffy. Remove the dumplings and repeat the procedure with the remaining batter.\r\n\r\nIn a medium saute pan, add butter, and melt over medium heat until butter turns a light brown. Add garlic and cook until it becomes lightly colored. Add spaetzle to the pan to heat through. Add parsley, cheese, salt and pepper, to taste.",
      ingredients: [
        "2 teaspoon fresh parsley, chopped\r",
        "1 teaspoon garlic, minced\r",
        "3 tablespoon butter\r",
        "1 pinch nutmeg\r",
        "1/4 teaspoon baking powder\r",
        "1 teaspoon salt\r",
        "1/2 cup milk\r",
        "1 1/2 cup flour, sifted\r",
        "2 eggs, slightly beaten\r",
        "2 tablespoon finely grated Parmesan, plus extra for garnish\r",
        "Salt and freshly ground black pepper",
      ],
      image:
        "https://i0.wp.com/eatsbythebeach.com/wp-content/uploads/2021/10/Parslied-German-Spaetzle-Eats-By-The-Beach.jpeg",
      stars: 5,
    },
    {
      id: 11,
      title: "Pot Roast Carbonnade",
      description:
        "Preheat the oven to 325 degrees F.\r\n\r\nIn a large Dutch oven over medium-low heat, add the bacon and cook until it renders its fat and almost becomes crispy. Remove it with a slotted spoon to a plate. Add the onions, season with salt and pepper, to taste, and cook over low heat until they are deep in color and caramelized, about 30 minutes.\r\n\r\nRemove the onions to a plate, leaving as much fat in the pot as possible. Add the vegetable oil and mix it with the bacon fat. Raise the heat to high. Season the beef liberally with salt and pepper and sear, in batches, until nicely browned on both sides.\r\n\r\nOnce the meat is browned, add the first batch of meat back to the pan along with the onions, carrots and bacon. Sprinkle in the flour and stir. Cook for 1 minute before deglazing the pan with the beer. Add the remaining ingredients and bring the mixture to a simmer. Cover the pot and put it in the oven to braise until the beef is tender, about 2 hours. Remove the pot from the oven and transfer the pot roast to a serving dish.",
      ingredients: [
        "1/2 pound bacon, cut into large lardons\r",
        "2 medium onions, sliced\r",
        "Kosher salt and freshly ground black pepper\r",
        "1 tablespoon vegetable oil\r",
        "1 1/2 pound beef chuck, cut into large cubes\r",
        "5 carrots, peeled and cut into large chunks\r",
        "1 tablespoon all-purpose flour\r",
        "12 ounce beer (dark or light)\r",
        "6 prunes\r",
        "1 tablespoon dried thyme\r",
        "1 cup beef stock",
      ],
      image:
        "https://www.craftbeering.com/wp-content/uploads/2017/03/Carbonnade-a-la-Flamande-Pot-Bowl-Super-Close-Up-2-e1542650219619.jpg",
      stars: 5,
    },
    {
      id: 12,
      title: "Old Fashion Vegetable Soup",

      description:
        "In a large soup pot, brown ground beef and onion, drain off fat.  Add remaining ingredients EXCEPT for last 3 items (canned vegetables).  Simmer on low heat until vegetables are tender, about an hour.  Add canned vegetables and simmer 5 minutes.  Remove bay leaf and serve.",
      ingredients: [
        "1 pound ground beef\r",
        "1 cup onion, chopped\r",
        "1 cup potatoes, diced\r",
        "1 cup carrots, sliced\r",
        "1 cup celery, diced\r",
        "2 16oz can diced tomatoes in juice (or substitute 2 small cans of tomato sauce)\r",
        "4 cup water\r",
        "1/4 tsp dried basil, crushed\r",
        "1/4 tsp dried thyme\r",
        "1 bay leaf\r",
        "1/2 tsp salt\r",
        "1/4 tsp pepper\r",
        "1/2 tsp garlic powder\r",
        "2 tablespoon beef bouillon\r",
        "1 16oz can corn\r",
        "1 16oz can green beans\r",
        "1 16oz can green peas",
      ],
      image:
        "https://images-gmi-pmc.edge-generalmills.com/ecb416aa-02ea-40bb-a67a-fb7652129956.jpg",
      stars: 5,
    },
    {
      id: 13,
      title: "Onion Pie",
      description:
        "Preheat the oven to 400 degrees halfway through onion cooking.\r\n\r\nSlice the onions and saute in 4 tablespoons butter over medium-low heat; the longer you cook them - as long as 35 minutes - the sweeter they will be.  Sprinkle in crushed red pepper.\r\n\r\nMelt the remaining 4 tablespoons butter.  Mix with the crushed crackers, then press the mixture into the bottom and sides of a glass pie plate to form a crust.  Prebake crust for 10 minutes.\r\n\r\nLightly beat the eggs and milk together in a small bowl.\r\n\r\nSpoon the onions into the crust, then pour the egg mixture over them.  Sprinkle with Parmesan.\r\n\r\nBake for 30-40 minutes until set and golden.",
      ingredients: [
        "1/2 cup grated Parmesan cheese\r",
        "1/2 stack Keebler Club Crackers, crushed\r",
        "2 eggs\r",
        "1 cup milk\r",
        "1/2 teaspoon crushed red pepper flakes, or to taste\r",
        "1/2 cup butter, divided use\r",
        "3 large onions",
      ],
      image:
        "https://theviewfromgreatisland.com/wp-content/uploads/2020/07/vidalia-onion-pie-8509124-July-19-2020.jpg",
      stars: 5,
    },
    {
      id: 14,
      title: "Godiva Dark Chocolate Cheesecake",
      description:
        'In a food processor with a blade attachment, cream the cheese until smooth and then add in sugar. Pulse a couple times to incorporate sugar and cocoa powder. Add in eggs and yolks pulsing a couple times again and scrape down to ensure all is smooth and uniform. With machine running, pour in melted Godiva Chocolate in a steady stream until all in, and finish by pulsing in the cr\u00e8me fraiche. Pour batter into a 10" x 10" baking pan and bake at 325 for 30, minutes or until custard is set and a toothpick inserted in center can be removed cleanly. The top may caramelize or brown slightly, which is not an issue. Once set, remove from oven and allow cheesecake to cool completely. Wrap the pan with plastic and reserve in cooler to set and chill completely.\r\n\r\nOnce the cheesecake is cold and firm, remove it from the pan and place in a mixer bowl with a paddle attachment. Beat the cake for a few moments to soften and smooth out the custard. Place smoothed custard into a piping bag with a plain tip and pipe into the bottom of a plastic lined half cylinder mold. Tap the mold to ensure the custard is solid and then flatten out to top. Freeze the mold to harden the custard for unmolding. Once the cake can be unmolded, remove from the pan and cut into 1\u00bd" sections. Brush some tempered Godiva Dark Chocolate onto a strip of acetate and, while it is still fluid, smooth over the top of the molded cheesecake. Once the chocolate has cooled and completely crystallized, remove the acetate, revealing a shiny and textured chocolate finish.',
      ingredients: [
        "2 1/2 cup cream cheese, room temperature\r",
        "1/2 cup sugar\r",
        "1 3/4 tablespoon cocoa powder\r",
        "5 tablespoon Godiva 85% Dark Chocolate Callets\r",
        "2 eggs\r",
        "2 egg yolks\r",
        "1 3/4 tablespoon cr\u00e8me faiche",
      ],
      image:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/belgian_chocolate_02043_16x9.jpg",
      stars: 5,
    },
    {
      id: 15,
      title: "Greek Salad",
      description:
        "In a small bowl, whisk together the lemon juice, garlic, salt, and oil. Set aside.   In a large bowl lightly toss the lettuce with the olives, cheese, cucumber, tomatoes, onion, oregano, and black pepper. Let sit up to 2 hours.  To serve, toss salad with dressing and place sliced chicken on top.",
      ingredients: [
        "6 tablespoon lemon juice\r",
        "2 clove garlic, minced\r",
        "2 teaspoon kosher salt, plus more to taste\r",
        "1 cup extra-virgin olive oil, preferably Greek\r",
        "<hr>\r",
        "1 head romaine lettuce, trimmed of tough stems and torn into bite-sized pieces\r",
        "1 cup kalamata olives, about 6oz/cup\r",
        "1/2 pound Feta cheese, crumbled\r",
        "1 cucumber, trimmed, cut into 1 inch chunks\r",
        "1 1/2 cup grape tomatoes, halved\r",
        "1 small red onion, cut into 1/2-inch wedges, soaked in cold water for 5 minutes and drained\r",
        "2 teaspoon dried oregano\r",
        "Freshly ground black pepper",
      ],
      image:
        "https://images.pexels.com/photos/1152237/pexels-photo-1152237.jpeg",
      stars: 5,
    },
    {
      id: 16,
      title: "Flaky Buttermilk Biscuits",
      description:
        "Adjust oven rack to lower-middle position; heat oven to 450 degrees.  \r\n\r\nWhisk flour, baking power, baking soda, and salt in large bowl.\r\n\r\nAdd shortening to flour mixture; break up chunks with fingertips until only pea-sized pieces remain.  Working in batches, drop butter slices into flour mixture and toss to coat; pick up each slice of butter and press between floured fingertips into flat, nickel-sized pieces.  Repeat until all butter is incorporated; toss to combine.  Freeze mixture (in bowl) until chilled, about 15 minutes.\r\n\r\nSpray 24-square-inch work surface with nonstick cooking spray; spread spray evenly across surface with kitchen towel or paper towel.  Sprinkle 1/3 cup of extra flour across sprayed area; gently spread flour across work surface with palm to form thin, even coating.  Add all but 2 tablespoons of buttermilk to flour mixture; stir briskly with fork until ball forms and no dry bits of flour are visible, adding remaining buttermilk as needed (dough will be sticky and shaggy but should clear sides of bowl).  With rubber spatula, transfer dough onto center of prepared work surface, dust surface lightly with flour, and, with floured hands, bring dough together into cohesive ball.\r\n\r\nPat dough into approximate 10-inch square; roll into 18- by 14-inch rectangle about 1/4 inch thick, dusting dough and rolling pin with flour as needed.  Using bench scraper or thin metal spatula, fold dough into thirds, brushing any excess flour from surface; lift short end of dough and fold in thirds again to form approximate 6- by 4-inch rectangle.  Rotate dough 90 degrees, dusting work surface underneath with flour; roll and fold dough again, dusting with flour as needed.\r\n\r\nRoll dough into 10-inch square about 1/2 inch thick; flip dough and cut nine 3-inch rounds with floured biscuit cutter, dipping cutter back into flour after each cut.  Carefully invert and transfer rounds to ungreased baking sheet, spaced 1 inch apart.  Gather dough scraps into ball; roll and fold once or twice until scraps form smooth dough.  Roll dough into 1/2-inch-thick round; cut 3 more 3-inch rounds and transfer to baking sheet.  Discard excess dough.\r\n\r\nBrush biscuit tops with melted butter.  Bake, without opening oven door, until tops are golden brown and crisp, 15 to 17 minutes.  Let cool on baking sheet 5 to 10 minutes before serving.",

      ingredients: [
        "8 tablespoon unsalted butter, cold, lightly floured and cut into 1/8-inch slices\r",
        "2 tablespoon vegetable shortening, cut into 1/2-inch chunks\r",
        "1 teaspoon salt\r",
        "1 tablespoon baking powder\r",
        "1/2 teaspoon baking soda\r",
        "2 1/2 cup unbleached all-purpose flour\r",
        "2 tablespoon butter, melted\r",
        "1 1/4 cup buttermilk, cold",
      ],
      image:
        "https://carissashaw.com/wp-content/uploads/2019/11/Flaky-Buttermilk-Biscuit-Recipe-hero.jpg",
      stars: 5,
    },
    {},
  ];

  return (
    <div>
      <h1 className="thin-heading">Discover Delicious Meals</h1>
      <section className="meals-section">
        <h3>Featured Meals</h3>
        <div className="meals-grid">
          {meals.map((meal) => (
            <div key={meal.id} className="meal-card">
              <img src={meal.image} alt={meal.title} />
              <h4>{meal.title}</h4>
              <StarRating />
            </div>
          ))}
        </div>
      </section>
      <Link to="/meal" className="button">
        View All Meals
      </Link>
    </div>
  );
};

export default Home;
