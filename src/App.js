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
import { asyncLoadUser, logOutAsync} from './features/asyncActions/asyncNormalUser';
import { useDispatch,useSelector } from 'react-redux';


/**
 * Components
 */
import About from './components/Sections/About/About'
import Articles from './components/Sections/Articles/Articles'
import Campaigns from './components/Sections/Campaigns/Campaigns'
// import Help from './components/Sections/Help/Help'
import Home from './components/Sections/Home/Home'
import Auth from './components/Auth/User/Auth';
import WriteArticle from './components/Sections/Articles/WriteArticle/WriteArticle';
import MainHomePage from './components/Sections/MainHomePage';
import ProtectiveRoute from './components/utils/ProtectiveRoute';
import OrganisationAuth from './components/Auth/Org/OrganisationAuth';
import Article from './components/Sections/Articles/Article/Article';
import { fetchArticleList } from './features/asyncActions/asyncArticleData';
import { fetchOrgList } from './features/asyncActions/asyncOrgData';

const App = () => {
 const dispatch=useDispatch();
 const {isAuthenticated,flag}=useSelector((s)=>s.normalUser)


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
    dispatch( asyncLoadUser())
     dispatch(fetchOrgList());
     dispatch(fetchArticleList());
    //  dispatch(logOutAsync())
    //  console.log('helo')
  },[isAuthenticated])



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
      {/* <Route path="help" element={<Help/>}/> */}
      <Route path="/articles/:id/:i" element={<Article/>}/>
      </Route>
      
      <Route path="/auth" element={<ProtectiveRoute flag={isAuthenticated}><Auth/></ProtectiveRoute>}/>
      <Route path="/article/write" element={<ProtectiveRoute flag={!isAuthenticated}><WriteArticle/></ProtectiveRoute>}/>
      <Route path="/organisation/auth" element={<ProtectiveRoute flag={isAuthenticated}><OrganisationAuth/></ProtectiveRoute> }></Route>
    </Routes>
   


   </main>
   </IconContext.Provider>
    </ThemeProvider>
   
  )
}

export default App