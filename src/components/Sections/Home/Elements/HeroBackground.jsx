import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

import bgImg from '../../../../assets/images/webp/bg.webp';
import stamp from '../../../../assets/png/stamp.png';
import mouse from '../../../../assets/images/webp/mouse.webp'


const HeroBackground = () => {
  return (
    <div id="hBackground">
         <div id="hBLft">
          {/* <div className="bImg">
            <img src="/assets/images/elephant.jpg" alt="" />
          </div>
          <div className="bImg" id="rhno">
            <img src="/assets/images/rhno.jpg" alt="" />
          </div>
          <div className="bImg" id="adam-bird">
            <img src="/assets/images/adam-bird.jpg" alt="" />
          </div> */}
          <div className="bImg">
          <img src={bgImg} alt="" />
          </div>
          
          
         </div>
         <div id="mouse">
          <img src={mouse} alt="" />
          <div id="stamp"><img src={stamp} alt="" /></div>
         </div>
    </div>
  )
}

export default HeroBackground