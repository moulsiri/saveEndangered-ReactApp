import {useState,useEffect} from 'react';

import TextEditor from './TextEditor';
import Logo from '../../../Nav/Logo';
import User from '../../../Nav/User';

import MainBackground from '../../../utils/MainBackground'
import css from './writeArticle.module.scss'
import BackButton from '../../../utils/BackButton';
import BackgroundBlur from '../../../utils/BackgroundBlur';
import ArticleForm from './ArticleForm';
import Alert from '../../../utils/Alert'

import { useNavigate } from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';



import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { clearArticleError } from '../../../../features/asyncActions/asyncArticles';




const WriteArticle = () => {
  const {isAuthenticated}=useSelector((s)=>s.normalUser)
  const {error,success}=useSelector((s)=>s.articleData);
  const dispatch=useDispatch()


  const [value,setValue]=useState(null)
  const [open,setOpen]=useState(false);
  const [openAlert,setOpenAlert]=useState(false);
  const nevigate=useNavigate();

  useEffect(()=>{
    if(error){
      setOpenAlert(true)
      dispatch(clearArticleError())
    }
    if(success){
      nevigate("/articles")
    }

  },[error,success])

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
          // console.log(value)
        }}
        size="small"
        sx={{marginRight:'4em'}}
        disabled={value?false:true}
        >
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
    <Alert 
    openAlert={openAlert} 
    setOpenAlert={setOpenAlert}
    mssg={error}
    severity="error" />
    </>
  )
}

export default WriteArticle