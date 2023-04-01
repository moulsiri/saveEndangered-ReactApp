import {useState,useEffect,forwardRef} from 'react'

//redux states
import { useSelector,useDispatch } from 'react-redux';
import {registerNormalUser,loginNormalUser,clearErrorAsync} from '../../features/asyncActions/asyncNormalUser'

//material ui
import CircularProgress from '@mui/material/CircularProgress';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {Box, Button, IconButton, InputAdornment, Paper, TextField, Typography } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import LoginIcon from '@mui/icons-material/Login';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert=forwardRef(function Alert(props,ref){
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props}></MuiAlert>
})


const RegisterForm = ({userLogin,setUserLogin}) => {
  const {loading,error} =useSelector((store)=>store.normalUser);
  const dispatch=useDispatch();


  const [openAlert,setOpenAlert]=useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
      })

  
  useEffect(()=>{
    if(error){
      setOpenAlert(true)
      dispatch(clearErrorAsync())
    }
  })
  useEffect(()=>{
    //empty the fields when tab is changed to login or signup
    setFormData({
          name:"",
          email:"",
          password:"",
          username:""
    })
  },[userLogin])

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleAlertClose=(event,reason)=>{
    if(reason==='clickaway'){
      return;
    }

    setOpenAlert(false)

  }

  const formSubmitionHandler=(e)=>{
    e.preventDefault();
    if(userLogin){
      dispatch(loginNormalUser(formData));
    }else{
      dispatch(registerNormalUser(formData,setOpenAlert))
    }
  }
  const getFieldsData=(e)=>{setFormData({...formData,[e.target.name]:e.target.value})}
   
  return (
    <Box
    sx={{
        my:1
    }}>
      
     <Box
        sx={{
            width:"60%"
        }}>
          <Typography variant="h3" component="h1" gutterBottom style={{fontFamily:'Azonix'}}>
          {userLogin?"Welcome!":"Be a member"}
         </Typography>
    <Typography variant="blockquote"
    style={{
    fontStyle: 'italic',
    }}
    color="secondary" >
      {userLogin
      ?" We're excited to have you login and join us "
      :" of save endangered community and participate in various drives to save the species "}
  
   </Typography>  
     </Box>
    
   <Paper
   elevation={0}
   sx={{
    width:"50%",
    my:2
   }}
   >
 <form
 onSubmit={formSubmitionHandler}
 >
  {userLogin
  ? "":<TextField 
  id="user-name" 
  sx={{my:2}}
  label="Enter your name" 
  variant="outlined"
  fullWidth
  value={formData.name}
  name="name"
  onChange={getFieldsData}
  required
   />}
  <TextField 
    id="user-email" 
    sx={{my:2}}
    type="email"
    required
    label="Enter your email" 
    variant="outlined"
    fullWidth
    value={formData.email}
    name="email"
    onChange={getFieldsData}
  />



  <TextField
  label={userLogin?"Enter your password":"Create your password"}
  id="user-password" 
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
  />

 <Button 
 variant="contained"
 sx={{my:2,
width:"100%"}}
 type="submit"
 endIcon={loading?(<CircularProgress  color='white' size={20}/>):(userLogin?<LoginIcon/>:<PersonAddIcon/>)}
 >{userLogin?"Let's Go":"Create you account"}</Button>

 <Button 
 variant="text"
 sx={{my:2,
width:"100%"}}
 endIcon={<GoogleIcon />}
 >{`${userLogin?"Login":"SignUp"} with Google`}</Button>
 </form>

   </Paper>
    <Snackbar open={openAlert} autoHideDuration={2000} onClose={handleAlertClose}>
      <Alert onClose={handleAlertClose} severity="error" sx={{width:'100%'}}>{error}</Alert>
    </Snackbar>
    </Box>
  )
}

export default RegisterForm