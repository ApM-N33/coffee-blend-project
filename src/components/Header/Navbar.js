import { Link, NavLink } from "react-router-dom"
import { MdShoppingCart } from "react-icons/md"
import DropdownMenu from "./DropdownMenu"
import DropdownLang from "./DropdownLang"
import useLanguage from "../../hooks/useLanguage"
import { useTranslation } from "react-i18next"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartProvider"

function Navbar() {
  const { lang, changeLangText } = useLanguage()
  const { cart } = useContext(CartContext)
  const { t } = useTranslation("common")
  return (
    <ul className="navbar-nav d-none d-lg-flex flex-row flex-wrap text-uppercase">
      <li className="nav-item">
        <NavLink
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          to={"/"}
        >
          {t("header.nav-link1")}
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          to={"/menu"}
        >
          {t("header.nav-link2")}
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          to={"/services"}
        >
          {t("header.nav-link3")}
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          to={"/blog"}
        >
          {t("header.nav-link4")}
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          to={"/about"}
        >
          {t("header.nav-link5")}
        </NavLink>
      </li>
      <li className="nav-item dropdown">
        <button
          id="navbarDropdown"
          data-bs-toggle="dropdown"
          className="nav-link dropdown-toggle text-uppercase"
        >
          {t("header.nav-link6")}
        </button>
        <DropdownMenu />
      </li>
      <li className="nav-item">
        <NavLink
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          to={"/contact"}
        >
          {t("header.nav-link10")}
        </NavLink>
      </li>
      <li className="nav-item dropdown">
        <button
          id="dropdownLanguage"
          data-bs-toggle="dropdown"
          className="nav-link dropdown-toggle text-uppercase"
        >
          {lang}
        </button>
        <DropdownLang changeLangText={changeLangText} />
      </li>
      <li className="nav-item">
        <Link className={`nav-link position-relative`} to={"/basket"}>
          <MdShoppingCart className="basket-icon" />
          <span className="total-cart">{cart.length}</span>
        </Link>
      </li>
    </ul>
  )
}

export default Navbar
