import {useState} from 'react';

import TextEditor from './TextEditor';
import Logo from '../../../Nav/Logo';
import User from '../../../Nav/User';

import MainBackground from '../../../utils/MainBackground'
import css from './writeArticle.module.scss'
import BackButton from '../../../utils/BackButton';
import BackgroundBlur from '../../../utils/BackgroundBlur';
import ArticleForm from './ArticleForm';




import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';




const WriteArticle = () => {
  const [value,setValue]=useState([
    {
      children:[
        {
          text:'Heading of the article',
          type:'heading'
        }
      ],
    },
    {
      children:[
        {
          text:'',
          type:'paragraph'
        }
      ],
    }
  ])
  const [open,setOpen]=useState(false);

  return (
    <>
    <MainBackground/>
    <BackgroundBlur/>
    <BackButton style={{
        position:'fixed',
        left:"5vmin",
        top:"3vmin",
        zIndex:'9'
      }}></BackButton>
    <section className={css.writeSection}>
    
      <div className={css.wNav}>
        <Logo color="#2c2c2c"></Logo>
        <div>
        <Button 
        variant="contained" 
        color="secondary" 
        onClick={()=>{
          setOpen(true)
          console.log(value)
        }}
        size="small"
        sx={{marginRight:'4em'}}>
          Submit</Button>
        <User></User>
        </div>

      </div>
      <div className={css.wRt}>
        <div id={css.contentArea}>
          <TextEditor setValue={setValue}/>
        </div>
      </div>
    </section>
    {
      open
      ?<ArticleForm open={open} setOpen={setOpen} content={value}/>
      :<></>
    
    }
    </>
  )
}

export default WriteArticle