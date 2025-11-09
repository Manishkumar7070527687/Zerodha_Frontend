import React from 'react'
import "../index.css"

function BrokerAge() {
    return ( 
        <div className="container">
            <div className="row border-top">
                <div className="col-9 text-center mt-4 mb-4 p-4">
                    <h5  style={{color:"blue"}}>Brokerage calculator</h5>
                    <ul className=' broker-list mt-4  p-2 text-muted'  style={{textAlign:"left"}}>
                        <li>Call & Trade and RMS auto-squaredoff: Additional charges of <i class="fa-solid fa-indian-rupee-sign"></i>50 + GST per order.</li>
                        <li>Digital contract notes will be send via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged <i class="fa-solid fa-indian-rupee-sign"></i>20 per contract note. Courier charges apply</li>
                        <li>
                        For NRI account (non-PIS), 0.5% or <i class="fa-solid fa-indian-rupee-sign"></i>100 per excuted order for equity (whichever is lower).
                        </li>
                        <li>
                        For NRI account (PIS), 0.5% or <i class="fa-solid fa-indian-rupee-sign"></i>200 per excuted order for equity (whichever is lower).
                        </li>
                        <li>If the account is in debit balance, any order placed will be charged <i class="fa-solid fa-indian-rupee-sign"></i> 40 per excuted order instead of <i class="fa-solid fa-indian-rupee-sign"></i>20 per excuted order </li>
                    </ul>
                </div>
                <div className="col-3 text-center  mt-4 mb-4"   > 
                    <h5  style={{color:"blue"}}>List of charges</h5>
                </div>
            </div>
        </div>
     );
}

export default BrokerAge;