import React from "react"
import { useTranslation } from "react-i18next"
import { Parallax } from "react-parallax"
import { NavLink, Link } from "react-router-dom"

function MenuHeroSection() {
  const { t } = useTranslation("common")
  return (
    <section className="hero-menu">
      <Parallax
        className="parallax-bg w-100"
        bgImage="/images/bg_3.jpg"
        strength={500}
      >
        <div
          className="mainContainer position-relative d-flex flex-column justify-content-center align-items-center z-3"
          data-aos="fade-up"
        >
          <h1 className="hero-title text-uppercase">{t("our-menu.title")}</h1>
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
                to={"/menu"}
              >
                {t("header.nav-link2")}
              </NavLink>
            </li>
          </ul>
        </div>
      </Parallax>
    </section>
  )
}

export default MenuHeroSection
