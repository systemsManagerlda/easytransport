export default function Footer() {
    return (<>
    <footer id="footer" className="footer">

    <div className="container footer-top">
      <div className="row gy-4">
        <div className="col-lg-5 col-md-12 footer-about">
          <a href="index.html" className="logo d-flex align-items-center">
            <span className="sitename">Visible</span>
          </a>
          <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
          <div className="social-links d-flex mt-4">
            <a href=""><i className="bi bi-twitter-x"></i></a>
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""><i className="bi bi-instagram"></i></a>
            <a href=""><i className="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div className="col-lg-2 col-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div className="col-lg-2 col-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Product Management</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Graphic Design</a></li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
          <p>INOSPACE-WADEVILE WORKS</p>
          <p>UNIT 57</p>
          <p>GERMISTON, GAUTENG</p>
          <p className="mt-4"><strong>Phone:</strong> <span>+27 64 674 1847/ +27 72 822 4803</span></p>
          <p><strong>Email:</strong> <span>info@easytransport.co.za</span></p>
        </div>

      </div>
    </div>

    <div className="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong className="px-1 sitename">Easy Transport & Logistics</strong> <span>All Rights Reserved</span></p>
      <div className="credits">
        Designed by <a href="https://systemsmanager.co.mz/">Systems Manager, Lda.</a>
      </div>
    </div>

  </footer>
    </>);
}