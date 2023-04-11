import React from 'react';
import css from './Elements.module.scss';

const WHeading = ({attributes,children}) => {
  return (
    <h1 
    className={css.headingElm}
    {...attributes}>
        <span className={css.defaultValue}>{children[0].props.text.text?"":"Title"}</span>
        {
            children
        }
    </h1>
  )
}

export default WHeading