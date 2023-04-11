import {useState,useEffect}from 'react'
import css from './Auth.module.scss';

import { Box, Button, Typography } from '@mui/material';
import MainBackground from '../utils/MainBackground'
import BackButton from '../utils/BackButton'
import { Link } from 'react-router-dom';
import Logo from '../Nav/Logo';
import OrganisationRegForm from './OrganisationRegForm';

const OrganisationAuth = () => {
  const [RegisterOrg,setRegisterOrg]=useState(true);

  return (
    <>
    <MainBackground></MainBackground>
    <BackButton style={{
        position:'absolute',
        left:"5vmin",
        top:"10vmin",
        zIndex:'9'
      }}></BackButton>
      <section className={css.auth}>
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
        Join the growing community of successful organizations that have already registered with our app. It's quick, easy, and free
       
      </Typography>

        <Button sx={{my:2,width:'100%'}} 
        variant="contained"
        onClick={()=>{setRegisterOrg(!RegisterOrg)}}>
          {RegisterOrg?"Add your Organisation":"Login with your organisation"}</Button>

        <Link to="/auth" className='link-element' style={{width:'100%'}}>
        <Button sx={{my:2,width:'100%'}} variant="outlined">Join as normal User</Button>
        </Link>
      </Box> 
        <div className={css.aRt}>
          <Box sx={{p:5}}>
          <Logo color={"#2c2c2c"}></Logo>
          <OrganisationRegForm></OrganisationRegForm>

          </Box>

        </div>
      </section>
    
    </>
  )
}

export default OrganisationAuth