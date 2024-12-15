import React from 'react'
import TopSlider from './components/home/topSlider/TopSlider'
import Header from './components/Header'
import DigitalPlatform from './components/home/digitalplatform/DigitalPlatform'
import StatisticsSection from './components/home/statisticsSection/StatisticsSection'
import Benefits from './components/home/benifits/Benifits'
import Slider2 from './components/home/slider2/Slider2'
import CTASec from './components/home/cta/CtaSec'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='text-red-800'>
      <Header/>
      <TopSlider/>
      <DigitalPlatform/>
      <StatisticsSection/>
      <Benefits/>
      <Slider2/>
      <CTASec/>
      <Footer/>
    </div>
  )
}

export default App