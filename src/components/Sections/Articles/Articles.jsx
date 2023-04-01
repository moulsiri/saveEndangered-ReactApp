import React from 'react'
import ArticleContent from './content/ArticleContent'
import ArticleHero from './hero/ArticleHero'
import './articles.scss'
import ArticleFooter from './footer/ArticleFooter'

const Articles = () => {
  return (
    <>
    <ArticleHero/>
    <ArticleContent/>
    <ArticleFooter/>
   
    </>
    
  )
}

export default Articles