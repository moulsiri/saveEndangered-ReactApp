import React from 'react'
import { useNavigate } from 'react-router-dom';

import MainBackground from '../../../utils/MainBackground'
import IconButton from '@mui/material/IconButton';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import css from './writeArticle.module.scss'

const WriteArticle = () => {
  const navigate=useNavigate();
  return (
    <>
    <MainBackground/>
    <IconButton sx={{
        position:'absolute',
        left:"5vmin",
        top:"10vmin",
        zIndex:'9'
      }}
      onClick={()=>{navigate(-1)}}
      color="white">
        <KeyboardBackspaceIcon/>
    </IconButton>
    <section className={css.writeSection}>
      <div className={css.wRt}></div>
    </section>
    </>
  )
}

export default WriteArticle