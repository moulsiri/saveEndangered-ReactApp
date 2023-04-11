import React from 'react'

import { Link, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const BackButton = ({style}) => {
  const navigate=useNavigate()

  return (
    <IconButton sx={style}
      onClick={()=>{navigate(-1)}}
      color="white">
        <KeyboardBackspaceIcon/>
      </IconButton>
  )
}

export default BackButton