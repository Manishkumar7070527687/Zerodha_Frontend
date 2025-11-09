import React from 'react'
import "../index.css"

function Education() {
    return (
       <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-6 ">
            <img src="media/images/education.svg" alt="varsity" style={{width:"75%"}} />
          </div>
          <div className="col-6">
            <h3 className='fs-2 mb-4 '>Free and open market education</h3>
            <p className='mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a href="#" className="" style={{ textDecoration: "none" }}>varsity <i class="fa-solid fa-arrow-right"></i> </a>

            <p className='my-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <a href="#" className="my-5" style={{ textDecoration: "none" }}>Trading Q&A <i class="fa-solid fa-arrow-right"></i> </a>
          </div>
        </div>
       </div>
      );
}

export default Education;