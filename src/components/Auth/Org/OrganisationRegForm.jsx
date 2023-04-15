import {useEffect,useState} from 'react';

import css from '../Auth.module.scss';
import Alert from '../../utils/Alert';

//redux states
import { useSelector,useDispatch } from 'react-redux';
import {asyncLogin,asyncRegisterUser,clearErrorAsync} from '../../../features/asyncActions/asyncNormalUser'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton  from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LoginIcon from '@mui/icons-material/Login';




const OrganisationRegForm = ({RegisterOrg}) => {

  const {loading,error}=useSelector((store)=>store.normalUser);
  const dispatch=useDispatch();

  const [formData,setFormData]=useState({
    name:"",
    about:"",
    saveUserName:"",
    email:"",
    phoneNo:'',
    websiteURL:"",
    password:""


  })
  const [showPassword, setShowPassword] = useState(false);
  const [openAlert,setOpenAlert]=useState(false)

  const getFieldsData=(e)=>{setFormData({...formData,[e.target.name]:e.target.value})}
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const formSubmitionHandler=(e)=>{
    e.preventDefault();
    if(RegisterOrg){
       dispatch(asyncLogin(formData,'org'))
    }else{
      dispatch(asyncRegisterUser(formData,'org'))
    }

  }


  useEffect(()=>{
    //empty the fields when tab is changed to login or signup
    setFormData({
      name:"",
      about:"",
      saveUserName:"",
      email:"",
      phoneNo:0,
      websiteURL:"",
      password:""
    })
  },[RegisterOrg])
  useEffect(()=>{
    if(error){
      setOpenAlert(true)
      dispatch(clearErrorAsync());
    }

  })


  return (
    <>
    <Box>
      <Typography variant="h5" component="h2" gutterBottom style={{fontFamily:'Azonix'}}>
      {RegisterOrg?"Login":"Register"}
    </Typography>
    <Typography variant="blockquote" style={{
    fontStyle: 'italic',
    marginBottom:'1em'
    }} color="secondary" >Your organisation to connect with vast community of peoples</Typography>
    <div className={css.orgFormBox}>
      <form onSubmit={formSubmitionHandler}>
        {
          !RegisterOrg
          ? 
          <>
          <TextField
          id="org-name"
          label="Enter your organisation name"
          helperText="enter your organisation name"
          variant='outlined'
          value={formData.name}
          name="name"
          onChange={getFieldsData}
          required
          fullWidth
          margin="normal"
          
          />
        <TextField
          id="org-description"
          label="Briefly describe the organisation"
          multiline
          variant='outlined'
          value={formData.about}
          name="about"
          onChange={getFieldsData}
          required
          fullWidth
          rows={4}
          margin="normal"
          />
         
          <TextField
          id="org-email"
          label="email of the organisation"
          variant='outlined'
          value={formData.email}
          name="email"
          onChange={getFieldsData}
          required
          fullWidth
          rows={4}
          margin="normal"
          />
            <TextField
          id="org-phoneNo"
          label="organisation's phone no."
          variant='outlined'
          value={formData.phoneNo}
          name="phoneNo"
          onChange={getFieldsData}
          required
          fullWidth
          rows={4}
          margin="normal"
          />
              <TextField
          id="org-websiteURL"
          label="organisation's website url"
          variant='outlined'
          value={formData.websiteURL}
          name="websiteURL"
          onChange={getFieldsData}
          required
          fullWidth
          rows={4}
          margin="normal"
          />


          </>
          
          :""
        }
         <TextField
          id="org-username"
          label={!RegisterOrg?"Provide a username for your organisation":"Enter Organisation's username"}
          variant='outlined'
          value={formData.saveUserName}
          name="saveUserName"
          onChange={getFieldsData}
          required
          fullWidth
          rows={4}
          margin="normal"
          />
           <TextField
              label={!RegisterOrg?"Create your password":"Enter your password"}
    id="org-password" 
    fullWidth
    value={formData.password}
    name="password"
    type={showPassword ? 'text' : 'password'}
    onChange={getFieldsData}
    InputProps={{
      endAdornment: <InputAdornment position="start">  
      <IconButton
      aria-label="toggle password visibility"
      onClick={handleClickShowPassword}
      edge="end"
    >
      {showPassword ? <VisibilityOff /> : <Visibility />}
    </IconButton>
    </InputAdornment>,}}
    required
    margin="normal"
          />
       
        <Button 
        variant="contained"
        sx={{my:2,
        width:"100%"}}
        type="submit"
        endIcon={loading?(<CircularProgress  color='white' size={20}/>):(RegisterOrg?<LoginIcon/>:<GroupAddIcon/>)}
        >{RegisterOrg?"Let's Go":"Add your organisation"}</Button>

  

      </form>
      

    </div>
    </Box>
    <Alert 
    openAlert={openAlert} 
    setOpenAlert={setOpenAlert}
    mssg={error}
    severity="error" />
    
    </>
    
  )
}

export default OrganisationRegForm