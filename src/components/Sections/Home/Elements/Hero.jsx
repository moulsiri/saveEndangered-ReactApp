import { Button } from '@mui/material';
import {AiOutlinePlus} from 'react-icons/ai'
import React from 'react'
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Hero = () => {
  const {isAuthenticated}=useSelector((s)=>s.normalUser);
  return (
    <section id="hero">
      <div id="hLft">
        <div id="hTxt">
             <h2>extinction is</h2>
        <h1>FOREVER</h1>
        <p>The disappearance of a species is not just a biological event. It is an impoverishment of the world's diversity, a diminution of its complexity, and a tragedy for those who understand and care about nature's richness and intricacy</p>
        {
          isAuthenticated
          ?<h4>Scroll down and explore more</h4>
          :<div className="action-btn">
        <Link to="/auth" className='link-element'>
        <Button variant="contained" size="small">Join Us</Button>
        </Link>
        <Link to="/organisation/auth" className='link-element'>
        <Button variant="outlined" size="small" sx={{marginLeft:'5em'}}>Add origanisation <AiOutlinePlus></AiOutlinePlus></Button>
        </Link>


        </div>
        }
        
        </div>    
      </div>
      <div id="hRt"></div>
    </section>
  )
}

export default Hero