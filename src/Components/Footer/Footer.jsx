import React from "react";

import { logo2 } from "../../Components/index";

function Footer() {
  return (
    <div className="dark-mode-texts footer-gradient-default overflow-hidden position-relative">
      <svg
        className="bg-wave-box-end"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,64L80,101.3C160,139,320,213,480,213.3C640,213,800,139,960,117.3C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className="container">
        <div className="footer-section dark-mode-texts">
          <div className="container">
            <div className="footer-top pt-15 pt-lg-25 pb-lg-19">
              <div className="row">
                <div className="col-12 col-lg-3">
                  <div className="footer-block mb-13 mb-lg-9">
                    <div className="brand-logo mb-7">
                      <a href="#">
                        <img src={logo2} alt="" className="dark-version-logo" />
                      </a>
                    </div>
                    <ul className="footer-contact-list list-unstyled">
                      <li>
                        <span className="badge coodiv-badge badge-warning rounded-pill coodiv-text-12 position-relative">
                          <i className="fa fa-envelope"></i> support@coodiv.net
                        </span>
                      </li>
                      <li>
                        <span className="badge coodiv-badge badge badge-info rounded-pill coodiv-text-12 position-relative">
                          <i className="fa fa-phone"></i> +123-456-6788-99
                        </span>
                      </li>
                    </ul>
                    <p className="coodiv-text-11 pr-lg-10">
                      Our mission is to make life easier for website developers
                      and their customers.
                      <br /> We do it by offering easy to use, fast and reliable
                      web hosting services.
                    </p>
                  </div>
                </div>

                <div className="col-4 col-lg-2">
                  <div className="footer-block mb-13 mb-lg-4">
                    <h4 className="block-title coodiv-text-7 mb-4 position-relative">
                      Our services
                    </h4>
                    <ul className="footer-list list-unstyled">
                      <li className="py-1">
                        <a className="footer-list-link" href="web-hosting.html">
                          Web Hosting
                        </a>
                      </li>
                      <li className="py-1">
                        <a className="footer-list-link" href="vps-hosting.html">
                          VPS servers
                        </a>
                      </li>
                      <li className="py-1">
                        <a
                          className="footer-list-link"
                          href="google-workspace.html"
                        >
                          Google Workspace
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-block mb-13 mb-lg-9">
                    <h4 className="block-title coodiv-text-7 mb-4 position-relative">
                      Resources
                    </h4>
                    <ul className="footer-list list-unstyled">
                      <li className="py-1">
                        <a className="footer-list-link" href="minecraft.html">
                          minecraft hosting
                        </a>
                      </li>
                      <li className="py-1">
                        <a className="footer-list-link" href="website-builder.html">
                          Website builder
                        </a>
                      </li>
                      <li className="py-1">
                        <a className="footer-list-link" href="cpanel-reseller.html">
                          Cpanel reseller
                        </a>
                      </li>
                      <li className="py-1">
                        <a
                          className="footer-list-link"
                          href="wordpress-hosting.html"
                        >
                          WordPress hosting
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-4 col-lg-2">
                  <div className="footer-block mb-13 mb-lg-4">
                    <h4 className="block-title coodiv-text-7 mb-4 position-relative">
                      Domains
                    </h4>
                    <ul className="footer-list list-unstyled">
                      <li className="py-1">
                        <a
                          className="footer-list-link"
                          href="domains-registration.html"
                        >
                          Domain Checker
                        </a>
                      </li>
                      <li className="py-1">
                        <a
                          className="footer-list-link"
                          href="domains-registration.html"
                        >
                          Free Domain
                        </a>
                      </li>
                      <li className="py-1">
                        <a className="footer-list-link" href="shared-hosting.html">
                          SSL Certificate
                        </a>
                      </li>
                      <li className="py-1">
                        <a className="footer-list-link" href="help-center.html">
                          WHOIS checker
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-block mb-13 mb-lg-4">
                    <h4 className="block-title coodiv-text-7 mb-4 position-relative">
                      Solutions
                    </h4>
                    <ul className="footer-list list-unstyled">
                      <li className="py-1">
                        <a className="footer-list-link" href="index-vpn.html">
                          Website Acceleration
                        </a>
                      </li>
                      <li className="py-1">
                        <a className="footer-list-link" href="index-cdn.html">
                          Video Delivery
                        </a>
                      </li>
                      <li className="py-1">
                        <a className="footer-list-link" href="index-4.html">
                          Software Distribution
                        </a>
                      </li>
                      <li className="py-1">
                        <a className="footer-list-link" href="index-3.html">
                          Image Processing
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-4 col-lg-2">
                  <div className="footer-block mb-13 mb-lg-4">
                    <h4 className="block-title coodiv-text-7 mb-4 position-relative">
                      Company
                    </h4>
                    <ul className="footer-list list-unstyled">
                      <li className="py-1">
                        <a className="footer-list-link" href="about.html">
                          About Us
                        </a>
                      </li>
                      <li className="py-1">
                        <a className="footer-list-link" href="contact.html">
                          Contact Us
                        </a>
                      </li>
                      <li className="py-1">
                        <a className="footer-list-link" href="blog.html">
                          Blog
                        </a>
                      </li>
                      <li className="py-1">
                        <a className="footer-list-link" href="blog-single.html">
                          SLA
                        </a>
                      </li>
                      <li className="py-1">
                        <a className="footer-list-link" href="all-topics.html">
                          Careers
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-block mb-13 mb-lg-4">
                    <h4 className="block-title coodiv-text-7 mb-4 position-relative">
                      Developers
                    </h4>
                    <ul className="footer-list list-unstyled">
                      <li className="py-1">
                        <a className="footer-list-link" href="incident-post.html">
                          Developer Hub
                        </a>
                      </li>
                      <li className="py-1">
                        <a className="footer-list-link" href="all-topics.html">
                          API Reference
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-12 col-lg-3 pl-lg-8">
                  <div className="footer-block mb-13 mb-lg-4 d-none d-lg-block">
                    <h4 className="block-title coodiv-text-7 mb-4 position-relative">
                      Do you need support?
                    </h4>
                    <ul className="footer-list list-unstyled">
                      <li className="py-1">
                        <a className="footer-list-link" href="about.html">
                          About Us
                        </a>
                      </li>
                      <li className="py-1">
                        <a className="footer-list-link" href="status-page.html">
                          Our Technology
                        </a>
                      </li>
                      <li className="py-1">
                        <a className="footer-list-link" href="privacy-policy.html">
                          Privacy Policy
                        </a>
                      </li>
                      <li className="py-1">
                        <a className="footer-list-link" href="privacy-policy.html">
                          Terms &amp; Conditions
                        </a>
                      </li>
                      <li className="py-1">
                        <a className="footer-list-link" href="contact.html">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-block mb-13 mb-lg-4 text-center text-lg-left">
                    <h4 className="block-title coodiv-text-7 mb-4 position-relative">
                      Big traffic? Talk to Sales
                    </h4>
                    <p className="coodiv-text-11">
                      Working on a big project? Let our experts help you out.
                    </p>
                    <a
                      href="contact.html"
                      className="btn btn-red with-icon coodiv-text-11 white-text-btn rounded-25 py-3 coodiv-hover-y"
                    >
                      Talk to an expert{" "}
                      <i className="feather icon-arrow-right font-weight-bold"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bottom-footer-area border-top pt-9 pb-8">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <p className="copyright-text coodiv-text-11 mb-6 mb-lg-0 coodiv-text-color-opacity text-center text-lg-left">
                    © 2022 Copyright, All Right Reserved, Made with Love by
                    coodiv with a lots of coffee
                  </p>
                </div>
                <div className="col-lg-4 text-center text-lg-right">
                  <ul className="payment-getway list-unstyled mb-0">
                    <li className="ml-1">
                      <img
                        src="https://emyui.pdthemes.de/wp-content/uploads/2022/02/visa.webp"
                        alt=""
                      />
                    </li>
                    <li className="ml-1">
                      <img
                        src="https://emyui.pdthemes.de/wp-content/uploads/2022/02/mastercard.webp"
                        alt=""
                      />
                    </li>
                    <li className="ml-1">
                      <img
                        src="https://emyui.pdthemes.de/wp-content/uploads/2022/02/discover.webp"
                        alt=""
                      />
                    </li>
                    <li className="ml-1">
                      <img
                        src="https://emyui.pdthemes.de/wp-content/uploads/2022/02/amex.webp"
                        alt=""
                      />
                    </li>
                    <li className="ml-1">
                      <img
                        src="https://emyui.pdthemes.de/wp-content/uploads/2022/02/jcb.webp"
                        alt=""
                      />
                    </li>
                    <li className="ml-1">
                      <img
                        src="https://emyui.pdthemes.de/wp-content/uploads/2022/02/maestro.webp"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
