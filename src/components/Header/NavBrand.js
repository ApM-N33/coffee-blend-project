import React from "react"
import { Link } from "react-router-dom"
import useScrollToTop from "../../hooks/useScrollToTop"

function NavBrand() {
  const { scrollToTop } = useScrollToTop()
  return (
    <Link
      onClick={scrollToTop}
      className="navbar-brand py-0 me-0 overflow-hidden text-uppercase d-inline-block"
      to={"/"}
    >
      <img
        className="navbrand-img w-100 h-100 object-fit-cover"
        src="/images/navbrandlogo.png"
        alt=""
      />
    </Link>
  )
}

export default NavBrand
