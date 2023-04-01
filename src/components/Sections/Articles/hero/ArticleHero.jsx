import React from 'react'
import SectionHero from '../../../utils/SectionHero'
import ArticleSearch from './ArticleSearch'

var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
        imageUrl:"https://images.unsplash.com/photo-1543260775-945c562403b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1564&q=80"
    },
    {
        name: "Random Name #2",
        description: "Hello World!",
        imageUrl:"https://images.unsplash.com/photo-1541708848705-cec66ea1efc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      imageUrl:"/assets/images/loin&loiness2.jpg"
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
    imageUrl:"https://images.unsplash.com/photo-1551098891-7a1c852f6c6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  }
  ]

const ArticleHero = () => {
  return (
    <>
    <SectionHero>
        <ArticleSearch data={items}></ArticleSearch>
    </SectionHero>
    
    </>
  )
}

export default ArticleHero