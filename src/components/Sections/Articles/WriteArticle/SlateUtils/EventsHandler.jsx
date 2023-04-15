import { CustomEditor } from './CustomFunctions';
import { Transforms,Editor } from 'slate';

export const KeyDownHandler=(event,editor)=>{
   if(event.key==="Enter"){
    Transforms.setNodes(
      editor,
      { type:'paragraph' },
      { match: n => Editor.isBlock(editor, n) }
    )
   }
    if (!event.ctrlKey) {
      return
    }
    switch (event.key) {
      case 'b': {
        event.preventDefault()
        CustomEditor.toggleBoldMark(editor)
        break
      }
    }

  }


