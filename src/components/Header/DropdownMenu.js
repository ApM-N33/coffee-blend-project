import React from "react"
import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"
import useScrollToTop from "../../hooks/useScrollToTop"

function DropdownMenu() {
  const { t } = useTranslation("common")
  const { scrollToTop } = useScrollToTop()
  return (
    <ul
      className="dropdown-menu text-capitalize"
      aria-labelledby="navbarDropdown"
    >
      <li>
        <NavLink to={"/shop"} className="dropdown-item" onClick={scrollToTop}>
          {t("header.nav-link7")}
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/checkout"}
          className="dropdown-item"
          onClick={scrollToTop}
        >
          {t("header.nav-link9")}
        </NavLink>
      </li>
    </ul>
  )
}

export default DropdownMenu
