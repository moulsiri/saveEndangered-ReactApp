import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'

const CampaignsIntro = () => {
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
            <button>participate <IoMdArrowDropright></IoMdArrowDropright></button>
            <h2>in various campaigns</h2>
            <p>organise by many organisations and get 
chance to spend time with various 
species</p>
          </div>

    </div>
    <div id="t-rt">
      <div className="c-img">
        <img src="/assets/images/together.png" alt="" />
        <div className="cs-img" id="cs-img1">
          <img src="/assets/images/elephant2.png" alt="" />
        </div>
        <div className="cs-img" id="cs-img2">
        <img src="/assets/images/peoples.png" alt="" />

        </div>

      </div>


    </div>

    </div>

   </section>
  )
}

export default CampaignsIntro