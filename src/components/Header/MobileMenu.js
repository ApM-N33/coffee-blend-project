import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
import { MdShoppingCart } from "react-icons/md"
import DropdownMenu from "./DropdownMenu"
import DropdownLang from "./DropdownLang"
import useLanguage from "../../hooks/useLanguage"
import useCollapse from "../../hooks/useCollapse"
import { CartContext } from "../../contexts/CartProvider"

function MobileMenu() {
  const { t } = useTranslation("common")
  const { lang, changeLangText } = useLanguage()
  const { accordionRef } = useCollapse()
  const { cart } = useContext(CartContext)
  return (
    <div className="mainContainer d-block d-lg-none">
      <div className="accordion" id="accordionExample">
        <div
          ref={accordionRef}
          id="collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <ul className="mobile-menu text-uppercase list-unstyled">
            <li className="nav-item home-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to={"/"}
              >
                {t("header.nav-link1")}
              </NavLink>
            </li>
            <li className="nav-item menu-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to={"/menu"}
              >
                {t("header.nav-link2")}
              </NavLink>
            </li>
            <li className="nav-item services-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to={"/services"}
              >
                {t("header.nav-link3")}
              </NavLink>
            </li>
            <li className="nav-item blog-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to={"/blog"}
              >
                {t("header.nav-link4")}
              </NavLink>
            </li>
            <li className="nav-item about-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to={"/about"}
              >
                {t("header.nav-link5")}
              </NavLink>
            </li>
            <li className="nav-item dropdown shop-item">
              <button
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                className="nav-link w-100 text-start dropdown-toggle text-uppercase"
              >
                {t("header.nav-link6")}
              </button>
              <DropdownMenu />
            </li>
            <li className="nav-item contact-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to={"/contact"}
              >
                {t("header.nav-link10")}
              </NavLink>
            </li>
            <li className="nav-item dropdown lang-item">
              <button
                id="dropdownLanguage"
                data-bs-toggle="dropdown"
                className="nav-link w-100 text-start dropdown-toggle text-uppercase"
              >
                {lang}
              </button>
              <DropdownLang changeLangText={changeLangText} />
            </li>
            <li className="nav-item cart-item">
              <Link
                className={`nav-link d-inline-block position-relative`}
                to={"/basket"}
              >
                <MdShoppingCart className="basket-icon" />
                <span className="total-cart">{cart.length}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
