import React from "react"
import { RxHamburgerMenu } from "react-icons/rx"

function BurgerBtn() {
  return (
    <button
      className="burger-btn d-flex align-items-center d-lg-none text-uppercase"
      data-bs-toggle="collapse"
      data-bs-target="#collapseOne"
      aria-controls="collapseOne"
    >
      <RxHamburgerMenu className="burger-icon" />
      menu
    </button>
  )
}

export default BurgerBtn
