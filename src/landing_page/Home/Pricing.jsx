import React from 'react'
import "../index.css"

function Price() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <h2 className='fs-2'>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                     <a href="#" className="my-2" style={{ textDecoration: "none" }}>
               See Pricing <i class="fa-solid fa-arrow-right"></i>
            </a>
                </div>
                <div className="col-2 "></div>
                <div className="col-2 border text-center rounded p-3"><h1><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                    <p>Free equality delevery <br />and direct mutual funds </p>
                </div>
             
                 
                <div className="col-2 border text-center rounded p-3 "><h1><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                <p>Intraday and <br /> F&O</p></div>
                 
            </div>
        </div>
     );
}

export default Price;