import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="media/images/kite.png"
        ProductName="Kite"
        ProductDescription="Our ultra-fast flagship trading platform with  streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googleplay=""
        appStore=""
      />
      <RightSection
        imageUrl="media/images/console.png"
        ProductName="Console"
        ProductDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />
      <LeftSection
        imageUrl="media/images/coin.png"
        ProductName="Coin"
        ProductDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googleplay=""
        appStore=""
      />
      <RightSection
        imageUrl="media/images/kiteconnect.png"
        ProductName="Kite connect API"
        ProductDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
      />
      <LeftSection
        imageUrl="media/images/varsity.png"
        ProductName="Varsity Mobile"
        ProductDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googleplay=""
        appStore=""
      />
      <p className="text-center fs-4 m-4">Want to know more about our technology stack? Check out the <a href="#" style={{textDecoration:"none"}}> Zerodha.tech blog</a>.</p>
      <Universe />
    </>
  );
}

export default ProductPage;
