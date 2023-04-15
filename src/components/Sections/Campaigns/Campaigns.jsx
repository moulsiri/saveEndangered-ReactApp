import {useEffect} from 'react'
import Blank from '../../utils/Blank'
import CampaignsHero from './CampaignsHero'
import CampaignFooter from './CampaignFooter'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CampaignCard from './content/CampaignCard';

const Campaigns = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);


  return (
    <>
    <CampaignsHero></CampaignsHero>
    <section className='content'>
    <Box sx={{ 
      flexGrow:1,
      paddingTop:'3em'}}>
      <Grid 
      container 
      spacing={8}
      display="flex" justifyContent="center" alignItems="center">
        {
          [1,2,3,4,5,6,7,8,9].map((elm,i)=><CampaignCard key={`dlkfie${i}`}/>)
        }
      </Grid>
    </Box>
      

    </section>
    <CampaignFooter></CampaignFooter>

    </>
  )
}

export default Campaigns