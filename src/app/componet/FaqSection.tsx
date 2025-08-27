/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect } from "react";
import AOS from "aos";

export default function FaqSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <>
      <section id="faq" className="faq section">

        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <span className="description-title">Frequently Asked Questions</span>
          <h2>Frequently Asked Questions</h2>
          <p>Answers to the most common questions about our transport and logistics services.</p>
        </div>
        {/* End Section Title */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">

          <div className="row align-items-start gy-4">
            <div className="col-lg-5" data-aos="fade-up" data-aos-delay="200">
              <div className="faq-sidebar">
                <div className="faq-image">
                  <img src="assets/img/illustration/illustration-5.webp" alt="FAQ Image" className="img-fluid" loading="lazy" />
                </div>
                <div className="contact-box">
                  <h3><i className="bi bi-headset"></i> Need Assistance?</h3>
                  <p>Our support team is ready to help you with shipments, logistics, and account inquiries.</p>
                  <a href="#" className="btn-contact">Connect with Support</a>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="faq-tabs">
                <ul className="nav nav-pills mb-4" id="faqTabs-faq" role="tablist" data-aos="fade-up" data-aos-delay="100">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="general-tab-faq" data-bs-toggle="pill" data-bs-target="#general-faq-faq" type="button" role="tab" aria-controls="general-faq-faq" aria-selected="true">General Inquiries</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="services-tab-faq" data-bs-toggle="pill" data-bs-target="#services-faq-faq" type="button" role="tab" aria-controls="services-faq-faq" aria-selected="false">Service Questions</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="payments-tab-faq" data-bs-toggle="pill" data-bs-target="#payments-faq-faq" type="button" role="tab" aria-controls="payments-faq-faq" aria-selected="false">Billing & Payments</button>
                  </li>
                </ul>

                <div className="tab-content" id="faqTabsContent-faq">
                  <div className="tab-pane fade show active" id="general-faq-faq" role="tabpanel" aria-labelledby="general-tab-faq">
                    <div className="accordion" id="generalAccordion-faq">
                      <div className="faq-item" data-aos="fade-up" data-aos-delay="150">
                        <h3>How do I schedule a shipment?</h3>
                        <div className="faq-content">
                          <p>You can schedule a shipment by contacting our support team or using our online booking system. We handle pickups, documentation, and timely delivery.</p>
                        </div>
                        <i className="bi bi-chevron-down faq-toggle"></i>
                      </div>

                      <div className="faq-item" data-aos="fade-up" data-aos-delay="200">
                        <h3>What types of cargo do you transport?</h3>
                        <div className="faq-content">
                          <p>We transport a variety of cargo including light packages, full container loads (FCL), and combined air-road shipments. Specialized handling is available for sensitive or valuable goods.</p>
                        </div>
                        <i className="bi bi-chevron-down faq-toggle"></i>
                      </div>

                      <div className="faq-item" data-aos="fade-up" data-aos-delay="250">
                        <h3>Can I track my shipment?</h3>
                        <div className="faq-content">
                          <p>Yes, all shipments are trackable in real-time. You will receive updates on pickup, transit, and delivery through our tracking system or directly via our support team.</p>
                        </div>
                        <i className="bi bi-chevron-down faq-toggle"></i>
                      </div>

                      <div className="faq-item" data-aos="fade-up" data-aos-delay="300">
                        <h3>How do I report a lost or damaged shipment?</h3>
                        <div className="faq-content">
                          <p>Contact our support team immediately with your shipment details. We have procedures in place to investigate and resolve issues, including compensation where applicable.</p>
                        </div>
                        <i className="bi bi-chevron-down faq-toggle"></i>
                      </div>

                      <div className="faq-item" data-aos="fade-up" data-aos-delay="350">
                        <h3>Do you offer international shipping?</h3>
                        <div className="faq-content">
                          <p>Yes, we provide domestic and international shipping solutions with efficient air-road and containerized transport options to meet your global logistics needs.</p>
                        </div>
                        <i className="bi bi-chevron-down faq-toggle"></i>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="services-faq-faq" role="tabpanel" aria-labelledby="services-tab-faq">
                    <div className="accordion" id="servicesAccordion-faq">
                      <div className="faq-item" data-aos="fade-up" data-aos-delay="150">
                        <h3>How does express door-to-door delivery work?</h3>
                        <div className="faq-content">
                          <p>Our team picks up your light cargo from your location and delivers it directly to the recipient, ensuring fast and reliable service.</p>
                        </div>
                        <i className="bi bi-chevron-down faq-toggle"></i>
                      </div>

                      <div className="faq-item" data-aos="fade-up" data-aos-delay="200">
                        <h3>Can I book containerized shipping online?</h3>
                        <div className="faq-content">
                          <p>Yes, you can request a containerized shipment (FCL) via our online booking system. We provide guidance on documentation, loading, and scheduling.</p>
                        </div>
                        <i className="bi bi-chevron-down faq-toggle"></i>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="payments-faq-faq" role="tabpanel" aria-labelledby="payments-tab-faq">
                    <div className="accordion" id="paymentsAccordion-faq">
                      <div className="faq-item" data-aos="fade-up" data-aos-delay="150">
                        <h3>What payment methods are accepted?</h3>
                        <div className="faq-content">
                          <p>We accept payments via bank transfer, credit card, and online payment platforms. All transactions are secure and confirmed upon receipt.</p>
                        </div>
                        <i className="bi bi-chevron-down faq-toggle"></i>
                      </div>

                      <div className="faq-item" data-aos="fade-up" data-aos-delay="200">
                        <h3>When will my payment be processed?</h3>
                        <div className="faq-content">
                          <p>Payments are processed immediately upon confirmation. For international transactions, processing may take 1-3 business days depending on the method used.</p>
                        </div>
                        <i className="bi bi-chevron-down faq-toggle"></i>
                      </div>

                      <div className="faq-item" data-aos="fade-up" data-aos-delay="250">
                        <h3>Can I get a refund if my shipment is canceled?</h3>
                        <div className="faq-content">
                          <p>Refunds are available for canceled shipments according to our cancellation policy. Contact our support team for assistance and detailed procedures.</p>
                        </div>
                        <i className="bi bi-chevron-down faq-toggle"></i>
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
