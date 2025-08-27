"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import AOS from "aos";

export default function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <>
      <section id="about" className="about section light-background">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <span className="description-title">About Us</span>
          <h2>About Our Company</h2>
          <p>
            We are committed to delivering safe, fast, and reliable transport &
            logistics services that connect businesses and individuals across
            regions.
          </p>
        </div>
        {/* End Section Title */}

        <div
          className="container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row align-items-center gy-5">
            {/* Image + Mission Card */}
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="about-image-wrapper position-relative">
                <img
                  src="assets/img/about/about-8.webp"
                  alt="About Easy Transport"
                  className="img-fluid rounded-4"
                />
                <div className="mission-card">
                  <div className="mission-icon">
                    <i className="bi bi-truck"></i>
                  </div>
                  <div className="mission-content">
                    <h4>Our Mission</h4>
                    <p>
                      To provide efficient, innovative and reliable logistics
                      solutions that ensure goods and packages reach their
                      destinations safely and on time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="about-content ps-lg-4">
                <div
                  className="tag-badge"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  COMPANY OVERVIEW
                </div>
                <h2
                  className="mb-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Delivering Trust, Speed and Reliability in Every Journey
                </h2>

                <div
                  className="about-info"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <p>
                    EASY TRANSPORT & LOGISTICS SA (PTY) LTD has established a
                    strong reputation by providing tailored transport and
                    logistics solutions. Whether it’s express deliveries,
                    containerized freight, or air-road shipments, our team works
                    tirelessly to meet and exceed client expectations.
                  </p>
                  <p>
                    By combining expertise, dedication, and modern practices, we
                    guarantee efficiency and peace of mind in every service we
                    provide.
                  </p>
                </div>

                <h4
                  className="values-title mt-4 mb-3"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  Core Values
                </h4>

                <div
                  className="values-list"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div className="value-item">
                    <div className="value-icon">
                      <i className="bi bi-check2"></i>
                    </div>
                    <span className="value-text">Reliability</span>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">
                      <i className="bi bi-check2"></i>
                    </div>
                    <span className="value-text">Efficiency</span>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">
                      <i className="bi bi-check2"></i>
                    </div>
                    <span className="value-text">Customer Focus</span>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">
                      <i className="bi bi-check2"></i>
                    </div>
                    <span className="value-text">Integrity</span>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">
                      <i className="bi bi-check2"></i>
                    </div>
                    <span className="value-text">Collaboration</span>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">
                      <i className="bi bi-check2"></i>
                    </div>
                    <span className="value-text">Commitment to Growth</span>
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
