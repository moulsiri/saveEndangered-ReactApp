import {useEffect,useState} from 'react';

import css from './Auth.module.scss';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

const OrganisationRegForm = () => {
  // const orgFields={my:'1em'}
  const [formData,setFormData]=useState({
    name:""
  })

  const getFieldsData=(e)=>{setFormData({...formData,[e.target.name]:e.target.value})}
  return (
    <>
    <Box>
      <Typography variant="h5" component="h2" gutterBottom style={{fontFamily:'Azonix'}}>
      Register
    </Typography>
    <Typography variant="blockquote" style={{
    fontStyle: 'italic',
    marginBottom:'1em'
    }} color="secondary" >Your organisation to connect with vast community of peoples</Typography>
    <div className={css.orgFormBox}>
      <form>
        <TextField
        id="org-name"
        label="Enter your organisation name"
        variant='outlined'
        value={formData.name}
        name="name"
        onChange={getFieldsData}
        required
        fullWidth
        margin="normal"
        
        />
        
        <FormLabel id="org-type" sx={{marginTop:'1em'}}  margin="normal">Type of Organisation</FormLabel>
        <RadioGroup
        defaultValue="Non Profit"
        name="radio-buttons-group"
        row
      >
        <FormControlLabel value="Non Profit" control={<Radio />} label="Non Profit" />
        <FormControlLabel value="government" control={<Radio />} label="Government" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
      <TextField
        id="org-description"
        label="Briefly describe the organisation"
        multiline
        variant='outlined'
        value={formData.name}
        name="name"
        onChange={getFieldsData}
        required
        fullWidth
        rows={4}
        margin="normal"
        
        />

  

      </form>
      

    </div>
    </Box>
    
    </>
    
  )
}

export default OrganisationRegForm