import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./landing_page/Home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import Signup from "./landing_page/signup/Signup";
import Login from "./landing_page/Login/login";
import ProductPage from "./landing_page/products/ProductPage";
import PricePage from "./landing_page/Pricing/PricingPage";
import SupportPage from "./landing_page/supports/SupportPAge";
import NotFound from "./NotFound";

import Navbar from "./Navbar";
import Footer from "./Footer";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route path="/product" element={<ProductPage />} />
      <Route path="/price" element={<PricePage />} />
      <Route path="/support" element={<SupportPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
