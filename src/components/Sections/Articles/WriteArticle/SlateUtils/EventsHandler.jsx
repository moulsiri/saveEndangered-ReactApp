import { CustomEditor } from './CustomFunctions';

export const KeyDownHandler=(event,editor)=>{
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


