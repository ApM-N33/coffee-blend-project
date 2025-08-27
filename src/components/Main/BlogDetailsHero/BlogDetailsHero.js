import React from "react"
import { useTranslation } from "react-i18next"
import { Parallax } from "react-parallax"
import { NavLink, Link } from "react-router-dom"

function BlogDetailsHero() {
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
          <h1 className="hero-title text-uppercase">
            {t("header.nav-link12")}
          </h1>
          <ul className="navbar-nav d-flex flex-row column-gap-3 align-items-center justify-content-center text-uppercase">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                {t("header.nav-link1")}
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/blog"} className="nav-link">
                {t("header.nav-link4")}
              </Link>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to={"/blog-details"}
              >
                {t("header.nav-link12")}
              </NavLink>
            </li>
          </ul>
        </div>
      </Parallax>
    </section>
  )
}

export default BlogDetailsHero
