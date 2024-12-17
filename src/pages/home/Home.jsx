import React from 'react'
import Header from '../../components/Header'
import TopSlider from '../../components/home/topSlider/TopSlider'
import DigitalPlatform from '../../components/home/digitalplatform/DigitalPlatform'
import StatisticsSection from '../../components/home/statisticsSection/StatisticsSection'
import Benefits from '../../components/home/benifits/Benifits'
import Slider2 from '../../components/home/slider2/Slider2'
import CTASec from '../../components/home/cta/CtaSec'

const Home = () => {
  return (
    <div className='text-red-800'>
      <TopSlider/>
      <DigitalPlatform/>
      <StatisticsSection/>
      <Benefits/>
      <Slider2/>
      <CTASec/>
    </div>
  )
}

export default Home;