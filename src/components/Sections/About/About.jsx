import {useEffect} from 'react'

import css from './About.module.scss';
import SectionHero from '../../utils/SectionHero'
import SectionFooter from '../../utils/SectionFooter'
import ImageGallery from '../../utils/ImageGallery';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3',
    title: 'Elephant',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3',
    title: 'Chimpanzee',
  },
  {
    img: 'https://images.unsplash.com/photo-1548957175-84f0f9af659e?ixlib=rb-4.0.3',
    title: 'Panda',
  },
  {
    img: 'https://images.unsplash.com/photo-1484494343354-214137ec23b5?ixlib=rb-4.0.3',
    title: 'Zebra',
    cols: 2,
  },
  {
      img: 'https://images.unsplash.com/photo-1500293669-115211273e5c?ixlib=rb-4.0.3',
      title: 'Lion',
    },
    {
      img: 'https://images.unsplash.com/photo-1658606098793-325837be96f3?ixlib=rb-4.0.3',
      title: 'Rhino',
      cols: 3,
    },

];

const About = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <>
    <SectionHero>
      <div className={css.aboutImg}>
        <img 
        src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
        <Box className={css.aHcontent}>
           <Box className={css.aHtxt}>
           <Typography 
        style={{fontFamily:'Azonix',marginTop:'20vmin'}}
        variant="h5" 
        component="h1" 
        gutterBottom>
        The Save Endangered Campaigns
        </Typography>
         <Typography variant="caption" gutterBottom style={{marginTop:'5vmin',color:"#634723"}}>
         The disappearance of a species is not just a biological event. It is an impoverishment of the world's diversity, a diminution of its complexity, and a tragedy for those who understand and care about nature's richness and intricacy.
         </Typography>
      

        </Box>

          </Box>

      </div>

    </SectionHero>
    <section className='content'>
      <Box
      sx={{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        width:'80%',
        margin:'0 auto'
      }}>
      <Typography 
      variant="h5" 
      gutterBottom
      sx={{
        fontFamily:"Azonix",
        color:"#2c2c2c"}}>
        About us
      </Typography>
    <Typography variant="subtitle1" gutterBottom style={
      {margin:'0 auto',
      marginTop:'5vmin',
      color:"#634723" ,
      }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsum sapiente ab, quas dicta amet quidem adipisci omnis excepturi necessitatibus sunt aperiam officiis ut assumenda eos debitis atque maiores mollitia. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit officiis, nisi dolores reiciendis tenetur consequuntur unde laborum, aperiam commodi aut totam facere, quasi officia iusto harum delectus? Laborum, ratione iure! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nam officia praesentium dolorum quas a, ducimus facilis incidunt asperiores mollitia hic numquam quia reprehenderit ab itaque atque inventore aspernatur labore? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem rem officia praesentium ea accusamus suscipit labore error obcaecati eius, debitis libero deserunt omnis tempora corrupti corporis laboriosam voluptatibus ex inventore? 
        <br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, repellat dignissimos doloremque consequuntur sed totam accusantium obcaecati numquam odio dolores magni quaerat quod aspernatur nulla eaque dolore aliquam, suscipit veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatibus ipsam temporibus corrupti illum quae officia, enim architecto veniam quod sed dolores error consectetur, maiores molestias non id reprehenderit ipsum!
        <br /> <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia doloremque voluptatum natus. Nesciunt quo corporis minus dolore alias magni, nisi officia nulla tempora cum explicabo maxime neque commodi odit voluptas?
    
         </Typography>

      </Box>
      
    </section>
    <SectionFooter>
      <ImageGallery data={itemData}></ImageGallery>
    </SectionFooter>

    </>
  )
}

export default About