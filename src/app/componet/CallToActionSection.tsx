"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import AOS from "aos";

export default function CallToActionSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <>
    <section id="call-to-action" className="call-to-action section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="cta-wrapper">
          <div className="cta-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>

          <div className="row g-0">
            <div className="col-lg-7">
              <div className="cta-content p-5" data-aos="fade-right" data-aos-delay="200">
                <span className="badge-custom" data-aos="zoom-in" data-aos-delay="300">Special Offer</span>
                <h2 className="mt-4 mb-4">Optimize Your Supply Chain With Our Logistics Solutions</h2>
                <p className="mb-4">Experience seamless transportation and logistics services designed to reduce costs, improve efficiency, and ensure timely delivery of your goods. Let us handle your logistics while you focus on growing your business.</p>

                <div className="row benefits-row mb-5">
                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                    <div className="benefit-item">
                      <div className="icon-box">
                        <i className="bi bi-truck"></i>
                      </div>
                      <div className="benefit-content">
                        <h5>Fast Delivery</h5>
                        <p>Express door-to-door service with guaranteed timeframes for urgent shipments.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                    <div className="benefit-item">
                      <div className="icon-box">
                        <i className="bi bi-shield-check"></i>
                      </div>
                      <div className="benefit-content">
                        <h5>Cargo Protection</h5>
                        <p>Comprehensive security measures and insurance options for your valuable shipments.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="action-buttons">
                  <a href="#contact" className="btn btn-primary" data-aos="fade-up" data-aos-delay="600">Get a Quote</a>
                  <a href="#services" className="btn btn-outline" data-aos="fade-up" data-aos-delay="700">Our Services</a>
                  <div className="guarantee-badge" data-aos="fade-up" data-aos-delay="800">
                    <i className="bi bi-patch-check-fill"></i>
                    <span>Satisfaction Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="cta-image-container" data-aos="zoom-in" data-aos-delay="300">
                <img src="assets/img/illustration/illustration-3.webp" alt="Logistics and transportation services" className="img-fluid main-image" />
                <div className="floating-element element-1">
                  <i className="bi bi-star-fill"></i>
                  <span>4.8 Rating</span>
                </div>
                <div className="floating-element element-2">
                  <i className="bi bi-geo-fill"></i>
                  <span>Global Coverage</span>
                </div>
                <div className="pattern-dots"></div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
    </>
  );
}