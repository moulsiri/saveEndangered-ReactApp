import {useEffect} from 'react'
/**
 * external libraries
 */
import { Route, Routes,Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { IconContext } from "react-icons";

import {app,database} from './firebaseConfig';
import {collection,addDoc} from 'firebase/firestore';


/**
 * redux
 */
import {loadNormalUser} from './features/asyncActions/asyncNormalUser';
import { useDispatch,useSelector } from 'react-redux';


/**
 * Components
 */
import About from './components/Sections/About/About'
import Articles from './components/Sections/Articles/Articles'
import Campaigns from './components/Sections/Campaigns/Campaigns'
import Help from './components/Sections/Help/Help'
import Home from './components/Sections/Home/Home'
import Auth from './components/Auth/Auth';
import WriteArticle from './components/Sections/Articles/WriteArticle/WriteArticle';
import MainHomePage from './components/Sections/MainHomePage';
import ProtectiveRoute from './components/utils/ProtectiveRoute';
import OrganisationAuth from './components/Auth/OrganisationAuth';
import Article from './components/Sections/Articles/Article/Article';

const App = () => {
 const dispatch=useDispatch();
 const {isAuthenticated}=useSelector((s)=>s.normalUser)


  const MUItheme=createTheme({
    palette:{
      primary:{
        main:'#B7A540',
        contrastText:"#fff"
      },
      secondary:{
        main:"#D9AC72",
        // contrastText:"#fff"

      },
      white:{
        main:"#fff"
      },
      lightSec:{
        main:"#d9ac7288"
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
     dispatch(loadNormalUser())
    //  console.log('helo')
  },[])



  return (
    <ThemeProvider theme={MUItheme}>
    <IconContext.Provider value={{ className: "icons-class" }}>
      <main>
     <Routes>
      <Route path="/" element={<MainHomePage/>}>
      <Route index path="/" element={<Home/>}/>
      <Route path="/articles" element={<Articles/>}>
        
      </Route>
      <Route path="campaigns" element={<Campaigns/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="help" element={<Help/>}/>
      <Route path="/articles/:id" element={<Article/>}/>
      </Route>
      
      <Route path="/auth" element={<ProtectiveRoute><Auth/></ProtectiveRoute>}/>
      <Route path="/article/write" element={<WriteArticle/>}/>
      <Route path="/organisation/auth" element={<OrganisationAuth/>}></Route>
    </Routes>
   


   </main>
   </IconContext.Provider>
    </ThemeProvider>
   
  )
}

export default App