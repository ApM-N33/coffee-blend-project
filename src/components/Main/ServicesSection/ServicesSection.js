import React from "react"
import servicesItems from "../../../data/services-items.json"
import servicesIcons from "../../../assets/icons/icons.data"
import ServicesCards from "./ServicesCards"

function ServicesSection() {
  return (
    <section className="services">
      <div className="mainContainer">
        <div className="row row-gap-5 row-gap-md-0">
          {servicesItems.map((item) => (
            <ServicesCards
              key={item.id}
              {...item}
              Icon={servicesIcons[item.icon]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection



