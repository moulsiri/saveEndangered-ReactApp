import React from 'react'

import { createTheme, ThemeProvider} from '@mui/material/styles';
import Card from '@mui/material/Card';
import { Alert, Box, Button, Paper, Rating, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';


const MUITheme=createTheme({
    typography:{
      fontSize:8,
    }
  })
const OrganisationCard = () => {
  return (
    <ThemeProvider theme={MUITheme}>
          <Card className='top-org-card'>
          <Avatar 
          className='avatar'
          alt="Remy Sharp" 
          src="https://images.unsplash.com/photo-1428366890462-dd4baecf492b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
           />
            <Box>
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
  )
}

export default OrganisationCard