import {useState,useEffect} from 'react'
import Carousel from 'react-material-ui-carousel'

import { Paper, Button,Typography,Box } from '@mui/material'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Pagination from '@mui/material/Pagination';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import IconButton from '@mui/material/IconButton';

const HeroCarousel = ({data}) => {
  const [page, setPage] =useState(1);

    const MyPagination = ({ index, length }) => (
        <Pagination count={length} color="primary" page={index} />
      );
   
  return (
    <Carousel

    // style={carouselStyle}

    animation="fade"
    // autoPlay={false}
    className='a-carousel'
    indicators={false}
    index={page===0?0:page-1}
    onChange={(index)=>{setPage(index);}}
    navButtonsProps={{
      style:{display:'none'}
    }}
    startIndex={1}
    

    
    >
    {
        data.map( (item, i) => <Item key={i+1} page={page} setPage={setPage} item={item} data={data}/> )
    }
   </Carousel>
  )
}

function Item(props)
{
    const handleChange = (event, value) => {
      props.setPage(value);
      console.log(value)
    };
    return (
      <Paper 
          elevation={0}
          style={{backgroundColor:'transparent',padding:1}}
          className="a-carousel-elm">
          <img 
          src={props.item.imageUrl}
          className="a-carousel-img"
          alt="Flamingo" />
          <div className="a-carousel-gradient"></div>
          <Box className="a-carousel-content">
           <Box className="a-carousel-txt">
           <Typography 
        style={{fontFamily:'Azonix',marginTop:'20vmin'}}
        variant="h5" 
        component="h1" 
        gutterBottom>
        The only way to save a species is to protect its habitat
        </Typography>
         <Typography variant="caption" gutterBottom style={{marginTop:'5vmin',color:"#634723"}}>
         The disappearance of a species is not just a biological event. It is an impoverishment of the world's diversity, a diminution of its complexity, and a tragedy for those who understand and care about nature's richness and intricacy.
         </Typography>
         <Button 
        variant="text"
        color="secondary"
        style={{marginTop:'5vmin',marginLeft:'-1vmin'}}
        endIcon={<KeyboardDoubleArrowRightIcon />}
        >Read more</Button>
      

        </Box>
        <Box className="a-carousel-nm">
        <Pagination style={{width:'fit-content'}} color='lightSec' count={props.data.length} page={props.page===0?1:props.page} onChange={handleChange} />
        </Box>

          </Box>

      </Paper>
    )
}

// var items = [
//   {
//       name: "Random Name #1",
//       description: "Probably the most random thing you have ever seen!",
//       imageUrl:"https://images.unsplash.com/photo-1543260775-945c562403b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1564&q=80"
//   },
//   {
//       name: "Random Name #2",
//       description: "Hello World!",
//       imageUrl:"https://images.unsplash.com/photo-1541708848705-cec66ea1efc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
//   },
//   {
//     name: "Random Name #2",
//     description: "Hello World!",
//     imageUrl:"/assets/images/loin&loiness2.jpg"
// },
// {
//   name: "Random Name #2",
//   description: "Hello World!",
//   imageUrl:"https://images.unsplash.com/photo-1551098891-7a1c852f6c6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
// }
// ]

export default HeroCarousel