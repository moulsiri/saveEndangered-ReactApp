import {useState} from 'react';
import css from './writeArticle.module.scss'


import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const ArticleForm = ({open,setOpen,content}) => {

    const [previewImg,setPreviewImg]=useState(null)
    const [formData,setFormData]=useState({
      content,
      heading:content[0].children[0].text,
      previewImg:"",
      subHeading:'',
      organisationToVarify:""
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
      console.log(formData)

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
        id="articleSubHeading" 
        label="Article Sub Heading" 
        variant="outlined"
        name="subHeading"
        value={formData.subHeading}
        fullWidth
        onChange={dataChangeHandler}
        required

        />

        <FormControl fullWidth
        sx={{my:'1em'}}>
  <InputLabel id="select-organisation">Select an organisation</InputLabel>
  <Select
    labelId="select-organisation"
    id="select-organisation"
    value={formData.organisationToVarify}
    name="organisationToVarify"
    label="Select an organisation"
    onChange={dataChangeHandler}
    required
  >
    <MenuItem value='alkdjfie'>Hello World</MenuItem>
    <MenuItem value='lsjdkfie'>Kaise ho</MenuItem>
    <MenuItem value='lksfie'>HEEE</MenuItem>
    </Select>
        </FormControl>
        <Button variant="contained" type="submit">Submit</Button>
      </form>
       

    </Box>

  </Modal>
  )
}

export default ArticleForm