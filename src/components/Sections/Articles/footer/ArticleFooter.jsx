import React from 'react'
import './style.scss';

import SectionFooter from '../../../utils/SectionFooter';
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
const ArticleFooter = () => {
  return (
    <SectionFooter>
        <ImageGallery data={itemData}></ImageGallery>
    </SectionFooter>
  )
}

export default ArticleFooter