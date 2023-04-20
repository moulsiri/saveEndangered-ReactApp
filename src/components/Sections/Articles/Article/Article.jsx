import {useEffect} from 'react'
import SectionHero from '../../../utils/SectionHero';
import SectionFooter from '../../../utils/SectionFooter'
import PreviewImg from './PreviewImg';


import Typography from '@mui/material/Typography';
import ImageGallery from '../../../utils/ImageGallery';


import { useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1527161153332-99adcc6f2966',
    title: 'Elephant',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1463852247062-1bbca38f7805?ixlib=rb-4.0.3',
    title: 'Chimpanzee',
  },
  {
    img: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3',
    title: 'Panda',
  },
  {
    img: 'https://images.unsplash.com/photo-1586943353950-95bdbe3207a1?ixlib=rb-4.0.3',
    title: 'Zebra',
    cols: 2,
  },
  {
      img: 'https://images.unsplash.com/photo-1583499871880-de841d1ace2a?ixlib=rb-4.0.3',
      title: 'Lion',
    },
    {
      img: 'https://images.unsplash.com/photo-1541708848705-cec66ea1efc9?ixlib=rb-4.0.3',
      title: 'Rhino',
      cols: 3,
    },

];
const Article = () => {


  let {id,i}=useParams()
  const {articleList}=useSelector((s)=>s.articles);
  let content=[...articleList[i].content];
  content.shift()
  console.log(content)
  const data=articleList[i]

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);


  return (
    <>
    <SectionHero>
      <PreviewImg img={data.previewImg.url} heading={data.heading} ></PreviewImg>
    </SectionHero>
    <section className="content">
    <Typography variant="subtitle1" gutterBottom style={
      {margin:'0 auto',
      marginTop:'5vmin',
      color:"#634723" ,
      width:'80%'}}>
          {
        content.map((elm,i)=><>{elm.children.map((e,i)=>e.text)} <br /><br /> </>)
      }
    
         </Typography>
      
         
    </section>
    <SectionFooter>
    <ImageGallery data={itemData}></ImageGallery>
    </SectionFooter>
    </>
  )
}

export default Article