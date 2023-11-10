import React from 'react'
import AboutBaner from '../components/AboutBanner/AboutBaner'
import AboutUsSelect from '../components/AboutBanner/AboutUsSelect'
import Teams from '../components/AboutBanner/Teams'
import Testimonial from '../components/AboutBanner/Testimonial'

const About = () => {
  return (
    <div className='px-5'>
        <AboutBaner />
        <AboutUsSelect />
        <Teams />
        <Testimonial />
    </div>
  )
}

export default About