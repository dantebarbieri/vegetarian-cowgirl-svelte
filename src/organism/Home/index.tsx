import BlogGrid from '../../molecule/BlogGrid'
import FeaturedPosts from '../../molecule/FeaturedPosts'
import Header from '../../atom/Header'
import TravelGrid from '../../molecule/TravelGrid'
import BioCard from '../../atom/BioCard'
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'

interface Props {
}


const Home = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>
      <BlogGrid/>
      <FeaturedPosts/>
      <Header text={"Travel Guides"}/>
      <TravelGrid/>
      <BioCard/>
    </ThemeProvider>

  )
}

export default Home
