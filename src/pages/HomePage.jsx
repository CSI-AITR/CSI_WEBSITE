import React from 'react'
import { HeroSection } from '../components/homePage/HeroSection'
import { WhatWeDo } from '../components/homePage/WhatWeDo'
import { TestimonialSection } from '../components/homePage/TestimonialSection'

export const HomePage = () => {
  return (
    <>
        <div className='relative -top-8 z-1'>
          <HeroSection/>
        </div>
        <WhatWeDo/>
        <TestimonialSection/>
    </>
  )
}
