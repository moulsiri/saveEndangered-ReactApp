import React from 'react'

import CreateIcon from '@mui/icons-material/Create';
import { Alert, Box, Button, Paper, Rating, Typography } from '@mui/material';
import OrganisationCard from './OrganisationCard';
import { Link } from 'react-router-dom';




const RightSection = () => {

  return (
    <Box id="a-section-rt">
        <Typography 
        variant="body1" 
        sx={{
          color:'#D9AC72',
          fontStyle:'italic',
          fontSize:15
        }}>
        " The purpose of writing is to create change, not just to entertain. "
       </Typography>
       <Link to="/article/write"
       className='link-element'>
       <Button 
       sx={{
        my:'3vmin',
        width:'100%'
       }}
       variant="contained"
       endIcon={<CreateIcon />}
       >
        Write Now</Button>
       </Link>
      
        <Alert 
        severity="info"
        sx={{fontSize:11}}>After writing Article with relavent images your article will be sent to any of orgination of your choice for verification purpose</Alert>
        <Box
        sx={{
          marginTop:'5vmin'
        }}>
          <Typography 
          variant='h6'
          style={{display:'flex',
          alignItems:'center',
          fontSize:13}}>
            Top orginations
           
          </Typography>
          {
            [1,2].map((e,i)=>{
              return <OrganisationCard key={i}/>
            })
          }

        </Box>
        </Box>
  )
}

export default RightSection