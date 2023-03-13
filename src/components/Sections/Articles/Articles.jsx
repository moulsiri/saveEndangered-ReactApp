import React from 'react'
import Blank from '../../utils/Blank'
import ArticleHero from './ArticleHero'
import './articles.scss'

const Articles = () => {
  return (
    <>
    <Blank content={true}>
      <ArticleHero></ArticleHero>
    </Blank>
    <section className='content'>
    <div id="write-now">
          <h2>writeNow button</h2>
          </div>
      <div id="article-page">
        <h1>Article section</h1>
        <p>#kam-kya-kya-hai-suno</p>
        <h3>1. single article card</h3>
        <h3>2. single article page</h3>
        <h3>3. to write now article</h3>

     

      </div>

    </section>
    <Blank position={'o-p-bottom'}></Blank>

    </>
    
  )
}

export default Articles