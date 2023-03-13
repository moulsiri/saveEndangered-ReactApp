import React from 'react'
import './footer.scss';
import ForestSvg from './ForestSvg';
import {IoMailOutline} from 'react-icons/io5';
import { Button } from '@mui/material';
import Logo from '../Nav/Logo';
import {ImFacebook2} from 'react-icons/im';
import {RiInstagramLine} from 'react-icons/ri';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaWhatsapp} from 'react-icons/fa';
const Footer = () => {
  return (
    <footer>
      <ForestSvg/>
      <div id="f1">
        <div className="fcenter">
        <h3>Get our newsletter</h3>
        <div>
          <div id="nMail">
           <input type="text" placeholder='Enter your email address here' />
            <IoMailOutline style={{color:"#D9AC72"}}/>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veniam dicta, porro suscipit quos sunt labore amet nemo nobis deserunt atque numquam consectetur dolorem distinctio voluptate unde asperiores non magnam.</p>
          <Button variant="contained" size="small" style={{marginLeft:"5vmin",marginTop:"2vmin"}}>Subscribe for newsletter</Button>

        </div>
        </div>
       
        
      </div>
      <div id="f2">
        <div id="flft">
        <Logo></Logo>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nam cum quia ut nostrum perferendis illo harum labore assumenda et pariatur optio in, enim iste itaque error rem nulla asperiores!</p>
        <div className="fIcons">
          <ImFacebook2 style={{color:"#fff"}}></ImFacebook2>
          <RiInstagramLine style={{color:"#fff"}}></RiInstagramLine>
          <AiOutlineTwitter style={{color:"#fff"}}></AiOutlineTwitter>
          <FaWhatsapp style={{color:"#fff"}}></FaWhatsapp>

        </div>
        <h6>Copyright 2023 save the endangered community
All rights reserved</h6>


        </div>
        <div id="frt">
          <div id="fcenter">
            <div className="felm">
              <h3>NAVIGATIONS</h3>
              <a href="#">home</a>
              <a href="#">articles</a>
              <a href="#">campaigns</a>
              <a href="#">help us</a>
              <a href="#">about us</a>


            </div>
            <div className="felm">
              <h3>OTHER LINKS</h3>
              <a href="#">ADD ORGANISATIONS</a>
              <a href="#">JOIN US</a>
              <a href="#">JOIN campaigns</a>
              <a href="#">RAISE FUNDS</a>
              <a href="#">DONATE</a>


            </div>
            <div className="felm">
              <h3>SUPPORT</h3>
              <a href="#">FEEDBACK</a>
              <a href="#">SUPPORT</a>
              <a href="#">PRIVACY POLICY</a>


            </div>

          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer