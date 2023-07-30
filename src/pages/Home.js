import React from 'react'
import InfoSection from '../components/InfoSection'
import Hero from '../components/Hero'
import { SliderData } from '../data/SliderData';
import { InfoData } from '../data/InfoData';
const Home = () => {
  return (
    <div>
    <Hero slides={SliderData}/>
    <InfoSection {...InfoData}/>
    </div>
    
  )
}

export default Home
