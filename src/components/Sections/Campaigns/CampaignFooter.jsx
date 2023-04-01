import React from 'react'
import SectionFooter from '../../utils/SectionFooter'
import ImageGallery from '../../utils/ImageGallery'



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
const CampaignFooter = () => {
  return (
    <SectionFooter>
        <ImageGallery data={itemData}></ImageGallery>
    </SectionFooter>
  )
}

export default CampaignFooter