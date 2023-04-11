import {useCallback, useState,useMemo} from 'react';
import {createEditor,Editor,Transforms,Text} from 'slate';
import {Slate,Editable,withReact} from 'slate-react';

import {Leaf} from './SlateUtils/RenderElements';
import { KeyDownHandler } from './SlateUtils/EventsHandler';

/**
 * Elements
 */
import WHeading from './Elements/WHeading';
import Paragraph from './Elements/Paragraph';
import css from './writeArticle.module.scss';



const TextEditor = ({setValue}) => {
  const [editor]=useState(()=>withReact(createEditor()));
  const initialValue=[
      {
        children:[
          {
            text:'',
            type:'heading'
          }
        ],
      },
      {
        children:[
          {
            text:'',
            type:'paragraph'
          }
        ],
      }
    ]
  const onChangeHandler=(value)=>{
      const isAstChange=editor.operations.some(
        op=>'set_selection'!==op.type
      )
  
      if(isAstChange){
        setValue(value);
      }
  
  
    }

  const renderElement=useCallback(props=>{
    switch (props.element.children[0].type){
      case 'heading':
        return <WHeading {...props}/>
      case 'paragraph':
        return <Paragraph {...props}/>
      default:
        return <Paragraph {...props}/>
    }
  },[])
  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />
  }, [])

  return (
    <Slate 
    editor={editor} 
    value={initialValue}
    onChange={onChangeHandler}
    >
      <Editable
      renderElement={renderElement}
      className={css.editor}
      onKeyDown={(e)=>KeyDownHandler(e,editor)}
      renderLeaf={renderLeaf}
      />

    </Slate>
  )
}

export default TextEditor