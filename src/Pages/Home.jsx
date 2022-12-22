import React from 'react';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import SyncMain from '../Components/SyncSlider/SyncMain';
import MainTabSection from '../Components/Tabs/MainTabSection';



function Home() {
  return (
    <div className='site-wrapper overflow-hidden'>
      <Navbar />
      <Banner/>
      <SyncMain/>
      <MainTabSection/>
      <Footer />
    </div>
  )
}

export default Home