import Image from "next/image";

export default function Header() {
  return (
    <>
      <header
        id="header"
        className="header d-flex align-items-center position-relative"
      >
        <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
          <a href="#" className="logo d-flex align-items-center">
            <Image
              src="/assets/img/logoPage.png"
              alt="Logo"
              width={50}
              height={100}
              priority
            />
            <h1 className="sitename">
              EASY TRANSPORT
            </h1>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="#hero" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>

              {/* Services Dropdown */}
              <li className="dropdown">
                <a href="#">
                  <span>Services</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul>
                  <li>
                    <a href="#transport-logistics">Transport & Logistics</a>
                  </li>
                  <li>
                    <a href="#express">Express Door-to-Door (Light Cargo)</a>
                  </li>
                  <li>
                    <a href="#air-road">Air & Road Freight</a>
                  </li>
                  <li>
                    <a href="#containerized">Containerized Transport (FCL)</a>
                  </li>
                  <li>
                    <a href="#door-shipments">
                      Door-to-Door Shipments (Packages & Light Cargo)
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </header>
    </>
  );
}
