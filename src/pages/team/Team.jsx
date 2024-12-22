import React from 'react'
import Hero from '../../components/Hero'
import TeamTop from '../../components/team/teamtop/TeamTop'
import ExecutiveProfiles from '../../components/team/executive/Executive'

const Team = () => {
  return (
    <div>
         <Hero
                title="Team"
                subtitle="Optimizing clinical care through AI-enabled auscultation."
                backgroundImage="/Team/banner.png" // Replace with your actual image path
              />
              <TeamTop/>
              <ExecutiveProfiles/>
    </div>
  )
}

export default Team