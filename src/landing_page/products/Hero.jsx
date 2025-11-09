import React from 'react'
import "../index.css"

function Hero() {
    return ( 
       <div className="container border-bottom pb-5">
      <div className="row  p-4   text-center " >
        <h1 className="fs-3 text-center pt-4 mt-4   ">
          Zerodha Products
        </h1>
        <h5 className='text-muted p-3'>Sleek, modern, and intuitive trading platforms</h5>
        <p>Check out our <a href="#" style={{textDecoration:"none"}}> investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
      </div>
    </div>
     );
}

export default Hero;