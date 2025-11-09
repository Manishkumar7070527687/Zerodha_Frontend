import React from "react";
import "../index.css"

function LeftSection({
  imageUrl,
  ProductName,
  ProductDescription,
  tryDemo,
  learnMore,
  googleplay,
  appStore,
}) {
  return (
    <div className="container ps -4">
      <div className="row p-5 mt-5 ">
        <div className="col-6">
          <img src={imageUrl} alt="" />
        </div>
        <div className="col-6 ps-5 mt-5  ">
          <h4>{ProductName}</h4>
          <p>{ProductDescription}</p>
          <div className="mb-4">
            <a href={tryDemo} className="pe-5" style={{ textDecoration: "none" }}>
              Try Demo <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              learn more <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div>
            <a href={googleplay}>
              
              <img
                src="media/images/googlePlayBadge.svg"
                alt="google play"
              /> 
            </a>
            <a href={appStore}   className="ps-4">
              <img src="media/images/appstoreBadge.svg" alt=" play store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
