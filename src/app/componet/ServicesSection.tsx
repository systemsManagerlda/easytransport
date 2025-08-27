"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import AOS from "aos";

export default function ServicesSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    AOS.init({ duration: 800, once: true });
  }, []);

  if (!mounted) return null; // Garante renderização apenas no cliente

  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Our Solutions</span>
        <h2>Transport & Logistics Services</h2>
        <p>
          Comprehensive logistics solutions tailored to meet your business needs with efficiency and reliability
        </p>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="services-header">
          <div className="row">
            <div className="col-lg-9" data-aos="fade-right">
              <div className="services-intro">
                <div className="services-tag">Integrated Logistics</div>
                <h2>Streamline Your Supply Chain With Our Expert Logistics Solutions</h2>
                <p>
                  At EASY TRANSPORT & LOGÍSTICS, we provide end-to-end transportation 
                  and logistics services designed to optimize your supply chain, reduce 
                  costs, and ensure timely delivery of your goods across multiple regions.
                </p>
                <p>
                  With years of industry experience and a dedicated team of logistics 
                  professionals, we offer customized solutions that address the unique 
                  challenges of modern businesses. Our advanced tracking systems and 
                  network of partners enable us to deliver your shipments safely and 
                  efficiently, whether across town or across continents.
                </p>
              </div>
            </div>
            <div className="col-lg-3" data-aos="fade-left">
              <div className="services-stats">
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Deliveries Monthly</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">99.5%</span>
                  <span className="stat-label">On-Time Delivery Rate</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="service-card">
              <div className="service-card-inner">
                <div className="service-icon">
                  <i className="bi bi-truck"></i>
                </div>
                <h3>Transport & Logistics</h3>
                <p>
                  Comprehensive transportation solutions including road, rail and sea freight 
                  with complete logistics management for efficient supply chain operations.
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="service-card">
              <div className="service-card-inner">
                <div className="service-icon">
                  <i className="bi bi-box-seam"></i>
                </div>
                <h3>Door-to-Door Express</h3>
                <p>
                  Fast and reliable express delivery service for light cargo and packages 
                  with real-time tracking and guaranteed timeframes.
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="service-card">
              <div className="service-card-inner">
                <div className="service-icon">
                  <i className="bi bi-airplane"></i>
                </div>
                <h3>Air & Road Transport</h3>
                <p>
                  Combined air and road transportation solutions for time-sensitive shipments 
                  that require both speed and cost-efficiency.
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="service-card">
              <div className="service-card-inner">
                <div className="service-icon">
                  <i className="bi bi-container"></i>
                </div>
                <h3>Containerized Transport (FCL)</h3>
                <p>
                  Full Container Load services for large volume shipments with secure 
                  containerization and efficient customs clearance handling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}