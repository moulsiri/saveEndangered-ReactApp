import { InputAdornment, Paper, TextField } from '@mui/material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import React from 'react'
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import HeroCarousel from './HeroCarousel';

const ArticleHero = () => {

    const submitionHandler=(e)=>{
        e.preventDefault()

    }

  return (
    <div className="srch-hero">
      <form onSubmit={submitionHandler}>
        <Paper
        className='srchForm'>
        <TextField 
        id="srch-articles" 
        label="Enter any heading and author name to search here" 
        fullWidth
        variant="outlined"
        size="sm"
        InputProps={
            {
                endAdornment:
            <InputAdornment position="end">
                <Fab color="primary" aria-label="add" type='submit'>
                <SearchRoundedIcon />

                </Fab>
                <IconButton aria-label="delete" disabled color="primary">
                </IconButton>
             
            </InputAdornment>
          
            }
        }
        
         />
        </Paper>
 
      </form>
      <div className="gradient">
      </div>
      <div className="c-elm">
        
      </div>
    </div>
  )
}

export default ArticleHero