"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import AOS from "aos";

export default function PortfolioSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <>
    <section id="portfolio" className="portfolio section">

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Case Studies</span>
        <h2>Our Successful Projects</h2>
        <p>Explore our portfolio of logistics solutions that have helped businesses streamline their supply chain operations</p>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <div className="row">
            <div className="col-lg-3 filter-sidebar">
              <div className="filters-wrapper" data-aos="fade-right" data-aos-delay="150">
                <ul className="portfolio-filters isotope-filters">
                  <li data-filter="*" className="filter-active">All Projects</li>
                  <li data-filter=".filter-express">Express Delivery</li>
                  <li data-filter=".filter-container">Container Shipping</li>
                  <li data-filter=".filter-air">Air Freight</li>
                  <li data-filter=".filter-logistics">Logistics Solutions</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="row gy-4 portfolio-container isotope-container" data-aos="fade-up" data-aos-delay="200">

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-express">
                  <div className="portfolio-wrap">
                    <img src="/assets/img/portfolio/ExpressDelivery.png" className="img-fluid" alt="Express door-to-door delivery service" loading="lazy" />
                    <div className="portfolio-info">
                      <div className="content">
                        <span className="category">Express Delivery</span>
                        <h4>Time-Sensitive Medical Supplies</h4>
                        <div className="portfolio-links">
                          <a href="/assets/img/portfolio/ExpressDelivery.png" className="glightbox" title="Express Medical Delivery"><i className="bi bi-plus-lg"></i></a>
                          <a href="portfolio-details.html" title="More Details"><i className="bi bi-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Portfolio Item  */}

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-container">
                  <div className="portfolio-wrap">
                    <img src="/assets/img/portfolio/ContainerShipping.png" className="img-fluid" alt="Containerized shipping solutions" loading="lazy" />
                    <div className="portfolio-info">
                      <div className="content">
                        <span className="category">Container Shipping</span>
                        <h4>Automotive Parts Export</h4>
                        <div className="portfolio-links">
                          <a href="/assets/img/portfolio/ContainerShipping.png" className="glightbox" title="Automotive Parts Export"><i className="bi bi-plus-lg"></i></a>
                          <a href="portfolio-details.html" title="More Details"><i className="bi bi-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-air">
                  <div className="portfolio-wrap">
                    <img src="/assets/img/portfolio/AirFreight.png" className="img-fluid" alt="Air freight transportation" loading="lazy" />
                    <div className="portfolio-info">
                      <div className="content">
                        <span className="category">Air Freight</span>
                        <h4>Electronics Global Distribution</h4>
                        <div className="portfolio-links">
                          <a href="/assets/img/portfolio/AirFreight.png" className="glightbox" title="Electronics Air Freight"><i className="bi bi-plus-lg"></i></a>
                          <a href="portfolio-details.html" title="More Details"><i className="bi bi-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-logistics">
                  <div className="portfolio-wrap">
                    <img src="/assets/img/portfolio/LogisticsSolutions.png" className="img-fluid" alt="Warehouse logistics management" loading="lazy" />
                    <div className="portfolio-info">
                      <div className="content">
                        <span className="category">Logistics Solutions</span>
                        <h4>Retail Chain Supply Optimization</h4>
                        <div className="portfolio-links">
                          <a href="/assets/img/portfolio/LogisticsSolutions.png" className="glightbox" title="Retail Supply Chain"><i className="bi bi-plus-lg"></i></a>
                          <a href="portfolio-details.html" title="More Details"><i className="bi bi-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-express">
                  <div className="portfolio-wrap">
                    <img src="/assets/img/portfolio/FastDelivery.png" className="img-fluid" alt="E-commerce delivery solutions" loading="lazy" />
                    <div className="portfolio-info">
                      <div className="content">
                        <span className="category">Express Delivery</span>
                        <h4>E-Commerce Last-Mile Delivery</h4>
                        <div className="portfolio-links">
                          <a href="/assets/img/portfolio/FastDelivery.png" className="glightbox" title="E-commerce Delivery"><i className="bi bi-plus-lg"></i></a>
                          <a href="portfolio-details.html" title="More Details"><i className="bi bi-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-container">
                  <div className="portfolio-wrap">
                    <img src="/assets/img/portfolio/agricult.png" className="img-fluid" alt="Bulk container shipping" loading="lazy" />
                    <div className="portfolio-info">
                      <div className="content">
                        <span className="category">Container Shipping</span>
                        <h4>Agricultural Products Export</h4>
                        <div className="portfolio-links">
                          <a href="/assets/img/portfolio/agricult.png" className="glightbox" title="Agricultural Export"><i className="bi bi-plus-lg"></i></a>
                          <a href="portfolio-details.html" title="More Details"><i className="bi bi-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

              </div>
              {/* <!-- End Portfolio Container --> */}
            </div>
          </div>

        </div>

      </div>

    </section>
    </>
  );
}