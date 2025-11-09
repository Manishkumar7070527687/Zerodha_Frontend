import React from "react";
import "../index.css"

function Hero() {
  return (
    <section className="container-fluid bg-primary py-5  text-white supporthero">
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="text-white " style={{ marginLeft: "100px" }}>
          Supports
        </h4>
        <a href="#" className="text-white me-5">
          <p>Track Ticket</p>
        </a>
      </div>
      <div className="row mt-5 pt-5">
        <div className="col-6  ">
          <h5 style={{ marginLeft: "100px" }}>
            Search for an answeror browse help topics <br /> to create a new
            ticket
          </h5>
          <input
            type="text"
            placeholder="Eg: how do i active  F&O "
            className="py-3 px-3"
            style={{
              marginLeft: "100px",
              width: "55%",
              borderRadius: "10px",
              border:"none",
              marginBottom:"15px",
              marginTop:"15px"
            }}
          />
          <br />
          <a href="#" className="mt-4" style={{ marginLeft: "100px"}}>Track Account opening </a> &nbsp;
          <a href="#">Track Segment activation</a>&nbsp;
          <a href="#">Intraday</a><br />
          <a href="#" style={{ marginLeft: "100px"}} >margins</a> &nbsp; <a href="#">Kite user manual</a>
        </div>
        <div className="col-6">
          <h3>Featured</h3>
          <ol>
            <li><a href=""> Current tackeover and Delisting- january 2025 </a></li>
            <li className="mt-2"><a href="">Latest Intraday leverages - MIS & CO </a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
