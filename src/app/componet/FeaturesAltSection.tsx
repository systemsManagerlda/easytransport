"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import AOS from "aos";

export default function FeaturesAltSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <>
      <section id="features-alt" className="features-alt section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row g-4">
          <div className="col-lg-4">
            <ul className="nav nav-tabs flex-column" role="tablist" data-aos="fade-right" data-aos-delay="200">
              <li className="nav-item">
                <a className="nav-link active" data-bs-toggle="tab" data-bs-target="#features-alt-tab-1" role="tab">
                  <div className="d-flex align-items-center">
                    <div className="icon-box">
                      <i className="bi bi-geo-alt"></i>
                    </div>
                    <div className="ms-3">
                      <h4>Real-Time Tracking</h4>
                      <p>Monitor shipments in real-time</p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-alt-tab-2" role="tab">
                  <div className="d-flex align-items-center">
                    <div className="icon-box">
                      <i className="bi bi-shield-check"></i>
                    </div>
                    <div className="ms-3">
                      <h4>Cargo Security</h4>
                      <p>Advanced protection for your goods</p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-alt-tab-3" role="tab">
                  <div className="d-flex align-items-center">
                    <div className="icon-box">
                      <i className="bi bi-speedometer2"></i>
                    </div>
                    <div className="ms-3">
                      <h4>Express Delivery</h4>
                      <p>Fast and reliable shipping</p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-alt-tab-4" role="tab">
                  <div className="d-flex align-items-center">
                    <div className="icon-box">
                      <i className="bi bi-globe2"></i>
                    </div>
                    <div className="ms-3">
                      <h4>Global Network</h4>
                      <p>Worldwide logistics coverage</p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-alt-tab-5" role="tab">
                  <div className="d-flex align-items-center">
                    <div className="icon-box">
                      <i className="bi bi-customizers"></i>
                    </div>
                    <div className="ms-3">
                      <h4>Custom Solutions</h4>
                      <p>Tailored to your needs</p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-8">
            <div className="tab-content" data-aos="fade-up" data-aos-delay="300">
              <div className="tab-pane fade active show" id="features-alt-tab-1" role="tabpanel">
                <div className="content-box">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <h3>Advanced Real-Time Tracking</h3>
                      <p>Our state-of-the-art tracking system provides complete visibility of your shipments from pickup to delivery. Know exactly where your cargo is at all times with our GPS-enabled monitoring.</p>
                      <p className="highlight">With 24/7 access to our tracking portal, you can monitor temperature-sensitive goods, receive alerts for delays, and provide accurate ETAs to your customers.</p>
                      <ul className="features-list">
                        <li>
                          <i className="bi bi-check2-circle"></i>
                          <span>Live GPS tracking of all vehicles and shipments</span>
                        </li>
                        <li>
                          <i className="bi bi-check2-circle"></i>
                          <span>Automated status updates and delivery notifications</span>
                        </li>
                        <li>
                          <i className="bi bi-check2-circle"></i>
                          <span>Temperature and humidity monitoring for sensitive cargo</span>
                        </li>
                        <li>
                          <i className="bi bi-check2-circle"></i>
                          <span>Customizable reporting and analytics dashboard</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <div className="image-box">
                        <img src="/assets/img/misc/tracking-system.webp" alt="Real-time tracking system" className="img-fluid" loading="lazy" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="features-alt-tab-2" role="tabpanel">
                <div className="content-box">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <h3>Comprehensive Cargo Security</h3>
                      <p>We implement multi-layered security protocols to ensure your shipments are protected throughout the entire logistics chain. From secure facilities to tamper-evident seals.</p>
                      <p className="highlight">Our security measures include 24/7 monitoring, authorized personnel access only, and comprehensive insurance options for maximum protection.</p>
                      <ul className="features-list">
                        <li>
                          <i className="bi bi-check2-circle"></i>
                          <span>Tamper-proof seals and surveillance throughout transit</span>
                        </li>
                        <li>
                          <i className="bi bi-check2-circle"></i>
                          <span>Secure storage facilities with 24/7 monitoring</span>
                        </li>
                        <li>
                          <i className="bi bi-check2-circle"></i>
                          <span>Comprehensive cargo insurance options available</span>
                        </li>
                        <li>
                          <i className="bi bi-check2-circle"></i>
                          <span>Trained security personnel and protocol compliance</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <div className="image-box">
                        <img src="/assets/img/misc/cargo-security.webp" alt="Cargo security measures" className="img-fluid" loading="lazy" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="features-alt-tab-3" role="tabpanel">
                <div className="content-box">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <h3>Express Delivery Services</h3>
                      <p>Our expedited shipping solutions ensure time-sensitive deliveries arrive when you need them. We prioritize express shipments with dedicated vehicles and optimized routes.</p>
                      <p className="highlight">With our express service, you benefit from guaranteed timeframes, priority handling, and dedicated customer support for urgent shipments.</p>
                      <ul className="features-list">
                        <li>
                          <i className="bi bi-check2-circle"></i>
                          <span>Guanteed delivery timeframes with priority handling</span>
                        </li>
                        <li>
                          <i className="bi bi-check2-circle"></i>
                          <span>Dedicated express vehicles and optimized routes</span>
                        </li>
                        <li>
                          <i className="bi bi-check2-circle"></i>
                          <span>After-hours and weekend delivery options available</span>
                        </li>
                        <li>
                          <i className="bi bi-check2-circle"></i>
                          <span>Same-day and next-day delivery for urgent shipments</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <div className="image-box">
                        <img src="/assets/img/misc/express-delivery.webp" alt="Express delivery service" className="img-fluid" loading="lazy" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="features-alt-tab-4" role="tabpanel">
                <div className="content-box">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <h3>Global Logistics Network</h3>
                      <p>Our extensive international partnerships and agent network enable seamless cross-border logistics. We handle customs clearance, documentation, and regulatory compliance.</p>
                      <p className="highlight">With operations spanning multiple continents, we provide door-to-door international shipping with complete transparency and expert guidance.</p>
                      <ul className="features-list">
                        <li>
                          <i className="bi bi-check2-circle"></i>
                          <span>Worldwide coverage with local expertise in each market</span>
                        </li>
                        <li>
                          <i className="bi bi-check2-circle"></i>
                          <span>Expert handling of customs clearance and documentation</span>
                        </li>
                        <li>
                          <i className="bi bi-check2-circle"></i>
                          <span>Multi-modal transport options (air, sea, road, rail)</span>
                        </li>
                        <li>
                          <i className="bi bi-check2-circle"></i>
                          <span>Regional specialists with knowledge of local regulations</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <div className="image-box">
                        <img src="/assets/img/misc/global-network.webp" alt="Global logistics network" className="img-fluid" loading="lazy" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="features-alt-tab-5" role="tabpanel">
                <div className="content-box">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <h3>Customized Logistics Solutions</h3>
                      <p>We understand that every business has unique requirements. Our team develops tailored logistics strategies designed specifically for your industry and operational needs.</p>
                      <p className="highlight">From specialized equipment to custom reporting, we create solutions that integrate seamlessly with your business processes and supply chain.</p>
                      <ul className="features-list">
                        <li>
                          <i className="bi bi-check2-circle"></i>
                          <span>Industry-specific logistics strategies and solutions</span>
                        </li>
                        <li>
                          <i className="bi bi-check2-circle"></i>
                          <span>Custom reporting and integration with your systems</span>
                        </li>
                        <li>
                          <i className="bi bi-check2-circle"></i>
                          <span>Specialized equipment and handling for unique cargo</span>
                        </li>
                        <li>
                          <i className="bi bi-check2-circle"></i>
                          <span>Dedicated account management and personalized service</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <div className="image-box">
                        <img src="assets/img/misc/misc-square-5.webp" alt="Custom logistics solutions" className="img-fluid" loading="lazy" />
                      </div>
                    </div>
                  </div>
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