import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection.jsx'
import Categery from './Categery'
import LatestJobs from './LatestJobs'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <HeroSection/>
    <Categery/>
    <LatestJobs/>
    <Footer/>
    </div>
  )
}

export default Home
