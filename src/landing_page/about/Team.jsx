import React from 'react'
import "../index.css"

function Team() {
    return ( 
        <div className="container">
            <div className="row p-3 mb-4">
                <div className="col text-center">
                    <h1>People</h1>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-6 text-center pb-5 text-muted">
                    <img src="media/images/nithinKamath.jpg" alt="Nitin co img" className='pt-4 pb-3 ' style={{borderRadius:"100%",width:"50%"}}/>
                    <h5>Nitin Kamath</h5>
                    <p className='fs-6' >Founder, CEO</p>
                </div>
                <div className="col-6 pt-5" style={{fontSize:"17px"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the <br /> hurdles he faced during his decade long stint as a trader. Today,<br /> Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee <br /> (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect On <a href="#" style={{textDecoration:"none"}}> HomePage</a> / <a href="#" style={{textDecoration:"none"}}>Trading QnA</a>  / <a href="#" style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;