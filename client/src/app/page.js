import React from 'react'
import NavbarLightWithShadow from '../components/navbar/navbar';
import HeroSection from '../components/hero/hero';
import Footer from '../components/footer/footer';

const page = () => {
  return (
    <div>
      <NavbarLightWithShadow/>
      <HeroSection/>
      <Footer/>
    </div>
  )
}

export default page