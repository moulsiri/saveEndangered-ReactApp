import {useState} from 'react';

import { Link } from 'react-router-dom';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';

import RegisterForm from './RegisterForm';
import MainBackground from '../../utils/MainBackground';
import css from '../Auth.module.scss';
import Logo from '../../Nav/Logo';
import BackButton from '../../utils/BackButton';

const Auth = () => {
  const [userLogin,setUserLogin]=useState(true)



  return (
    <>
    <MainBackground></MainBackground>

     <section className={css.auth}>
      <BackButton style={{
        position:'absolute',
        left:"5vmin",
        top:"10vmin",
      }}></BackButton>
     
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
        <Link to="/organisation/auth" className='link-element' style={{width:'100%'}}>
        <Button sx={{my:2,width:'100%'}} variant="outlined">Join as an Organisation</Button>
        </Link>
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