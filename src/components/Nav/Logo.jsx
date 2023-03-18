import React from 'react'

const Logo = ({color}) => {
  let style={
  color
  }
  return (
    <div className="logo" >
        <h3 style={style}>SAVE</h3>
        <h5>the endangered</h5>
    </div>
  )
}

export default Logo