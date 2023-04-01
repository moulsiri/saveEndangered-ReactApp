import React from 'react'
import SectionHero from '../../utils/SectionHero'
import CampaignsSearch from './CampaignsSearch'


var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
        imageUrl:"https://images.unsplash.com/photo-1606242403142-5593a46b5f13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
        imageUrl:"https://images.unsplash.com/photo-1606242403142-5593a46b5f13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
        imageUrl:"https://images.unsplash.com/photo-1606242403142-5593a46b5f13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
        imageUrl:"https://images.unsplash.com/photo-1606242403142-5593a46b5f13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
  ]

const CampaignsHero = () => {
 
  return (
    <SectionHero>
        <CampaignsSearch data={items}></CampaignsSearch>
    </SectionHero>
  )
}

export default CampaignsHero