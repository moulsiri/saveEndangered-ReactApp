import React from 'react'
import ArticleCard from './ArticleCard'

import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

import {useSelector} from 'react-redux';

const LeftSection = () => {
  const {loading,success,error,articleList}=useSelector((s)=>s.articles);

  return (
    <Box id="a-section-lft">
          <Typography 
          style={{color:'#634723'}}
          variant='h6' 
          component='h2'
          gutterBottom>
            TOP ARTICLES
          </Typography>
          <Typography 
        variant="body1" 
        sx={{
          color:'#5e5c5c',
          fontStyle:'italic',
          fontSize:14,
          width:'80%'
        }}>
        " The more that you read, the more things you will know. The more that you learn, the more places you'll go. "
       </Typography>
          <Box sx={{width:'100%',paddingRight:5,marginTop:5}}>
            {
              (loading)
              ?<LinearProgress />
              :<Stack spacing={4}>
            {
              articleList.map((elm,i)=><ArticleCard key={elm._id} data={elm} index={i}/>)
            }
            </Stack>
            }
           
          </Box>
         

        </Box>
  )
}

export default LeftSection