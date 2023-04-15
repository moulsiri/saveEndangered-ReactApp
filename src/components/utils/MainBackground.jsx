import {useEffect, useState} from 'react'

import bg from '../../assets/images/mainBg.png'
import css from './utils.module.scss';

const MainBackground = () => {
  const [imgLoad,setImgLoad]=useState(true)


  return (
    <div className={css.mainBg}>
           <img 
           className={`smooth-image image-${
            imgLoad ? 'visible' :  'hidden'}`}
            onLoad={()=>setImgLoad(true)}
           src={bg} alt="" />
    </div>
  )
}

export default MainBackground