import {useEffect} from 'react'
import ArticleContent from './content/ArticleContent'
import ArticleHero from './hero/ArticleHero'
import './articles.scss'
import ArticleFooter from './footer/ArticleFooter'

const Articles = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);


  return (
    <>
    <ArticleHero/>
    <ArticleContent/>
    <ArticleFooter/>
   
    </>
    
  )
}

export default Articles