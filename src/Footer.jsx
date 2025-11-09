import React from "react";
import "./footer_navbar.css";
function Footer() {
  return (
    <footer>
      <div className="container-fluid border-top bg-light ">
        <div className="row anchor mt-4">
          <div className="col-1"></div>
          <div className="col-3 ">
            <img
              src="media/images/logo.svg"
              alt=""
              style={{ width: "50%" }}
              className=""
            />
            <p>
              © 2010 - 2025, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
            <div className=" border-bottom social-media  ">
              <i class="fa-brands fa-x-twitter"></i>
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin-in"></i>
            </div>
            <div className="social-media mt-4">
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-whatsapp"></i>
              <i class="fa-brands fa-telegram"></i>
            </div>
          </div>
          <div className="col-2 link ">
            <h5 style={{ fontWeight: 500 }}>Account</h5>
            <a href="#"> Open demat account</a>
            <a href="#">Minor demat account</a>
            <a href="#">NRI demat account</a>
            <a href="#">Commodity</a>
            <a href="#">Dematerialisation</a>
            <a href="#">Fund transfer</a>
            <a href="#">MTF</a>

            <a href="#">Referral program</a>
          </div>
          <div className="col-2">
            {" "}
            <h5 style={{ fontWeight: 500 }}>Supports</h5>
            <a href="#">Contact us</a>
            <a href="#">Support portal</a>
            <a href="#">How to file a complaint?</a>
            <a href="#">Status of your complaints</a>
            <a href="#">Bulletin</a>
            <a href="#">Circular</a>
            <a href="#">Z-Connect blog</a>
            <a href="#">Downloads</a>
          </div>
          <br />
          <div className="col-2">
            {" "}
            <h5 style={{ fontWeight: 500 }}>Company</h5>
            <a href="#">About</a>
            <a href="#">Philosophy</a>
            <a href="#">Press & media</a>
            <a href="#">Careers</a>
            <a href="#">Zerodha Cares (CSR)</a>
            <a href="#">Zerodha.tech</a>
            <a href="#">Open source</a>
          </div>

          <div className="col-2">
            {" "}
            <h5 style={{ fontWeight: 500 }}>Quick link's</h5>
            <a href="#">Upcoming IPOs</a>
            <a href="#">Brokerage charges</a>
            <a href="#">Market holidays</a>
            <a href="#">Economic calendar</a>
            <a href="#">Calculators</a>
            <a href="#">Markets</a>
            <a href="#">Sectors</a>
          </div>
        </div>
        {/* <div className="container mt-4">
          <div className="col-1"></div>
          <div
            className=" col-11mt-5 text-muted fs-15"
            style={{ fontSize: "13px" }}
          >
            <p>
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt.
              Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered
              Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars
              Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
              Bengaluru - 560078, Karnataka, India. For any complaints
              pertaining to securities broking please write to{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                complaints@zerodha.com
              </a>
              , for DP related to{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                dp@zerodha.com.
              </a>{" "}
              Please ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>
            <p>
              Procedure to file a complaint on{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                SEBI SCORES:
              </a>{" "}
              Register on SCORES portal. Mandatory details for filing complaints
              on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
              Effective Communication, Speedy redressal of the grievances
            </p>
            <a href="#" style={{ textDecoration: "none" }}>
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </a>
            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>
            <p>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p>
              India's largest broker based on networth as per NSE.{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                NSE broker factsheet{" "}
              </a>
            </p>
            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                {" "}
                create a ticket here
              </a>
            </p>
          </div>
        </div> */}
        <div className="footer-bottom-link">
          <a href="#" className="ml-4">
            NSE
          </a>
          <a href="#">BSE</a>
          <a href="#">MCX</a>
          <a href="#">Terms & condition</a>
          <a href="#">Policies & procedures</a>
          <a href="#">Privacy policy</a>
          <a href="#">Disclousre</a>
          <a href="#">For investor's attention</a>
          <a href="#">Investor charter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
