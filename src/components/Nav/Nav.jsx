import {useEffect,useRef,useState} from 'react'
import { Link, NavLink,useLocation } from 'react-router-dom';
import Logo from './Logo';
import './navbar.scss';
import {FiSearch} from 'react-icons/fi';
import {AiOutlineMenu} from 'react-icons/ai'
import { Button } from '@mui/material';

const Nav = ({fTracker}) => {
  let nav=useRef(null)
  const location=useLocation();
  // Get the height of the footer
const footerHeight = fTracker.current && fTracker.current.offsetHeight;



  useEffect(()=>{
    
   let root=document.documentElement;
     window.addEventListener("scroll",function(e){
  if(root.scrollTop>nav.current.scrollHeight){
    if(window.location.pathname==='/'){
      nav.current.classList.add("onscroll-class");

    }else{
      nav.current.classList.add("other-scroll-class");
    }
  }else{
      nav.current.classList.remove("other-scroll-class");
      nav.current.classList.remove("onscroll-class");

  }
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Get the height of the viewport
    const viewportHeight = window.innerHeight;
  
    // Calculate the position of the footer relative to the top of the document
    const footerPosition = fTracker.current.offsetTop + footerHeight;
      // Check if the footer is within the viewport
  if (scrollPosition + viewportHeight >= footerPosition) {
    // The footer has arrived on scroll
    nav.current.classList.remove("other-scroll-class");
    nav.current.classList.add("onscroll-class");
    console.log(nav.current.classList)


  }




})




  },[location.pathname])
  // const linkStyle={
  //   textDecoration:"none",
  //   color:"#D9AC72",
  //   textTransform:'uppercase',
  //   fontWeight:"600",
  //   fontSize:".8em",
  //   marginRight:'1em',
  //   letterSpacing:'.1em'
  // }
  return (
    <nav ref={nav}>
        <div id="nlft">
        <Logo></Logo>
        <div id="nLinks">
            <NavLink className={({isActive})=>isActive?"n-link nav-activeLink":"n-link"} to="/">Home</NavLink>
            <NavLink className={({isActive})=>isActive?"n-link nav-activeLink":"n-link"} to="/articles">Articles</NavLink>
            <NavLink className={({isActive})=>isActive?"n-link nav-activeLink":"n-link"} to="/campaigns">Campaigns</NavLink>
            <NavLink className={({isActive})=>isActive?"n-link nav-activeLink":"n-link"} to="/help">Help us</NavLink>
            <NavLink className={({isActive})=>isActive?"n-link nav-activeLink":"n-link"} to="/about">About us</NavLink>
        </div>
        </div>
        <div id="nrt">
          <div id="nSrch">
           <input type="text" placeholder='search for endangered species' />
            <FiSearch style={{color:"#D9AC72"}}/>
          </div>
          <FiSearch style={{color:"#D9AC72"}} id="n-srch"/>
          <Link to="/auth" className='link-element'>
          <Button variant="contained" size="small" className="n-joinBtn">Join Us</Button>
          </Link>
          <AiOutlineMenu style={{color:"#D9AC72"}} id="n-menu"></AiOutlineMenu>

        </div>

    </nav>
  )
}

export default Nav

 