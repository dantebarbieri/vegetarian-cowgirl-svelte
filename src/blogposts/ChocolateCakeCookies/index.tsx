import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import RecipeBlogPostComplex from '../../blogposts/RecipeBlogPostComplex'

import Chocolate_Cake_Cookies_Blog_Square from '../../assets/images/blog_posts/chocolate_cake_cookies_blog_square.jpg';

import Baking_Icon from '../../assets/images/icons/baking_icon.png';

interface Props {
}


const ChocolateCakeCookies = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>
    <RecipeBlogPostComplex
      image={Chocolate_Cake_Cookies_Blog_Square}
      icon={Baking_Icon}
      title="Chocolate Fudgey Cake Cookies"
      subtitle={` This quick cookie is perfect to satisfy your fudgey chocolate
        cravings! Made from cake box mix this comes together in minutes
        is easily customizable with your choice of mix-ins.`}
      subtitle2={`This dessert is a fan favorite by college students! Made from
        chocolate cake mix the cookies come together super fast. My personal favorite
        mix-ins are white chocolate chips, Andes Chocolate, and Reese's Pieces. The
        overall flavor is reminiscent of a fudgey brownies and hits the spot!`}
      category_1_ingredients="Cookie Dough"
      ingredients_1= {[
                     '1 box Betty Crocker Triple Chocolate Fudge Cake Mix',
                     '2 eggs',
                     '1/2 cup canola oil',
                     '1 cup chocolate chips or any other candy (ex: Andes)'
                    ]}
      steps= {[`Preheat the oven to 350 degrees F.`,
             `Mix the cake mix, eggs, and oil with a whisk or electric mixer until combined.`,
              `Add chocolate chips (or other candy) and mix together.`,
             `Create 1 inch balls and place on baking sheet lined with parchment. The cookies spread so
             make sure they are spaced out.`,
             `Bake for 9-11 minutes. If they are too underdone bake for an additional 2 minutes.`,
              `Let cookies cool on baking sheet for 15 minutes.`,
               `Using a spatula lift the cookies up and transfer to a cooling rack until the cookies
               are cool to touch.`,
             `Store cookies in an airtight container.`]}
      preptime= "10 min"
      cooktime= "9-11 min"
      totaltime= "45 min"
      serves= {20}
      />

    </ThemeProvider>
  )
}

export default ChocolateCakeCookies
