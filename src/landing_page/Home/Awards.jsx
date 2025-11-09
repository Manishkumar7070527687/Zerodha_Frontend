import React from "react";
import "../index.css"

function Award() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="largestBroker image" />
        </div>
        <div className="col-6 p-5 mt-4">
          <h1>Largest Broker stock in India</h1>
          <p className="mb-4"> 
            +2 millions Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and Investing in:{" "}
          </p>
          <div className="row ">
            <div className="col-6 ">
              <ul>
                <li className="py-2">Future and Options</li>
                <li className="py-2">Commodative derivatives</li>
                <li className="py-2">Currency derivatives </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li className="py-2">Stocks & IPO's</li>
                <li className="py-2">Direct mutual funds</li>
                <li className="py-2">Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" alt="press logo " style={{width:"90%"}}  />
        </div>
      </div>
    </div>
  );
}

export default Award;
