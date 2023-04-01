import {useState} from 'react'
import {app,firebaseStorage} from '../../firebaseConfig'
import {ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage'

const Test = () => {
    const [file,setFile]=useState(null)
    const submitionHandler=(e)=>{
        e.preventDefault()
        const ImgRef=ref(firebaseStorage,file.name);
        const uploadTask=uploadBytesResumable(ImgRef,file);
        uploadTask.on('state_changed',(snap)=>{
            const progress = (snap.bytesTransferred / snap.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snap.state) {
                case 'paused':
                  console.log('Upload is paused');
                  break;
                case 'running':
                  console.log('Upload is running');
                  break;
              }

        },(error)=>{console.log(error)},
        ()=>{

            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
              });
        })
        

    }
  return (
    <div>
        <form onSubmit={submitionHandler}>
            <input type="file" name="png" onChange={(e)=>{setFile(e.target.files[0])}} />
            <button type="submit">click me!</button>
        </form>
    </div>
  )
}

export default Test