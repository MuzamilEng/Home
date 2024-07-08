import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <>
      <header className="header" role="banner">
        <div className="container-fluid p-0">
          <div
            className="site-header-main row"
            style={{ position: "relative" }}
          >
            <div className="site-branding col-lg-3 col-9">
              <div className="main-logo">
                <a href="index.html" rel="home">
                  <img
                    src="wp-content/uploads/2022/08/HomesSteady_Logo_Full-Color_RGB-264w.png"
                    alt="header logo"
                  />
                </a>
              </div>
            </div>
            {/* .site-branding */}
            <div
              id="site-header-menu"
              className="site-header-menu col-lg-9 6 col-3"
            >
              <div className="menu-wrapper">
                <div className="header-social">
                  <ul className="social-list"></ul>
                </div>
                <nav
                  id="site-navigation"
                  aria-label="Main Menu"
                  className="main-navigation"
                >
                  <div className="primary-menu">
                    <ul id="menu-main-menu" className="primary-menu">
                      <li
                        id="menu-item-1003311"
                        className={`${
                          location.pathname === "/" ? "current-menu-item" : ""
                        }`}
                      >
                        <Link to="/" aria-current="page">
                          <p className="lg:text-[1vw]">Wellcome</p>
                        </Link>
                      </li>
                      <li
                        id="menu-item-1003312"
                        className={
                          location.pathname === "/home-maintainence"
                            ? "current-menu-item"
                            : ""
                        }
                      >
                        <Link to="/home-maintainence">
                          <p className="text-[1vw]">Steady Home Plan</p>
                        </Link>
                      </li>
                      <li
                        id="menu-item-1003318"
                        className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1003318 ${
                          location.pathname === "/painting-services"
                            ? "current-menu-item"
                            : ""
                        }`}
                      >
                        <Link to="/painting-services">
                          <p className="text-[1vw]">Home Repair Services</p>
                        </Link>
                        <ul className="sub-menu">
                          <li
                            id="menu-item-1003319"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003319"
                          >
                            <Link to="/painting-services">
                              <p className="text-[1vw]">PAINTING SERVICES</p>
                            </Link>
                          </li>
                          <li
                            id="menu-item-1003320"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003320"
                          >
                            <a href="bathroom-repairs/index.html">
                              BATHROOM REPAIR
                            </a>
                          </li>
                          <li
                            id="menu-item-1003321"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003321"
                          >
                            <a href="deck-repairs/index.html">DECK SERVICES</a>
                          </li>
                          <li
                            id="menu-item-1003322"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003322"
                          >
                            <a href="door-services/index.html">DOOR SERVICES</a>
                          </li>
                          <li
                            id="menu-item-1003323"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003323"
                          >
                            <a href="drywall-repair/index.html">
                              DRYWALL REPAIR
                            </a>
                          </li>
                          <li
                            id="menu-item-1003324"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003324"
                          >
                            <a href="fence-repair/index.html">FENCE REPAIR</a>
                          </li>
                          <li
                            id="menu-item-1003325"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003325"
                          >
                            <a href="flooring-repair/index.html">
                              FLOORING REPAIR
                            </a>
                          </li>
                          <li
                            id="menu-item-1003326"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003326"
                          >
                            <a href="tv-mounting/index.html">TV MOUNTING</a>
                          </li>
                          <li
                            id="menu-item-1003327"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003327"
                          >
                            <a href="tile-repair/index.html">TILE REPAIR</a>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-1003313"
                        className={
                          location.pathname === "/franchise"
                            ? "current-menu-item"
                            : ""
                        }
                      >
                        <Link to="/franchise">
                          <p className="text-[1vw]">Franchise</p>
                        </Link>
                      </li>
                      <li
                        id="menu-item-1003317"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1003317"
                      >
                        <a
                          target="_blank"
                          rel="noopener"
                          href="https://homesteady-careers.careerplug.com/jobs"
                        >
                          <p className="text-[1vw]">Careers</p>
                        </a>
                      </li>
                    </ul>
                  </div>{" "}
                </nav>
              </div>
              <div className="location-search">
                <Link to="/contact" className="btn btn-primary mr-0">
                  Contact
                </Link>
              </div>
              <div className="mobile-menu">
                <div className="menubars">
                  <div className="menubar top" />
                  <div className="menubar middle" />
                  <div className="menubar bottom" />
                </div>
                <div className="menubackground"></div>
                <div className="mobile-nav-menu">
                  <div className="menu-main-menu-container">
                    <ul className="menulinks">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1003283 current_page_item menu-item-1003311">
                        <a href="index.html" aria-current="page">
                          Welcome
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003312">
                        <a href="home-maintenance-plans/index.html">
                          Steady Home Plan
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1003318">
                        <a href="painting-services/index.html#HomeRepairServices">
                          Home Repair Services
                        </a>
                        <ul className="sub-menu">
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003319">
                            <a href="painting-services/index.html">
                              PAINTING SERVICES
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003320">
                            <a href="bathroom-repairs/index.html">
                              BATHROOM REPAIR
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003321">
                            <a href="deck-repairs/index.html">DECK SERVICES</a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003322">
                            <a href="door-services/index.html">DOOR SERVICES</a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003323">
                            <a href="drywall-repair/index.html">
                              DRYWALL REPAIR
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003324">
                            <a href="fence-repair/index.html">FENCE REPAIR</a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003325">
                            <a href="flooring-repair/index.html">
                              FLOORING REPAIR
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003326">
                            <a href="tv-mounting/index.html">TV MOUNTING</a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003327">
                            <a href="tile-repair/index.html">TILE REPAIR</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003313">
                        <a href="franchise/index.html">Franchise</a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1003317">
                        <a
                          target="_blank"
                          rel="noopener"
                          href="https://homesteady-careers.careerplug.com/jobs"
                        >
                          Careers
                        </a>
                      </li>
                    </ul>
                  </div>{" "}
                  <div className="mobile-location-search">
                    <a
                      href="contact/index.html"
                      className="btn btn-primary mr-0"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* .site-header-menu */}
          </div>
          {/* .site-header-main */}
        </div>
      </header>
    </>
  );
};

export default Header;
