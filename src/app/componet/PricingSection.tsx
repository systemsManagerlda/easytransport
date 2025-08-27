"use client";
import { useEffect } from "react";
import AOS from "aos";

export default function PricingSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <>
      <section id="pricing" className="pricing section">

        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <span className="description-title">Our Services</span>
          <h2>Service Plans</h2>
          <p>Flexible pricing options tailored to your transport and logistics needs.</p>
        </div>
        {/* End Section Title */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">

          <div className="row gy-4 justify-content-center">

            {/* Basic Plan */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="pricing-item">
                <div className="pricing-icon">
                  <i className="bi bi-star"></i>
                </div>
                <h3>Transport & Logistics</h3>
                <div className="price">
                  <span className="currency">R</span>50<span className="period">/shipment</span>
                </div>
                <p className="description">Comprehensive logistics solutions for all types of cargo.</p>
                <ul className="features-list">
                  <li>
                    <i className="bi bi-check2"></i>
                    Domestic & International Transport
                  </li>
                  <li>
                    <i className="bi bi-check2"></i>
                    Cargo Handling & Storage
                  </li>
                  <li>
                    <i className="bi bi-check2"></i>
                    Real-time Shipment Tracking
                  </li>
                </ul>
                <a href="#" className="btn-pricing">Request Service</a>
              </div>
            </div>
            {/* End Basic Plan */}

            {/* Professional Plan */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="pricing-item featured">
                <div className="pricing-badge">Recommended</div>
                <div className="pricing-icon">
                  <i className="bi bi-stars"></i>
                </div>
                <h3>Express Door-to-Door</h3>
                <div className="price">
                  <span className="currency">R</span>70<span className="period">/shipment</span>
                </div>
                <p className="description">Fast and secure delivery for light cargo directly to your door.</p>
                <ul className="features-list">
                  <li>
                    <i className="bi bi-check2"></i>
                    Quick Pickup & Delivery
                  </li>
                  <li>
                    <i className="bi bi-check2"></i>
                    Lightweight Cargo Handling
                  </li>
                  <li>
                    <i className="bi bi-check2"></i>
                    Guaranteed Timely Arrival
                  </li>
                </ul>
                <a href="#" className="btn-pricing">Request Service</a>
              </div>
            </div>
            {/* End Professional Plan */}

            {/* Ultimate Plan */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="pricing-item">
                <div className="pricing-icon">
                  <i className="bi bi-star-fill"></i>
                </div>
                <h3>Containerized & Air-Road Transport</h3>
                <div className="price">
                  <span className="currency">R</span>150<span className="period">/shipment</span>
                </div>
                <p className="description">Secure container shipping and combined air-road transport solutions.</p>
                <ul className="features-list">
                  <li>
                    <i className="bi bi-check2"></i>
                    Full Container Loads (FCL)
                  </li>
                  <li>
                    <i className="bi bi-check2"></i>
                    Efficient Air & Road Routes
                  </li>
                  <li>
                    <i className="bi bi-check2"></i>
                    Safe and Trackable Shipments
                  </li>
                </ul>
                <a href="#" className="btn-pricing">Request Service</a>
              </div>
            </div>
            {/* End Ultimate Plan */}

          </div>

        </div>

      </section>
    </>
  );
}
