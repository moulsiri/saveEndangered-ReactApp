import React from 'react'

import { createTheme,ThemeProvider } from '@mui/material/styles';
import { Alert, Box, Button, Paper, Rating, Typography } from '@mui/material';
import {RiDoubleQuotesL,RiDoubleQuotesR} from 'react-icons/ri'
import Avatar from '@mui/material/Avatar';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Fab from '@mui/material/Fab';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import css from './articleCard.module.scss';

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



const ArticleCard = () => {
  return (
    <ThemeProvider theme={articleTheme}>
      <Paper className={css.articleCard} elevation={3}>
      <img src="https://images.unsplash.com/photo-1521651201144-634f700b36ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
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
            May 25,2022
         </Typography>

        </Box>
      <Typography variant="h4" component={'h1'} gutterBottom>
        The wildlife and its habitat cannot speak, so we must and we will.
      </Typography>
      <Typography variant="body1" component={'p'} gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reiciendis et porro eligendi, illo quas dolores eum? Animi fuga ducimus dicta non et. Laboriosam et obcaecati fugiat quibusdam beatae voluptatem!
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
        M
      </Avatar>
      <Box>
      <Typography variant="subtitle1" component={'h6'}>
        Moulsiri Awasthi
      </Typography>
      <Typography 
      variant="caption" 
      component={'p'}
      sx={{display:'flex',
      alignItems:'center'}}>
        Name of Organisation < TaskAltIcon sx={{fontSize:13,marginLeft:1}}/>
      </Typography>

      </Box>
      </Box>
      <Box>
      <Button variant="contained">Read Now</Button>
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