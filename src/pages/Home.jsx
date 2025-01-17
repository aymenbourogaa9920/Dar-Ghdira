import React from 'react'
import SpecialSection from '../components/SpecialSection'
import Testimonials from '../components/Testimonials'
import PricingCards from '../components/PricingCards'
import EventFeatures from '../components/Features'
import UpcomingEvents from '../components/UpcomingEvents'
import ExperienceSelector from '../components/ExperienceSelector'
import Landing from './Landing'

export default function Home() {
  return (
    <>
        <Landing/>
    <SpecialSection />
    {/* <Testimonials />
    <PricingCards />
    <EventFeatures />
    <UpcomingEvents />
    <ExperienceSelector /> */}
    </>
  )
}
