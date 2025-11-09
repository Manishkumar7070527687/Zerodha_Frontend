import React from 'react'
import Award from './Awards';
import Hero from './Hero';
import Stats from './Stats';
import Price from './Pricing';
import Education from './Education';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import OpenAccount from '../../OpenAccount';
function HomePage() {
    return ( 
        <>
         
        <Hero/>
        <Award/>
        <Stats/>
        <Price/>
        <Education/>
        <OpenAccount/>
        


        </>
     );
}

export default HomePage;