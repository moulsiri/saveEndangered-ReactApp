import {useRef} from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

const Routes = ({children}) => {
  const location=useLocation();
  const footer=useRef(null)
    const hideElements=location.pathname==='/auth'
  return (
    <>
    {!hideElements && <Nav fTracker={footer}></Nav>}
    {children}
    {!hideElements && <Footer fRef={footer}/>}
    </>
  )
}

export default Routes