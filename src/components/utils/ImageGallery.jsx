import React from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box,Typography } from '@mui/material';


function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }


const ImageGallery = ({data}) => {
  return (
    <Box
    className='c-imageContainer'>
        <Typography
        variant="blockquote"
        gutterBottom
        sx={{fontStyle:'italic'}}>
        " Every species is a masterpiece, written by nature and edited by evolution, except for one - the one that thinks it knows better "
        </Typography>
 <ImageList
      className='c-imageGallery'
      sx={{marginTop:'5vmin',width:'100%' }}
      variant="quilted"
      cols={4}
      rowHeight={200}
    >
      {data.map((item) => (
        <ImageListItem className="c-imgElm" key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
          className="c-imgElm"
            {...srcset(item.img, 500, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
          
          
        </ImageListItem>
      ))}
    </ImageList>
    </Box>
    
  )
}



export default ImageGallery