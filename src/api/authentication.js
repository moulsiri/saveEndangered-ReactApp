
import axios from 'axios';

//organisation
export const registerOrg=(data)=>axios.post('/api/v1/organisations/register',data);
export const loginOrg=(data)=>axios.post('/api/v1/organisations/login',data);
export const loadOrg=()=>axios.get('/api/v1/organisations/org/details');
export const logoutOrg=()=>axios.get('/api/v1/user/logout')

//normal user

export const registerUser=(data)=>axios.post('/api/v1/user/register',data);
export const loginUser=(data)=>axios.post('/api/v1/user/login',data);
export const loadUser=()=>axios.get("/api/v1/user/details");
export const logoutUser=()=>axios.get('/api/v1/user/logout')
