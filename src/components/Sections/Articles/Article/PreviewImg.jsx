import React from 'react';
import css from './article.module.scss'
import BackButton from '../../../utils/BackButton';


import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PreviewImg = ({img,heading}) => {
  return (
    <div className={css.HeroImg}>
        <BackButton style={{
        position:'absolute',
        left:"15vmin",
        top:"10vmin",
        zIndex:'9'
      }}></BackButton>
        <img src={img} alt="" />
        <Box className={css.aHcontent}>
           <Box className={css.aHtxt}>
           <Typography 
        style={{fontFamily:'Azonix',marginTop:'20vmin'}}
        variant="h5" 
        component="h1" 
        gutterBottom>
        {heading}
        </Typography>
         {/* <Typography variant="caption" gutterBottom style={{marginTop:'5vmin',color:"#634723"}}>
         The disappearance of a species is not just a biological event. It is an impoverishment of the world's diversity, a diminution of its complexity, and a tragedy for those who understand and care about nature's richness and intricacy.
         </Typography> */}
      

        </Box>

          </Box>
    </div>
  )
}

export default PreviewImg