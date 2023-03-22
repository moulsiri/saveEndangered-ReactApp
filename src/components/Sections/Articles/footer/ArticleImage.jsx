import React from 'react'

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box,Typography } from '@mui/material';

import './style.scss';

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }


const ArticleImage = () => {
  return (
    <div className="c-footer">
        <div className="gradient">

        </div>
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
      {itemData.map((item) => (
        <ImageListItem className="c-imgElm" key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
          className="c-imgElm"
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Box>
   

    </div>
  )
}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1527161153332-99adcc6f2966',
      title: 'Elephant',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1463852247062-1bbca38f7805?ixlib=rb-4.0.3',
      title: 'Chimpanzee',
    },
    {
      img: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3',
      title: 'Panda',
    },
    {
      img: 'https://images.unsplash.com/photo-1586943353950-95bdbe3207a1?ixlib=rb-4.0.3',
      title: 'Zebra',
      cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1583499871880-de841d1ace2a?ixlib=rb-4.0.3',
        title: 'Lion',
      },
      {
        img: 'https://images.unsplash.com/photo-1541708848705-cec66ea1efc9?ixlib=rb-4.0.3',
        title: 'Rhino',
        cols: 3,
      },

  ];

export default ArticleImage