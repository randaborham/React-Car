import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.module.css";
import img from "../../assesst/c7ef03beddef6648a51b9c672dfec93e.png";

export default function Nav() {
  return (
    <>
      {" "}
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-2">
        <div className="container">
          {/* <Link className="navbar-brand" to="">
      <img
        src={img}
        alt="logo"
        className="logo"
        width={273}
        height={82}
      />
    </Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bolder">
              <>
                {" "}
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="Home">
                    الرئيسية
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="Product"
                  >
                    السيارات
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="Blog">
                    العروض
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="Roots">
                    قطاع الاعمال
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="Company"
                  >
                    عن الشركة
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="Services"
                  >
                    الفروع
                  </NavLink>
                </li>
              </>
            </ul>
          </div>
          <Link className="navbar-brand" to="">
            <img
              src={img}
              alt="logo"
              className="logo"
              width={173}
              height={52}
            />
          </Link>
        </div>
      </nav>
    </>
  );
}
