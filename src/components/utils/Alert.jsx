import {forwardRef} from 'react'

import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';



const Alert=forwardRef(function Alert(props,ref){
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props}></MuiAlert>
  })
const AlertON = ({openAlert,mssg,severity,setOpenAlert}) => {
  // console.log(openAlert)
    const handleAlertClose=(event,reason)=>{
        if(reason==='clickaway'){
          return;
        }
        setOpenAlert(false)
      }
  return (
    <Snackbar open={openAlert} autoHideDuration={1000} onClose={handleAlertClose}>
    <Alert onClose={handleAlertClose} severity={severity} sx={{width:'100%'}}>{mssg}</Alert>
  </Snackbar>
  )
}

export default AlertON