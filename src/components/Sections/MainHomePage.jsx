import {useRef} from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

const MainHomePage = () => {
  const footer=useRef(null)

  return (
    <>
    <Nav fTracker={footer}></Nav>
    <Outlet></Outlet>
    <Footer fRef={footer}/>
    </>
  )
}

export default MainHomePage