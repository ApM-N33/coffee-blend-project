import React from "react"
import OurMenuLeftContent from "./OurMenuLeftContent"
import OurMenuRightContent from "./OurMenuRightContent"

function OurMenuSection() {
  return (
    <section className="our-menu">
      <div className="mainContainer">
        <div className="row">
          <OurMenuLeftContent />
          <OurMenuRightContent />
        </div>
      </div>
    </section>
  )
}

export default OurMenuSection
