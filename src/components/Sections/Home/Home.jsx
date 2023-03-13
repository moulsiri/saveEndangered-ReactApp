import React from 'react'
import CampaignsIntro from './CampaignsIntro';
import Campaigns from './CampaignsIntro';
import ExploreArticles from './ExploreArticles';
import Hero from './Hero';
import HeroBackground from './HeroBackground';
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