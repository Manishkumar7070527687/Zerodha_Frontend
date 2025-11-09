import React from 'react'
import "../index.css"

function Hero() {
    return ( 
       <div className="container">
      <div className="row p-3 mt-4">
        <h1 className="fs-4 text-center pt-4 mt-4  ">
           Charges
        </h1>
        <h5 className='text-muted text-center pb-5 mb-5'>List of all charges and taxes</h5>
      </div>

      <div className="row p-5  ">
        <div className="col-4">
            <img src="media/images/pricingEquity.svg" alt=" 0 rs img" style={{width:"70%"}} />
            <h2>Free equity delivery</h2>
            <p className='text-muted '>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4">
            <img src="media/images/intradayTrades.svg" alt=" 0 rs img" style={{width:"70%"}} />
            <h2>Intraday and F&O  trades</h2>
            <p className='text-muted '>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4">
            <img src="media/images/pricingEquity.svg" alt=" 0 rs img" style={{width:"70%"}} />
            <h2>Free Direct MF</h2>
            <p className='text-muted '>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        
        
      </div>
    </div>
     );
}

export default Hero;