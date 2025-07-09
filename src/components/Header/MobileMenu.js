import useCollapse from "../../hooks/useCollapse"
import NavItems from "./NavItems"

function MobileMenu() {
  const { accordionRef } = useCollapse()
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
            <NavItems />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
