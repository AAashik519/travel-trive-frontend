import React from 'react'
import Banner from '../components/Banner/Banner'
import Features from '../components/Features/Features'
import WhyChooses from '../components/WhyChooses/WhyChooses'
import Countries from '../components/Countries/Countries'

const Home = () => {
  return (
    <div>
        <Banner />
        <Features />
        <Countries />
        <WhyChooses />
    </div>
  )
}

export default Home