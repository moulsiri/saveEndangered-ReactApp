import {useEffect,useRef} from 'react'
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import './navbar.scss';
import {FiSearch} from 'react-icons/fi';
import {AiOutlineMenu} from 'react-icons/ai'
import { Button } from '@mui/material';

const Nav = () => {
  let nav=useRef(null)
  useEffect(()=>{
let root=document.documentElement;
window.addEventListener("scroll",function(e){
  if(root.scrollTop>nav.current.scrollHeight){
      nav.current.classList.add("onscroll-class");
  }else{
      nav.current.classList.remove("onscroll-class");
  }
})

  },[])
  const linkStyle={
    textDecoration:"none",
    color:"#D9AC72",
    textTransform:'uppercase',
    fontWeight:"600",
    fontSize:".8em",
    marginRight:'1em',
    letterSpacing:'.1em'
  }
  return (
    <nav ref={nav}>
        <div id="nlft">
        <Logo></Logo>
        <div id="nLinks">
            <NavLink className="n-link" style={({isActive})=>isActive?linkStyle:{...linkStyle,color:"#fff"}} to="/">Home</NavLink>
            <NavLink className="n-link" style={({isActive})=>isActive?linkStyle:{...linkStyle,color:"#fff"}} to="/articles">Articles</NavLink>
            <NavLink  className="n-link" style={({isActive})=>isActive?linkStyle:{...linkStyle,color:"#fff"}} to="/campaigns">Campaigns</NavLink>
            <NavLink  className="n-link" style={({isActive})=>isActive?linkStyle:{...linkStyle,color:"#fff"}} to="/help">Help us</NavLink>
            <NavLink  className="n-link" style={({isActive})=>isActive?linkStyle:{...linkStyle,color:"#fff"}} to="/about">About us</NavLink>
        </div>
        </div>
        <div id="nrt">
          <div id="nSrch">
           <input type="text" placeholder='search for endangered species' />
            <FiSearch style={{color:"#D9AC72"}}/>
          </div>
          <FiSearch style={{color:"#D9AC72"}} id="n-srch"/>
          <Button variant="contained" size="small" className="n-joinBtn">Join Us</Button>
          <AiOutlineMenu style={{color:"#D9AC72"}} id="n-menu"></AiOutlineMenu>

        </div>

    </nav>
  )
}

export default Nav