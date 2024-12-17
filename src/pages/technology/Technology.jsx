import React from 'react'
import Hero from '../../components/Hero'
import StethTech from '../../components/technology/stethtech/StethTech'
import Digital1 from '../../components/technology/digital1/Digital1'
import AIAlgorithms from '../../components/technology/aialgorithims/AiAlgorithims'
import CTASec from '../../components/home/cta/CtaSec'

const Technology = () => {
  return (
    <div>
          <Hero
        title="TECHNOLOGY"
        subtitle="Optimizing clinical care through AI-enabled auscultation."
        backgroundImage="/technology/banner.jpg" // Replace with your actual image path
      />
      <StethTech/>
      <Digital1/>
      <AIAlgorithms/>
      <CTASec/>
    </div>
  )
}

export default Technology