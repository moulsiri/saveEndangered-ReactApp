import React from 'react'
import Blank from '../../utils/Blank'
import ArticleContent from './content/ArticleContent'
import ArticleHero from './hero/ArticleHero'
import ArticleImage from './footer/ArticleImage'
import './articles.scss'

const Articles = () => {
  return (
    <>
    <ArticleHero/>
    <ArticleContent/>
    <ArticleImage/>
   
    </>
    
  )
}

export default Articles