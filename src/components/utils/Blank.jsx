import React from 'react'

const Blank = ({position,content,children}) => {
  return (
    <div className="blank">
        <div className={`ovly ${position}`}>
          {
            (content)?children:" "
          }
        </div>
    </div>
  )
}

export default Blank