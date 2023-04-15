import {useEffect} from 'react'
import CampaignsIntro from './Elements/CampaignsIntro';
import ExploreArticles from './Elements/ExploreArticles';
import Hero from './Elements/Hero';
import HeroBackground from './Elements/HeroBackground';

import '../../CommonStyles.scss';
import './Home.scss';

const Home = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
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