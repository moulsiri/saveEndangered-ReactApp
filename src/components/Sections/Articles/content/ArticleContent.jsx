import React from 'react'

import LeftSection from './LeftSection';
import RightSection from './RightSection';

import './style.scss'


const ArticleContent = () => {

  return (
    <section className='content' >
        <LeftSection/>
        <RightSection/>    
    </section>
  )
}

export default ArticleContent