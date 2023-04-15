import {useState} from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import { Link } from 'react-router-dom';

import together from '../../../../assets/images/together.png';
import elephant from '../../../../assets/images/elephant2.png';
import people from '../../../../assets/images/peoples.png';


const CampaignsIntro = () => {

  const [imgLoad1,setImgLoad1]=useState(false)
  const [imgLoad2,setImgLoad2]=useState(false)
  const [imgLoad3,setImgLoad3]=useState(false)


  return (
   <section id="campaignsIntro">
    <div className="c-heading">
            <h3>Together</h3>
            <h5>we can</h5>
    </div>
    <div id="together">
    <div id="t-lft">
      <div className="txt">
        <p>They don't need your reaction.....they need 
your action Join hands and participate 
in various activities and campaigns 
done by many organisations and get 
the wholesome experience with 
various species.
</p>
<p>Get to know more about the endangered species 
by taking care of them</p>
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
      </div>
      <div className="b-readBtn">
        <Link to="/campaigns" className='link-element'>
        <button className="pointer">participate <IoMdArrowDropright></IoMdArrowDropright></button>
        </Link>
            <h2>in various campaigns</h2>
            <p>organise by many organisations and get 
chance to spend time with various 
species</p>
          </div>

    </div>
    <div id="t-rt">
      <div className="c-img">
        <img 
         className={`smooth-image image-${
          imgLoad1 ? 'visible' :  'hidden'}`}
          onLoad={()=>setImgLoad1(true)}
        
        src={together} alt="" />
        <div className="cs-img" id="cs-img1">
          <img
           className={`smooth-image image-${
            imgLoad2 ? 'visible' :  'hidden'}`}
            onLoad={()=>setImgLoad2(true)}
           src={elephant} alt="" />
        </div>
        <div className="cs-img" id="cs-img2">
        <img
         className={`smooth-image image-${
          imgLoad3 ? 'visible' :  'hidden'}`}
          onLoad={()=>setImgLoad3(true)}
         src={people} alt="" />

        </div>

      </div>


    </div>

    </div>

   </section>
  )
}

export default CampaignsIntro