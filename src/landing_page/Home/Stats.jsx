import React from "react";
import "../index.css"

function Stats() {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-6">
          <h1> Trust with confidence</h1>
          <h2 className="mt-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h2 className="mt-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like
          </p>
          <h2 className="mt-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="mt-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money
          </p>
        </div>
        <div className="col-6 text-center">
          <img
            src="media/images/ecosystem.png"
            alt="ecosystem img"
            style={{ width: "90%" }}
          />
          <div>
            <a href="#" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products <i class="fa-solid fa-arrow-right"></i>
            </a>

            <a href="#" className="mx-5" style={{ textDecoration: "none" }}>
              Try kite Demo <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

    <div className="text-center mt-5">
       <img src="media/images/pressLogos.png" alt="press logo " style={{width:"60%"}}   />
    </div>
    </div>
  );
}

export default Stats;
