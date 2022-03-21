import * as React from 'react';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

interface Props {
}


const HawaiiMauiBlogGrid = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/maui_activities_blog_square.jpg'} title={'MAUI'} subtitle={'Activities in Maui'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/maui_travel_guide_blog_square.jpg'} title={'MAUI'} subtitle={'Maui Travel Guide'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/maui_vegetarian_blog_square.jpg'} title={'MAUI'} subtitle={'Vegetarian Restaurants in Maui'} post={'/'}/>
      </Grid>
    </Grid>
    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/maui_beaches_blog_square.jpg'} title={'MAUI'} subtitle={'Best Beaches in Maui'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/maui_road_to_hana_blog_square.jpg'} title={'MAUI'} subtitle={'Road to Hana'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/maui_haleakala_blog_square.jpg'} title={'MAUI'} subtitle={'Haleakala'} post={'/'}/>
      </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default HawaiiMauiBlogGrid
