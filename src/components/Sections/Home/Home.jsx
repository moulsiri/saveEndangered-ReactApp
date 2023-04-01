import React from 'react'
import CampaignsIntro from './Elements/CampaignsIntro';
import Campaigns from './Elements/CampaignsIntro';
import ExploreArticles from './Elements/ExploreArticles';
import Hero from './Elements/Hero';
import HeroBackground from './Elements/HeroBackground';

import '../../CommonStyles.scss';
import './Home.scss';

const Home = () => {
  return (
    <>
    <HeroBackground></HeroBackground>
    <Hero></Hero>
    <ExploreArticles></ExploreArticles>
    <CampaignsIntro></CampaignsIntro>

    </>
  )
}

export default Home