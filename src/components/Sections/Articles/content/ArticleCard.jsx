import React from 'react'
import moment from 'moment';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { createTheme,ThemeProvider } from '@mui/material/styles';
import { Alert, Box, Button, Paper, Rating, Typography } from '@mui/material';
import {RiDoubleQuotesL,RiDoubleQuotesR} from 'react-icons/ri'
import Avatar from '@mui/material/Avatar';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Fab from '@mui/material/Fab';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import css from './articleCard.module.scss';
import { Link } from 'react-router-dom';

const articleTheme=createTheme({
  palette:{
    primary:{
      main:'#B7A540',
      contrastText:"#fff"
    }
  },
  typography:{
    fontSize:10
  }
})



const ArticleCard = ({data,index}) => {
  return (
    <ThemeProvider theme={articleTheme}>
      <Paper className={css.articleCard} elevation={3}>
        <Box
        sx={{width:'50%'}}>
          <LazyLoadImage
          src={data?.previewImg.url}
          effect='blur'
          />
        </Box>
      
      <Box className={css.articleCardContent}>
        <Box
        sx={{
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center',
          height:'10vmin'
        }}>
          <RiDoubleQuotesL id={css.leftQuoteA}/>
          <Typography variant="blockquotes" display="block" gutterBottom>
            {moment(data?.createdAt).fromNow()}
         </Typography>

        </Box>
      <Typography variant="h4" component={'h1'} gutterBottom>
        {data?.heading}
      </Typography>
      <Typography 
      sx={{
        // backgroundColor:'red',
        // height:'10vh',
        // width:'89%',
        // wordWrap: "break-word"
    }}
      variant="body1" 
      component={'p'} 
      gutterBottom >
       {
        data?.intro
       }
      </Typography>
      <Box
      sx={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'flex-start',
      }}>
        <Box
      sx={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'flex-start',
        width:"45%"
      }}>
      <Avatar alt="Remy Sharp">
        {
          data?.writtenBy?.name[0]|| 'M'
        }
      </Avatar>
      <Box>
      <Typography variant="subtitle1" component={'h6'}>
        {
          data?.writtenBy?.name
        }
      </Typography>
      <Typography 
      variant="caption" 
      component={'p'}
      sx={{display:'flex',
      alignItems:'center'}}>
        {
          data?.varifiedTo?.name
        } < TaskAltIcon sx={{fontSize:13,marginLeft:1}}/>
      </Typography>

      </Box>
      </Box>
      <Box>
        <Link to={`/articles/${data._id}/${index}`} className='link-element'>
      <Button variant="contained">Read Now</Button>
      </Link>
      <Button variant='text'>
      <BookmarkBorderIcon size="small" />
      </Button>
      </Box>
      </Box>
      

      </Box>
      <RiDoubleQuotesR id={css.rightQuoteA}/>


    </Paper>
    </ThemeProvider>
   
  )
}

export default ArticleCard