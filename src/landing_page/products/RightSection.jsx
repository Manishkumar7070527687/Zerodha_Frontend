import React from "react";
import "../index.css"

function RightSection({
  imageUrl,
  ProductName,
  ProductDescription,
  learnMore,
}) {
  return (
    <div className="container ps -4">
      <div className="row pt-5 mt-2 " style={{display:"flex", alignItems:"center"}}>
        <div className="col-6 ps-5 mt-5  ">
          <h4>{ProductName}</h4>
          <p className="mt-4 ">{ProductDescription}</p>
          <div className="mb-4">
            <a href={learnMore} style={{ textDecoration: "none" }}>
              learn more <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div></div>
        </div>
        <div className="col-6">
          <img src={imageUrl} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
