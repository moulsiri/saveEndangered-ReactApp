import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({color}) => {
  let style={
  color
  }
  return (
    <Link to="/" className='link-element'>
    <div className="logo" >
        <h3 style={style}>SAVE</h3>
        <h5>the endangered</h5>
    </div>
    </Link>
    
  )
}

export default Logo