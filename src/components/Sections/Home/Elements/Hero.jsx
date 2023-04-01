import { Button } from '@mui/material';
import {AiOutlinePlus} from 'react-icons/ai'
import React from 'react'
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Hero = () => {
  const {isAuthenticated}=useSelector((s)=>s.normalUser);
  console.log(isAuthenticated)
  return (
    <section id="hero">
      <div id="hLft">
        <div id="hTxt">
             <h2>extinction is</h2>
        <h1>FOREVER</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dicta veniam, voluptas distinctio provident in odit saepe rerum facere excepturi est soluta quis porro beatae. Ex commodi illum ut reiciendis.</p>
        {
          isAuthenticated
          ?<h4>Scroll down and explore more</h4>
          :<div className="action-btn">
        <Link to="/auth" className='link-element'>
        <Button variant="contained" size="small">Join Us</Button>
        </Link>
        <Button variant="outlined" size="small" sx={{marginLeft:'5em'}}>Add origanisation <AiOutlinePlus></AiOutlinePlus></Button>


        </div>
        }
        
        </div>
     
      </div>
      <div id="hRt"></div>
    </section>
  )
}

export default Hero