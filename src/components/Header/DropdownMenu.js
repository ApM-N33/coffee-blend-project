import React from "react"
import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"

function DropdownMenu() {
  const { t } = useTranslation("common")
  return (
    <ul
      className="dropdown-menu text-capitalize"
      aria-labelledby="navbarDropdown"
    >
      <li>
        <NavLink to={"/shop"} className="dropdown-item">
          {t("header.nav-link7")}
        </NavLink>
      </li>
      {/* <li>
        <NavLink to={"/single-product"} className="dropdown-item">
          {t("header.nav-link8")}
        </NavLink>
      </li> */}
      <li>
        <NavLink to={"/checkout"} className="dropdown-item">
          {t("header.nav-link9")}
        </NavLink>
      </li>
    </ul>
  )
}

export default DropdownMenu
