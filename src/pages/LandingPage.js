import React from 'react'

import Header from '../components/Header/Header';
import Spotlight from '../components/Spotlight/Spotlight';
import NewTabs from '../components/NewTabs/NewTabs';
import Helps from '../components/Helps/Helps';
import Startup from '../components/Startups/Startup';
import Platforms from '../components/Platforms/Platforms';
import Price from '../components/Price/Price';
import Register from '../components/Register/Register';
import Footer from '../components/Footer/Footer';


function LandingPage() {
  return (
    <>
        <Header />
        <Spotlight />
        <NewTabs />
        <Helps />
        <Startup />
        <Platforms />
        <Price />
        <Register />
        <Footer />
    </> 
  );
}

export default LandingPage;
