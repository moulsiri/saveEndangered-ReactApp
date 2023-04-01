import {useState} from 'react';
import MainBackground from '../utils/MainBackground';
import css from './Auth.module.scss';
import IconButton from '@mui/material/IconButton';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import { useNavigate } from 'react-router-dom';
import Logo from '../Nav/Logo';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import RegisterForm from './RegisterForm';


import Test from './Test';
const Auth = () => {
  const navigate=useNavigate()
  const [userLogin,setUserLogin]=useState(true)



  return (
    <>
    <MainBackground></MainBackground>

     <section id={css.auth}>
      <IconButton sx={{
        position:'absolute',
        left:"5vmin",
        top:"10vmin",
      }}
      onClick={()=>{navigate(-1)}}
      color="white">
        <KeyboardBackspaceIcon/>
      </IconButton>
      <Box
      sx={{
        display:'flex',
        flexDirection:'column',
        width:'50%',
        p:5,

      }}>
      <Typography 
      variant="subtitle2" 
      component="h6" 
      sx={{color:"#fff"}}
      gutterBottom>
        {
          userLogin?"By creating an account, you'll be part of our community and get to engage with like-minded individuals.":" Already have an account? let's login here"
        }
       
      </Typography>

        <Button sx={{my:2}} variant="contained" onClick={()=>{setUserLogin(!userLogin)}}>{userLogin?"signup":"login"}</Button>
        <Button sx={{my:2}} variant="outlined">Join as an Organisation</Button>
      </Box>   
      <div className={css.aRt}>
        <Box
        width="100%"
        sx={
          {
            py:5,
            px:5
          }
        }
        >
        <Logo color={"#2c2c2c"}></Logo>
        <RegisterForm userLogin={userLogin} setUserLogin={setUserLogin}></RegisterForm>
        
      
        </Box>
        {/* <Test></Test> */}
      </div>
    </section>
    </>
   
  )
}

export default Auth