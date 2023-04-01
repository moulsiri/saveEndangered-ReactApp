import React from 'react'

import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import { InputAdornment,TextField,Button } from '@mui/material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import HeroCarousel from '../../utils/HeroCarousel';

const CampaignsSearch = ({data}) => {
    const submitionHandler=(e)=>{
        e.preventDefault()

    }
  return (
    <>
    <form onSubmit={submitionHandler}>
        <Box
        sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:"flex-start",
            width:"60%",
            margin:"0 auto"
        }
        }
        >
           <Paper
        className='srchForm'
        sx={{px:3}}>
        <TextField 
        id="srch-articles" 
        label="Search for latest campaigns" 
        fullWidth
        variant="outlined"
        InputProps={
            {
                endAdornment:
            <InputAdornment position="end">
                <Fab color="primary" aria-label="add" type='submit' size="small">
                <SearchRoundedIcon />

                </Fab>
                <IconButton aria-label="delete" disabled color="primary">
                </IconButton>
             
            </InputAdornment>
          
            }
        }
         />  
        </Paper>

        <Typography className='txt' variant="blockquote"
    style={{
    fontStyle: 'italic',
    color:'#d4d4d4'
    }}
     >
      " Discover the power of searching! Let your curiosity guide you and unlock a world of possibilities by exploring our app's search bar. "
  
        </Typography>  
        </Box>
         
 
      </form>
      <HeroCarousel data={data}></HeroCarousel>
      <hr className='section-partition' />

    
    </>
  )
}

export default CampaignsSearch