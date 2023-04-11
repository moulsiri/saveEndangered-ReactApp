import React from 'react'
import SectionHero from '../../../utils/SectionHero';
import SectionFooter from '../../../utils/SectionFooter'
import PreviewImg from './PreviewImg';


import Typography from '@mui/material/Typography';
import ImageGallery from '../../../utils/ImageGallery';


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
  return (
    <>
    <SectionHero>
      <PreviewImg></PreviewImg>
    </SectionHero>
    <section className="content">
         <Typography variant="subtitle1" gutterBottom style={
      {margin:'0 auto',
      marginTop:'5vmin',
      color:"#634723" ,
      width:'80%'}}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex ea voluptate architecto! Officiis velit exercitationem nesciunt voluptates quia blanditiis magni placeat maxime totam, autem explicabo, facere voluptas alias odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos veritatis maxime officiis non error inventore eos similique. Inventore ipsam error corporis pariatur! Quibusdam porro labore assumenda quas ratione, et nobis?
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex ea voluptate architecto! Officiis velit exercitationem nesciunt voluptates quia blanditiis magni placeat maxime totam, autem explicabo, facere voluptas alias odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos veritatis maxime officiis non error inventore eos similique. Inventore ipsam error corporis pariatur! Quibusdam porro labore assumenda quas ratione, et nobis?
         <br /><br />
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem, consectetur provident deleniti quas molestiae ut autem eius magnam, quasi tempore adipisci doloremque odio quod aut similique itaque commodi laboriosam?Lorem ipsum dolor sit amet consectetur adipisicing elit. At minus beatae ab, mollitia, fuga corporis quibusdam eligendi cumque, sint odit accusamus! Quia aperiam similique iusto ea impedit voluptatum numquam. Eaque Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore maxime atque quibusdam quam corporis repudiandae? Dolor repellendus nulla autem. Delectus at, modi dolorum facere magni totam nemo? Labore, quidem soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem labore et ratione odit blanditiis error nam, voluptates quos, ipsam sed quasi delectus minima deleniti soluta quas, distinctio neque? Blanditiis, debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis necessitatibus doloremque, incidunt obcaecati veniam ipsum accusantium repudiandae, voluptates ratione sapiente ex, ut explicabo perferendis commodi? Incidunt delectus provident accusamus.
         <br /><br />
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem, consectetur provident deleniti quas molestiae ut autem eius magnam, quasi tempore adipisci doloremque odio quod aut similique itaque commodi laboriosam?Lorem ipsum dolor sit amet consectetur adipisicing elit. At minus beatae ab, mollitia, fuga corporis quibusdam eligendi cumque, sint odit accusamus! Quia aperiam similique iusto ea impedit voluptatum numquam. Eaque Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore maxime atque quibusdam quam corporis repudiandae? Dolor repellendus nulla autem. Delectus at, modi dolorum facere magni totam nemo? Labore, quidem soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem labore et ratione odit blanditiis error nam, voluptates quos, ipsam sed quasi delectus minima deleniti soluta quas, distinctio neque? Blanditiis, debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis necessitatibus doloremque, incidunt obcaecati veniam ipsum accusantium repudiandae, voluptates ratione sapiente ex, ut explicabo perferendis commodi? Incidunt delectus provident accusamus.
         </Typography>
    </section>
    <SectionFooter>
    <ImageGallery data={itemData}></ImageGallery>
    </SectionFooter>
    </>
  )
}

export default Article