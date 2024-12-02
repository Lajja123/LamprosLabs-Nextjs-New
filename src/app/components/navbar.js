"use client";
import React from "react";
import { useEffect, useRef } from "react";
import "../styles/navbar.css";
// import logo from "../assets/images/logo.png";
import logo from "../../../public/mainLogo.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

function Navbar() {
  const navbarRef = useRef(null);
  const navBtnRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        // Clicked outside the navbar, close the menu
        const navbarToggler = document.getElementById("navbarNavDropdown");
        if (navbarToggler) {
          navbarToggler.classList.remove("show");
        }
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleNavClick = () => {
    if (window.innerWidth < 1024) {
      navBtnRef.current.click();
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg " ref={navbarRef}>
        <a className="navbar-brand navbar-logo" href="/">
          <Image src={logo} className="logo-img" alt="" />
        </a>
        <button
          className="navbar-toggler collapsed "
          ref={navBtnRef}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto ">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <li
              className={`nav-item three-d  ${pathname == "/" ? "active" : ""}`}
            >
              <Link
                className="nav-link "
                href="/"
                onClick={() => handleNavClick()}
              >
                HOME
              </Link>
            </li>
            <li
              className={`nav-item three-d  ${
                pathname == "/about-us" ? "active" : ""
              }`}
            >
              <Link
                className="nav-link "
                href="/about-us"
                onClick={() => handleNavClick()}
              >
                ABOUT US
              </Link>
            </li>
            <li
              className={`nav-item three-d ${
                pathname == "/governance" ? "active" : ""
              }`}
            >
              <Link
                className="nav-link"
                href="/governance"
                onClick={() => handleNavClick()}
              >
                GOVERNANCE
              </Link>
            </li>
            <li className={`nav-item three-d `}>
              <Link
                className="nav-link "
                href="https://lamprosdao.notion.site/a2d67afc0ed84377918b536341374f0e?v=6e84b9a6c7b648bd86dc9b20a4804124"
                onClick={() => handleNavClick()}
                target="blank"
              >
                CONTRIBUTIONS
              </Link>
            </li>

            <li className="nav-item dropdown three-d">
              <div
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                PROGRAM
              </div>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li
                  className={`dropdown-list three-d  ${
                    pathname == "/programs/hackathon" ? "active" : ""
                  }`}
                >
                  <Link
                    className="dropdown-item"
                    href="/programs/hackathon"
                    onClick={() => handleNavClick()}
                  >
                    HACKATHON
                  </Link>
                </li>
              </ul>
            </li>
         
            {/* <li
              className={`nav-item three-d ${
                pathname == "/dao-roadmap" ? "active" : ""
              }`}
            >
              <Link
                className="nav-link"
                href="/dao-roadmap"
                onClick={() => handleNavClick()}
              >
                DAO ROADMAP
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
