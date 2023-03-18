import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'


const HeroCarousel = () => {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            imageUrl:"https://images.unsplash.com/photo-1543260775-945c562403b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1564&q=80"
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
            backgroundColor:"transparent",
            position:'relative',
            height:'100vh',
            display:'flex',
            alignItems:'flex-end',
            justifyContent:'center'
            }}>
            <div className="c-ovly"></div>
            <img src={props.item.imageUrl} 
            style={{
                objectFit:"cover",
                width:"90%",
                objectPosition:'0 40%',
                height:"100%",
                opacity:.5

    
            }}
            alt="" />
        </Paper>
    )
}

export default HeroCarousel