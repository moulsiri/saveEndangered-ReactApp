import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import HeroCarousel from '../../../utils/HeroCarousel';
import { InputAdornment, Paper, TextField, Typography,Button } from '@mui/material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import './style.scss';
import { Box } from '@mui/system';

const ArticleSearch = ({data}) => {
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
        label="Enter any heading and author name to search here" 
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
      {/* carousel ke indicator or next prev button ko customize karna hai*/}
      <HeroCarousel data={data}></HeroCarousel>
      <hr className='section-partition' />
    </>
  )
}

export default ArticleSearch