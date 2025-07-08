import NavBrand from "./NavBrand"
import Navbar from "./Navbar"
import MobileMenu from "./MobileMenu"
import BurgerBtn from "./BurgerBtn"
import useFixedHeader from "../../hooks/useFixedHeader"

function Header() {
  const { isFixed } = useFixedHeader()
  return (
    <header
      className={`header w-100 position-absolute start-0 top-0 ${isFixed} `}
    >
      <nav className="navbar navbar-expand-lg">
        <div className="mainContainer position-relative d-flex align-items-center justify-content-between">
          <NavBrand />
          <Navbar />
          <BurgerBtn />
        </div>
        <MobileMenu />
      </nav>
    </header>
  )
}

export default Header
