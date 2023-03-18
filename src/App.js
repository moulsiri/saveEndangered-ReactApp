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
import "./components/CommonStyles.scss";

/**
 * Components
 */
import About from './components/Sections/About/About'
import Articles from './components/Sections/Articles/Articles'
import Campaigns from './components/Sections/Campaigns/Campaigns'
import Help from './components/Sections/Help/Help'
import Home from './components/Sections/Home/Home'
import Auth from './components/Auth/Auth';
import RoutesWrapper from './RoutesWrapper';

const App = () => {
 

  const MUItheme=createTheme({
    palette:{
      primary:{
        main:'#B7A540',
        contrastText:"#fff"
      },
      secondary:{
        main:"#D9AC72"

      },
      white:{
        main:"#fff"
      }
    },
    components:{
      // MuiButton: {
      //   styleOverrides: {
      //     // Name of the slot
      //     root: {
      //       color: 'white',
      //     },
      //   },
      // },
    }
  })

  useEffect(()=>{

  },[])



  return (
    <ThemeProvider theme={MUItheme}>
    <IconContext.Provider value={{ className: "icons-class" }}>
      <main>

    <RoutesWrapper>
     <Routes>
      <Route index path="/" element={<Home/>}></Route>
      <Route path="/articles" element={<Articles/>}></Route>
      <Route path="/campaigns" element={<Campaigns/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/help" element={<Help/>}></Route>
      <Route path="/auth" element={<Auth/>}></Route>
    </Routes>
    </RoutesWrapper>

   </main>
   </IconContext.Provider>
    </ThemeProvider>
   
  )
}

export default App