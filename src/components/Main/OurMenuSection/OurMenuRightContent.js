import React from "react"
import coffeeItems from "../../../data/our-menu-items.json"
import OurMenuCoffeeImages from "./OurMenuCoffeeImages"

function OurMenuRightContent() {
  return (
    <div className="col-md-6 col-12">
      <div className="row row-gap-4 row-gap-lg-0">
        {coffeeItems.map((item) => (
          <OurMenuCoffeeImages key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default OurMenuRightContent
