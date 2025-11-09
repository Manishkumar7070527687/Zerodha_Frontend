import React from 'react';
import "../index.css"

function Hero() {
  return (
    <div className='container '>
      <div className="row text-center">
        <div className="col-1"></div>
        <img src="media/images/homeHero.png" alt="Hero Image " style={{width:"80%"}} className=' text-center' />
        <h1 className='mt-4 pt-4'>Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className='btn btn-primary p-2 fs-5 mb-5' style={{width:"30%",margin:"auto"}}> Sign up for free</button>
      </div>
    </div>
  );
}

export default Hero;
