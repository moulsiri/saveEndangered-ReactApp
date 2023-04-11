import React from 'react';
import css from './Elements.module.scss';

const Paragraph = ({attributes,children}) => {
  return (
    <p 
    className={css.paraElm}
    {...attributes}>
        <span className={css.defaultValue}>{children[0].props.text.text?"":"Start Writing from here"}</span>
        {
            children
        }
    </p>
  )
}

export default Paragraph