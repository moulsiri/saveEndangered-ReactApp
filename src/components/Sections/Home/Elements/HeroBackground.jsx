import React from 'react';
// import img from '../../../assets/images/mouse.jpg'

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
          <img src="/assets/images/bg.png" alt="" />

          </div>
          
          
         </div>
         <div id="mouse">
          <img src="/assets/images/mouse.jpg" alt="" />
          <div id="stamp"><img src="/assets/png/stamp.png" alt="" /></div>
         </div>
    </div>
  )
}

export default HeroBackground