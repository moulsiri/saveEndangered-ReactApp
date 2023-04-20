import {useState} from 'react';
import css from './writeArticle.module.scss'

//redux toolkit
import { useSelector ,useDispatch} from 'react-redux';

import LinearProgress from '@mui/material/LinearProgress';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';

import { createArticleAsync } from '../../../../features/asyncActions/asyncArticles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  overflowHidden:'auto'
};

const ArticleForm = ({open,setOpen,content}) => {
   const orgData=useSelector((s)=>s.orgData);
   const {loading,error,success}=useSelector((s)=>s.articleData);
   const dispatch=useDispatch();
   
    
    const Heading=content && content[0].children[0]
    const [previewImg,setPreviewImg]=useState(null)
    const [formData,setFormData]=useState({
      content,
      heading:(content && Heading.type)==="heading"?Heading.text:"",
      previewImg:"",
      intro:'',
      varifiedTo:""
    })
    const handleClose = () => setOpen(false);

    const previewImgHandler=(e)=>{
      let file=e.target.files[0]
      let reader=new FileReader();
      reader.onload=(event)=>{
        if (reader.readyState === 2) {
          setPreviewImg(reader.result);
          setFormData({...formData,previewImg:reader.result})
        }
      }
      reader.readAsDataURL(file);
    }
    const articleSubmitionHandler=(e)=>{
      e.preventDefault();
      dispatch(createArticleAsync(formData))

    }
    const dataChangeHandler=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})

    }

  return (
    <Modal
    open={open}
    onClose={handleClose}
  >
    <Box sx={style} >
      <form className={css.wForm} onSubmit={articleSubmitionHandler}>
         <div className={css.previewImg}>
        <Button variant="contained" component="label" className={css.uploadBtn}>
          Upload preview image
        <input 
        hidden 
        accept="image/*" 
        type="file"  
        onChange={previewImgHandler} />
        </Button>
        <img src={previewImg || "https://images.unsplash.com/photo-1554757387-2a28855c78fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"} alt="hello world" />
        </div>
        <TextField 
        sx={{my:'1em'}}
        id="articleHeading" 
        label="Article Heading" 
        variant="outlined"
        name="heading"
        value={formData.heading}
        fullWidth
        onChange={dataChangeHandler} 
        required/>

        <TextField
        sx={{my:'1em'}}
        id="articleIntro" 
        label="Intro of Article" 
        helperText="tell user the brief intro about the article"
        variant="outlined"
        name="intro"
        value={formData.intro}
        fullWidth
        multiline
        onChange={dataChangeHandler}
        required
        minRows={2}
        maxRows={2}
        />

        <FormControl fullWidth
        sx={{my:'1em'}}>
  <InputLabel id="select-organisation">Select an organisation</InputLabel>
  <Select
    labelId="select-organisation"
    id="select-organisation"
    value={formData.varifiedTo}
    name="varifiedTo"
    label="Select an organisation"
    onChange={dataChangeHandler}
    required
  >
    { (!orgData.loading)
    ?(orgData.success)
      ? orgData.orgList.map((elm,i)=><MenuItem key={`lsdkfi${i}`} value={elm._id}>{elm.name}</MenuItem>)
      :<MenuItem value='null'></MenuItem>
      :<MenuItem value='null' sx={{display:'flex',justifyContent:'center'}}> <CircularProgress size='small' /></MenuItem>
    }
    </Select>
        </FormControl>
        <Button 
        variant="contained" 
        type="submit"
        endIcon={loading?<CircularProgress color="white" size={20}></CircularProgress>:<></>}

        >Submit</Button>
      </form>
       

    </Box>

  </Modal>
  )
}

export default ArticleForm