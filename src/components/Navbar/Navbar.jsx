import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({
    isDropdownOpenIB: false,
    isDropdownOpenIBSub: false,
    isDropdownOpenIGCSESub: false,
    isDropdownOpenCareer: false,
    isDropdownOpenIGCSE: false,
  });

  const handleMouseEnter = (dropdown) => {
    if (!click && window.innerWidth > 1024) {
      setDropdownStates((prevState) => ({
        ...prevState,
        [dropdown]: true,
      }));
    }
  };

  const handleMouseLeave = (dropdown) => {
    if (!click && window.innerWidth > 1024) {
      setDropdownStates((prevState) => ({
        ...prevState,
        [dropdown]: false,
      }));
    }
  };

  const handleDropdownClick = (dropdown) => {
    if (window.innerWidth <= 1024) {
      setDropdownStates((prevState) => ({
        ...prevState,
        [dropdown]: !prevState[dropdown],
      }));
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const closeMobileMenu = () => setClick(false);
  const reloadPage = () => {
    window.location.reload();
    window.location.pathname("/");
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("scroll", handleScroll);
    const NavLinks = document.querySelectorAll(".nav-links");
    NavLinks.forEach((link) => {
      if (link.getAttribute("href") === location.pathname) {
        NavLinks.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  const handleClick = () => setClick(!click);

  useEffect(() => {
    window.addEventListener("resize", showButton);
    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (click) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [click]);

  return (
    <nav
    className={`navbar ${isScrolled ? "navbar-fixed" : ""} ${click ? "navbar-fixed":""}`}
    style={{ animation: click ? "none" : ""}}
    >
      <div className="navbar-container">
        <NavLink to="/" className="logo" onClick={reloadPage}>
          <img src={logo} alt="Philomathean" className="logo_img" />
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        {/* Backdrop for mobile menu */}
        <div className={click ? "nav-backdrop active" : "nav-backdrop"} onClick={closeMobileMenu}></div>
        
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/* Mobile Menu Header with Logo and Close Button */}
          <li className="nav-item mobile-header">
             <img src={logo} alt="Philomathean" className="mobile-logo" />
             <div className="mobile-close-icon" onClick={closeMobileMenu}>
                <i className="fas fa-times"></i>
             </div>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/courses"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Courses
            </NavLink>
          </li>

          {/* Drop down link starts here about IB */}
          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("isDropdownOpenIB")}
            onMouseLeave={() => handleMouseLeave("isDropdownOpenIB")}
            onClick={() => handleDropdownClick("isDropdownOpenIB")}
          >
            <div
              className={`nav-links ${
                dropdownStates.isDropdownOpenIB ? "active" : ""
              } ${location.pathname === "/about-ib" ? "sub-nav-active" : ""}
              `}
            >
              IB
              <i
                className={
                  dropdownStates.isDropdownOpenIB
                    ? "fas fa-chevron-up"
                    : "fas fa-chevron-down"
                }
                style={{ paddingLeft: 5 }}
              ></i>
            </div>
            {dropdownStates.isDropdownOpenIB && (
              <div className="dropdown-wrapper">
                <ul
                  className={`dropdown-menu ${
                    dropdownStates.isDropdownOpenIB ? "active" : ""
                  }`}
                >
                  <li className="dropdown-item">
                    <NavLink
                      to="/intro-ib"
                      className="sub-sub-nav-links"
                      onClick={closeMobileMenu}
                    >
                      Introduction
                    </NavLink>
                  </li>
                  <li className="dropdown-item">
                    <NavLink
                      to="/benefit-ib"
                      className="sub-sub-nav-links"
                      onClick={closeMobileMenu}
                    >
                      Benefits of IB
                    </NavLink>
                  </li>
                  <li className="dropdown-item">
                    <NavLink
                      to="/primary-year"
                      className="sub-sub-nav-links"
                      onClick={closeMobileMenu}
                    >
                      Primary Year Programme 
                    </NavLink>
                  </li>
                  <li className="dropdown-item">
                    <NavLink
                      to="/middle-year"
                      className="sub-sub-nav-links"
                      onClick={closeMobileMenu}
                    >
                      Middle Year Programme
                    </NavLink>
                  </li>
                  <li className="dropdown-item">
                    <NavLink
                      to="/diploma"
                      className="sub-sub-nav-links"
                      onClick={closeMobileMenu}
                    >
                      Diploma Programme
                    </NavLink>
                  </li>
                  <li className="dropdown-item">
                    <NavLink
                      to="/career"
                      className="sub-sub-nav-links"
                      onClick={closeMobileMenu}
                    >
                      Career-Related Programme
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </li>

          {/*x*/}
          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("isDropdownOpenIGCSE")}
            onMouseLeave={() => handleMouseLeave("isDropdownOpenIGCSE")}
            onClick={() => handleDropdownClick("isDropdownOpenIGCSE")}
          >
            <div
              className={`nav-links ${
                dropdownStates.isDropdownOpenIGCSE ? "active" : ""
              }
              ${location.pathname === "/about-igcse" ? "sub-nav-active" : ""}
              `}
            >
              IGCSE
              <i
                className={
                  dropdownStates.isDropdownOpenIGCSE
                    ? "fas fa-chevron-up"
                    : "fas fa-chevron-down"
                }
                style={{ paddingLeft: 5 }}
              ></i>
            </div>
            {dropdownStates.isDropdownOpenIGCSE && (
              <div className="dropdown-wrapper">
                <ul
                  className={`dropdown-menu ${
                    dropdownStates.isDropdownOpenIGCSE ? "active" : ""
                  }`}
                >
                  <li className="dropdown-item">
                    <NavLink
                      to="/about-ig"
                      className="sub-sub-nav-links"
                      onClick={closeMobileMenu}
                    >
                      Introduction
                    </NavLink>
                  </li>
                  <li className="dropdown-item">
                    <NavLink
                      to="/subject-ig"
                      className="sub-sub-nav-links"
                      onClick={closeMobileMenu}
                    >
                      Subjects Offered
                    </NavLink>
                  </li>
                  <li className="dropdown-item">
                    <NavLink
                      to="/why-to-choose"
                      className="sub-sub-nav-links"
                      onClick={closeMobileMenu}
                    >
                      Why Choose IGCSE
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </li>
          {/* 
          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("isDropdownOpenIGCSE")}
            onMouseLeave={() => handleMouseLeave("isDropdownOpenIB")}
            onClick={() => handleDropdownClick("isDropdownOpenIB")}
          >
            <div
              className={`nav-links ${
                dropdownStates.isDropdownOpenIB ? "active" : ""
              } ${location.pathname === "/about-ib" ? "sub-nav-active" : ""}
              ${location.pathname === "/about-igcse" ? "sub-nav-active" : ""}
              `}
            >
              IB 
              <i
                className={
                  dropdownStates.isDropdownOpenIB
                    ? "fas fa-chevron-up"
                    : "fas fa-chevron-down"
                }
                style={{ paddingLeft: 5 }}
              ></i>
            </div>
            {dropdownStates.isDropdownOpenIB && (
              <div className="dropdown-wrapper">
                <ul
                  className={`dropdown-menu ${
                    dropdownStates.isDropdownOpenIB ? "active" : ""
                  } `}
                >
                  <li className="dropdown-item" 
                      onMouseEnter={() => handleMouseEnter("isDropdownOpenIBSub")}
                      onMouseLeave={() => handleMouseLeave("isDropdownOpenIBSub")}
                      onClick={() => handleDropdownClick("isDropdownOpenIBSub")}>
                  
                    <p className="sub-nav-links">About IB</p>
                    <ul className={`sub-dropdown-menu ${dropdownStates.isDropdownOpenIBSub ? "active" : ""
                    } `}>
                      <li className="sub-dropdown-item">
                        <NavLink to="/about-ib" className="sub-sub-nav-links" onClick={closeMobileMenu} >
                          Introduction
                        </NavLink>
                        <NavLink to="/benefit-ib" className="sub-sub-nav-links" onClick={closeMobileMenu} >
                          Benefits of IB
                        </NavLink>
                        <NavLink to="/about-ib" className="sub-sub-nav-links" onClick={closeMobileMenu} >
                          IB Programs
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-item" 
                      onMouseEnter={() => handleMouseEnter("isDropdownOpenIGCSESub")}
                      onMouseLeave={() => handleMouseLeave("isDropdownOpenIGCSESub")}
                      onClick={() => handleDropdownClick("isDropdownOpenIGCSESub")}>
                   
                    <p className="sub-nav-links">About IGCSE</p>
                    <ul className={`sub-dropdown-menu ${dropdownStates.isDropdownOpenIGCSESub ? "active" : ""
                    } `}>
                      <li className="sub-dropdown-item">
                        <NavLink to="/about-ib" className="sub-sub-nav-links" onClick={closeMobileMenu} >
                          Benefits of IGCSE
                        </NavLink>
                        <NavLink to="/about-ib" className="sub-sub-nav-links" onClick={closeMobileMenu} >
                          IGCSE Programs
                        </NavLink>
                        <NavLink to="/about-ib" className="sub-sub-nav-links" onClick={closeMobileMenu} >
                          IGCSE Schools & Subject
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
          </li> */}

          {/* drop down for Career  Counselling */}
          <li className="nav-item">
            <NavLink
              to="/ASlevel"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              AS & A Levels
            </NavLink>
          </li>

          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("isDropdownOpenCareer")}
            onMouseLeave={() => handleMouseLeave("isDropdownOpenCareer")}
            onClick={() => handleDropdownClick("isDropdownOpenCareer")}
          >
            <div
              className={`nav-links ${
                dropdownStates.isDropdownOpenCareer ? "active" : ""
              }   ${
                location.pathname === "/parental-support"
                  ? "sub-nav-active"
                  : ""
              }   ${
                location.pathname === "/emotional-support"
                  ? "sub-nav-active"
                  : ""
              }`}
            >
              Career Counselling
              <i
                className={
                  dropdownStates.isDropdownOpenCareer
                    ? "fas fa-chevron-up"
                    : "fas fa-chevron-down"
                }
                style={{ paddingLeft: 5 }}
              ></i>
            </div>
            {dropdownStates.isDropdownOpenCareer && (
              <div className="dropdown-wrapper">
                <ul
                  className={`dropdown-menu ${
                    dropdownStates.isDropdownOpenCareer ? "active" : ""
                  }`}
                >
                  <li className="dropdown-item">
                    <NavLink
                      to="/parent"
                      className="sub-nav-links"
                      onClick={closeMobileMenu}
                    >
                      Parental Support
                    </NavLink>
                  </li>
                  <li className="dropdown-item">
                    <NavLink
                      to="/emotional"
                      className="sub-nav-links"
                      onClick={closeMobileMenu}
                    >
                      Emotional Support
                    </NavLink>
                  </li>
                  <li className="dropdown-item">
                    <NavLink
                      to="/Subject-selection"
                      className="sub-nav-links"
                      onClick={closeMobileMenu}
                    >
                      IB School & Subject Selection
                    </NavLink>
                  </li>
                  <li className="dropdown-item">
                    <NavLink
                      to="/Admission-Advice"
                      className="sub-nav-links"
                      onClick={closeMobileMenu}
                    >
                      University Admission Advice
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </li>
          
          <li className="nav-item">
            <NavLink
              to="/writing-support"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Writing Support
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
