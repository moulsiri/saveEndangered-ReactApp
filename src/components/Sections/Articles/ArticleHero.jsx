import { InputAdornment, Paper, TextField } from '@mui/material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import React from 'react'
import HeroCarousel from './HeroCarousel';

const ArticleHero = () => {
  return (
    <div id="a-hero">
        <div className="a-prt">
            <Paper elevation={9} 
            sx={{
                borderRadius:"4em",
                p:1,
                position:'absolute',
                bottom:"-50%",
                width:"100%",
                zIndex:3
                }}>
                <form>
                <TextField
                label="Search various articles by name or auther name"
                id="search-articles"
                fullWidth
                sx={
                    {
                        '& .MuiInputLabel-root.Mui-focused':{
                            color:'#D9AC72',
                            transform:'translate(14px,-150%) scale(1)'
                        }
                    }
                }
                InputProps={{
                endAdornment: <InputAdornment position="start"><SearchRoundedIcon/></InputAdornment>,
          }}
        />
                </form>
            </Paper>
        </div>
        <div className="a-prt">
            <HeroCarousel></HeroCarousel>
        </div>
        
    </div>
  )
}

export default ArticleHero