"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import AOS from "aos";

export default function FeaturesSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <>
      <section id="features" className="features section">

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Our Advantages</span>
        <h2>Why Choose Us</h2>
        <p>Reliable logistics solutions with cutting-edge technology and exceptional service delivery</p>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="features-overview">
          <div className="main-heading" data-aos="fade-right" data-aos-delay="200">
            <h2>Integrated Logistics Framework</h2>
            <p>Our comprehensive logistics platform provides end-to-end visibility and control over your supply chain operations.</p>
            <p>Advanced tracking technology ensures real-time monitoring of shipments from origin to destination, giving you peace of mind.</p>
            <p>Customizable logistics solutions tailored to your specific industry requirements and business objectives.</p>
            <p>Scalable infrastructure designed to grow with your business, handling increased volumes without compromising service quality.</p>
            <div className="achievement-badges">
              <div className="achievement">
                <span className="achievement-icon">
                  <i className="bi bi-shield-check"></i>
                </span>
                <div className="achievement-info">
                  <span className="achievement-value">99.5%</span>
                  <span className="achievement-label">Delivery Accuracy</span>
                </div>
              </div>
              <div className="achievement">
                <span className="achievement-icon">
                  <i className="bi bi-clock-history"></i>
                </span>
                <div className="achievement-info">
                  <span className="achievement-value">24/7</span>
                  <span className="achievement-label">Tracking Support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="features-card-wrapper" data-aos="fade-left" data-aos-delay="300">
            <div className="features-row">
              <div className="feature-card feature-primary" data-aos="zoom-in" data-aos-delay="200">
                <div className="feature-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="feature-details">
                  <h3>Real-Time Tracking</h3>
                  <p>Monitor your shipments in real-time with our advanced GPS tracking technology.</p>
                  <div className="feature-status active">
                    <span className="status-indicator"></span>
                    <span className="status-text">Active</span>
                  </div>
                </div>
              </div>

              <div className="feature-card" data-aos="zoom-in" data-aos-delay="300">
                <div className="feature-icon">
                  <i className="bi bi-shield-lock"></i>
                </div>
                <div className="feature-details">
                  <h3>Cargo Security</h3>
                  <p>Advanced security protocols and insurance options to protect your valuable shipments.</p>
                  <div className="feature-status active">
                    <span className="status-indicator"></span>
                    <span className="status-text">Operational</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="features-row">
              <div className="feature-card" data-aos="zoom-in" data-aos-delay="400">
                <div className="feature-icon">
                  <i className="bi bi-speedometer2"></i>
                </div>
                <div className="feature-details">
                  <h3>Express Delivery</h3>
                  <p>Priority handling and expedited shipping options for time-sensitive deliveries.</p>
                  <div className="feature-status active">
                    <span className="status-indicator"></span>
                    <span className="status-text">Available</span>
                  </div>
                </div>
              </div>

              <div className="feature-card" data-aos="zoom-in" data-aos-delay="500">
                <div className="feature-icon">
                  <i className="bi bi-globe2"></i>
                </div>
                <div className="feature-details">
                  <h3>Global Network</h3>
                  <p>Extensive international partnerships enabling seamless cross-border logistics.</p>
                  <div className="feature-status active">
                    <span className="status-indicator"></span>
                    <span className="status-text">Worldwide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="additional-features" data-aos="fade-up" data-aos-delay="100">
          <div className="row gx-4 gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="additional-feature-card">
                <div className="icon-container">
                  <i className="bi bi-customizers"></i>
                </div>
                <h4>Customized Solutions</h4>
                <p>Tailored logistics strategies designed to meet your specific business requirements.</p>
                <div className="feature-tag active">
                  <i className="bi bi-check-circle"></i> Available
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="additional-feature-card">
                <div className="icon-container">
                  <i className="bi bi-file-earmark-text"></i>
                </div>
                <h4>Documentation Handling</h4>
                <p>Comprehensive management of all shipping documentation and customs clearance.</p>
                <div className="feature-tag active">
                  <i className="bi bi-check-circle"></i> Included
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="additional-feature-card">
                <div className="icon-container">
                  <i className="bi bi-currency-exchange"></i>
                </div>
                <h4>Cost Efficiency</h4>
                <p>Competitive pricing models and optimized routes to reduce your logistics expenses.</p>
                <div className="feature-tag active">
                  <i className="bi bi-check-circle"></i> Implemented
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    </>
  );
}