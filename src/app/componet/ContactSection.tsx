"use client";
import { useEffect } from "react";
import AOS from "aos";

export default function ContactSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Contact</span>
        <h2>Get in Touch</h2>
        <p>
          Reach out to EASY TRANSPORT & LOGÍSTICS for inquiries, shipments, or support.
        </p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="contact-wrapper">
          {/* Info Panel */}
          <div className="contact-info-panel">
            <div className="contact-info-header">
              <h3>Contact Information</h3>
              <p>
                Our team is here to assist you with logistics, shipping, and account questions.
              </p>
            </div>

            <div className="contact-info-cards">
              <div className="info-card">
                <div className="icon-container">
                  <i className="bi bi-pin-map-fill"></i>
                </div>
                <div className="card-content">
                  <h4>Our Location</h4>
                  <p>123 Easy Transport Rd, Maputo, Mozambique</p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-container">
                  <i className="bi bi-envelope-open"></i>
                </div>
                <div className="card-content">
                  <h4>Email Us</h4>
                  <p>contact@easytransport.co.za</p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-container">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="card-content">
                  <h4>Call Us</h4>
                  <p>+258 84 123 4567</p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-container">
                  <i className="bi bi-clock-history"></i>
                </div>
                <div className="card-content">
                  <h4>Working Hours</h4>
                  <p>Monday-Saturday: 8AM - 6PM</p>
                </div>
              </div>
            </div>

            <div className="social-links-panel">
              <h5>Follow Us</h5>
              <div className="social-icons">
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Panel */}
          <div className="contact-form-panel">
            <div className="map-container">
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.9636683669028!2d32.5694182!3d-25.9364177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee69a91a5b41559%3A0x1f0d251134ece24c!2sR.%20de%20Cam%C3%B5es%2C%20Maputo!5e0!3m2!1spt-PT!2smz!4v1756275182261!5m2!1spt-PT!2smz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="form-container">
              <h3>Send Us a Message</h3>
              <p>
                Have questions about our transport services, logistics solutions, or shipments? Drop us a message and we&apos;ll get back to you promptly.
              </p>

              <form
                action="forms/contact.php"
                method="post"
                className="php-email-form"
              >
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    name="name"
                    placeholder="Full Name"
                    required
                  />
                  <label htmlFor="nameInput">Full Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                  <label htmlFor="emailInput">Email Address</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="subjectInput"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                  <label htmlFor="subjectInput">Subject</label>
                </div>

                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="messageInput"
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    style={{ height: "150px" }}
                    required
                  ></textarea>
                  <label htmlFor="messageInput">Your Message</label>
                </div>

                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn-submit">
                    Send Message{" "}
                    <i className="bi bi-send-fill ms-2" aria-hidden="true"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
