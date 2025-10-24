"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import AOS from "aos";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <>
      <section id="hero" className="hero section">
        <div className="container">
          <div className="row align-items-center">
            {/* Texto principal */}
            <div
              className="col-lg-6 hero-content"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="subtitle">
                <span>YOUR TRUSTED LOGISTICS PARTNER</span>
              </div>

              <h1 className="title">
                RELIABLE <span className="highlight">TRANSPORT</span> &
                LOGISTICS SOLUTIONS
              </h1>

              <div className="description">
                <p>
                  At EASY TRANSPORT & LOGISTICS SA (PTY) LTD, we deliver fast,
                  safe and reliable transport solutions tailored to your needs —
                  from express door-to-door shipments to containerized freight
                  and air-road cargo services.
                </p>
              </div>

              <div className="hero-buttons">
                <a href="#services" className="primary-btn">
                  Our Services
                  <i className="bi bi-chevron-right"></i>
                </a>
                <a href="#contact" className="secondary-btn">
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Imagem + elementos */}
            <div
              className="col-lg-6 hero-visual"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="image-wrapper">
                <img
                  src="assets/img/misc/hero.png"
                  alt="Creative Design"
                  className="main-image"
                />

                <div className="floating-element top-left">
                  <i className="bi bi-truck"></i>
                </div>

                <div className="floating-element bottom-right">
                  <i className="bi bi-box-seam"></i>
                </div>

                <div className="experience-badge">
                  <span className="years">10+</span>
                  <span className="text">Years of Excellence</span>
                </div>
              </div>

              <div className="client-counter">
                <div className="counter-number">
                  <span>750+</span>
                </div>
                <div className="counter-text">
                  <span>Successful Deliveries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
