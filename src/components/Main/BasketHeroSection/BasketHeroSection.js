import React from "react"
import { useTranslation } from "react-i18next"
import { Parallax } from "react-parallax"
import { NavLink, Link } from "react-router-dom"

function BasketHeroSection() {
  const { t } = useTranslation("common")
  return (
    <section className="hero-menu hero-basket">
      <Parallax
        className="parallax-bg w-100"
        bgImage="/images/bg_3.jpg"
        strength={500}
      >
        <div
          className="mainContainer position-relative d-flex flex-column justify-content-center align-items-center z-3"
          data-aos="fade-up"
        >
          <h1 className="hero-title text-uppercase">
            {t("header.nav-link11")}
          </h1>
          <ul className="navbar-nav d-flex flex-row column-gap-3 align-items-center justify-content-center text-uppercase">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                {t("header.nav-link1")}
              </Link>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to={"/basket"}
              >
                {t("header.nav-link11")}
              </NavLink>
            </li>
          </ul>
        </div>
      </Parallax>
    </section>
  )
}

export default BasketHeroSection
