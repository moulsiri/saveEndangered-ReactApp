import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'


const HeroCarousel = () => {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            imageUrl:"/assets/images/loin&loiness2.jpg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            imageUrl:"/assets/images/loin&loiness2.jpg"
        }
    ]
  return (
    <Carousel
    autoPlay={false}

    
    >
    {
        items.map( (item, i) => <Item key={i} item={item} /> )
    }
   </Carousel>
  )
}

function Item(props)
{
    return (
        <Paper elevation={0} sx={{
            p:2,
            backgroundColor:"#ffffff0e",
            position:'relative',
            height:'60vh'
            }}>
            <div className="c-ovly"></div>
            <img src={props.item.imageUrl} 
            style={{
                objectFit:"cover",
                width:"100%",
                height:"100%",

    
            }}
            alt="" />
        </Paper>
    )
}

export default HeroCarousel