import React from "react";
import "../index.css"

function Universe() {
  return (
    <div className="container mt-4">
      <div className="row text-center my-4">
        <h3 className="text-center text-muted m-3">The Zerodha Universe</h3>
        <p className="my-3 pb-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-2"></div>
        <div className="col-3 text-center">
          <a href="#">
            <img
              src="media/images/zerodhaFundhouse.png"
              alt=" zerodha house"
              style={{ width: "50%" }}
            />
          </a>
          <p className="mt-3 text-muted">
            our assetsmanagement that is <br /> creating simple and transparent
            index <br /> funds to help you save for your goals.
          </p>
        </div>
        <div className="col-3 text-center ">
          <a href="#">
            <img
              src="media/images/sensibullLogo.svg"
              alt=" sensbill  logo"
              style={{ width: "60%" }}
            />
          </a>
          <p className="mt-4 text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-3 text-center">
          <a href="#">
            <img
              src="media/images/smallcaseLogo.png"
              alt=" smallcaseLogoe"
              style={{ width: "50%" }}
            />
          </a>
          <p className="mt-4 text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row text-center my-4">
        <div className="col-2"></div>
        <div className="col-3 text-center">
          <a href="#">
            <img
              src="media/images/streakLogo.png"
              alt=" streakLogo"
              style={{ width: "50%" }}
            />
          </a>
          <p className="mt-3 text-muted">
            Systemetic trading platform <br /> that allows you to create and
            backfest <br /> strategies without coding
          </p>
        </div>
        <div className="col-3 text-center ">
          <a href="#">
            <img
              src="media/images/goldenpiLogo.png"
              alt=" goldenpiLogo"
              style={{ width: "50%" }}
            />
          </a>
          <p className="mt-4 text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-3 text-center">
          <a href="#">
            <img
              src="media/images/dittoLogo.png"
              alt=" dittoLogo"
              style={{ width: "40%" }}
            />
          </a>
          <p className="mt-4 text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
      </div>
      <div className="text-center " style={{margin:"30px", marginBottom:"50px", }}>
        <button className=" fs-4 text-white rounded " style={{backgroundColor:"#387ED1" ,border: "1px solid  #387ED1"  }}>
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
