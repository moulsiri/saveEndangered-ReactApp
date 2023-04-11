import React from 'react';

const BackgroundBlur = ({amount}) => {
    const style={
        width: "100%",
    height: "100vh",
    position: 'fixed',
    backdropFilter: `blur(${amount || "10px"})`,
    zIndex: 2
    }
  return (
    <div style={style}>

    </div>
  )
}

export default BackgroundBlur