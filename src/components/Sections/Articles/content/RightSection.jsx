import React from 'react'

import CreateIcon from '@mui/icons-material/Create';

import { Alert, Box, Button, Paper, Rating, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { createTheme, ThemeProvider} from '@mui/material/styles';

const RightSection = () => {
    const MUITheme=createTheme({
        typography:{
          fontSize:8,
        }
      })
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
       <Button 
       sx={{
        my:'3vmin',
        width:'100%'
       }}
       variant="contained"
       endIcon={<CreateIcon />}
       >
        Write Now</Button>
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
          <ThemeProvider theme={MUITheme}>
          <Card className='top-org-card'>
            <img 
            src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
            <Box
            sx={{p:'1em'}}>
              <Typography
              variant='h5'>
               Name of an Organisation
              </Typography>
              <Rating name="read-only" value={4} readOnly />
              <Typography
              variant='body1'>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
            </Box>
          </Card>
          </ThemeProvider>

        </Box>
        </Box>
  )
}

export default RightSection