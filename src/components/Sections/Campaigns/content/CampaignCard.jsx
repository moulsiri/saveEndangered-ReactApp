import React from 'react'

import css from './Campaign.module.scss';

import campaignIcon from '../../../../assets/png/ads-campaign.png'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
const MUItheme=createTheme({
    palette:{
      primary:{
        main:'#B7A540',
        contrastText:"#fff"
      },
      secondary:{
        main:"#D9AC72",
        // contrastText:"#fff"

      },
      white:{
        main:"#fff"
      },
      lightSec:{
        main:"#d9ac7288"
      }
    },
      typography:{
        fontSize:10
      }
  })

const CampaignCard = () => {
  return (
    <ThemeProvider theme={MUItheme}>
    <Grid xs={5}>
          <Paper
          className={css.card}
          elevation={2}
          >
            <Box
            className={css.cImg}>
                <img 
                src="https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80" alt="" />
            </Box>
            <Box className={css.cTxt}>
            <Typography variant="h5" gutterBottom>
                Guardians of the Field
             </Typography>
             <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
             </Typography>
             <Box
             sx={{
                marginTop:'2em',
                display:'flex',
                justifyContent:'space-between'
             }}>
             <Button 
             sc={{marginTop:'1em'}}
             variant="contained"
             >Participate Now</Button>
             <Box>
             <IconButton color="secondary" aria-label="add an alarm">
             <ShareIcon />
             </IconButton>
             <IconButton color="secondary" aria-label="add an alarm">
             <BookmarkBorderIcon />
             </IconButton>

             </Box>
             
             </Box>
             <div className={css.cIcon}>
              <img src={campaignIcon} alt="" />
             </div>


            </Box>
           

            

          </Paper>
   </Grid>
   </ThemeProvider>
  )
}

export default CampaignCard