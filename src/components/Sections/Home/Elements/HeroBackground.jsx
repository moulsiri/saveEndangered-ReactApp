import {useState} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import bgImg from '../../../../assets/images/webp/bg.webp';
import stamp from '../../../../assets/png/stamp.png';
import mouse from '../../../../assets/images/webp/mouse.webp'


const HeroBackground = () => {
  const [imgLoad,setImgLoad]=useState(false)

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
          <img 
          className={`smooth-image image-${
            imgLoad ? 'visible' :  'hidden'}`}
          src={bgImg} 
          alt=""
          onLoad={()=>setImgLoad(true)} />

          
          </div>
          
          
          
         </div>
         <div id="mouse">
          <img 
           className={`smooth-image image-${
            imgLoad ? 'visible' :  'hidden'}`}
            onLoad={()=>setImgLoad(true)}
            src={mouse} 
            alt=""
           />
          <div id="stamp"><img src={stamp} alt="" /></div>
         </div>
    </div>
  )
}

export default HeroBackground