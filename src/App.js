import {useEffect} from 'react'
/**
 * external libraries
 */
import { Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { IconContext } from "react-icons";

// Import css files for carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * Components
 */
import About from './components/Sections/About/About'
import Articles from './components/Sections/Articles/Articles'
import Campaigns from './components/Sections/Campaigns/Campaigns'
import Help from './components/Sections/Help/Help'
import Home from './components/Sections/Home/Home'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer';

const App = () => {

  const MUItheme=createTheme({
    palette:{
      primary:{
        main:'#B7A540',
        contrastText:"#fff"
      }
    }
  })

  useEffect(()=>{

  },[])



  return (
    <ThemeProvider theme={MUItheme}>
    <IconContext.Provider value={{ className: "icons-class" }}>
      <main>
      <Nav/>
    <Routes>
      <Route index path="/" element={<Home/>}></Route>
      <Route path="/articles" element={<Articles/>}></Route>
      <Route path="/campaigns" element={<Campaigns/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/help" element={<Help/>}></Route>


    </Routes>
    <Footer></Footer>
   </main>
   </IconContext.Provider>
    </ThemeProvider>
   
  )
}

export default App