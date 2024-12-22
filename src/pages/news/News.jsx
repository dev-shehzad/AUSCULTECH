import React from 'react'
import Hero from '../../components/Hero'
import NewsSection from '../../components/newses/Newses'
import CTASec from '../../components/home/cta/CtaSec'

const News = () => {
  return (
    <div>
         <Hero
                        title="News"
                        backgroundImage="/news/bg.png" // Replace with your actual image path
                      />
                      <NewsSection/>
                      <CTASec/>
    </div>
  )
}

export default News