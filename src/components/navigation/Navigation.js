import {useState} from "react";
import "./navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  const [currentPage, setCurrentPage] = useState();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top py-3"
      id="mainNav"
    >
      <div className="container px-4 px-lg-5">
        <Link className={currentPage==="home" ? "navbar-brand selected-nav" : "navbar-brand navLink homeNav"} to="/" onClick={()=>setCurrentPage("home")}>
          Colleen Fimister
        </Link>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            <li className="nav-item">
              <Link className={currentPage==="about-me" ? "selected-nav" : "navLink"} to="/About" onClick={()=>setCurrentPage("about-me")}>
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className={currentPage==="portfolio" ? "selected-nav" : "navLink"} to="/Portfolio" onClick={()=>setCurrentPage("portfolio")}>
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className={currentPage==="contact" ? "selected-nav" : "navLink"} to="/Contact" onClick={()=>setCurrentPage("contact")}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className={currentPage==="resume" ? "selected-nav" : "navLink"} to="/Resume" onClick={()=>setCurrentPage("resume")}>
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
