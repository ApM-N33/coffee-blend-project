import React from "react"
import OurStoryLeftImage from "./OurStoryLeftImage"
import OurStoryRightContent from "./OurStoryRightContent"

function OurStorySection() {
  return (
    <section className="our-story">
      <div className="container-fluid">
        <div className="row">
          <OurStoryLeftImage />
          <OurStoryRightContent />
        </div>
      </div>
    </section>
  )
}

export default OurStorySection
