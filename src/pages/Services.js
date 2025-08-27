import React from "react"
import ServicesHeroSection from "../components/Main/ServicesHeroSection/ServicesHeroSection"
import ServicesSection from "../components/Main/ServicesSection/ServicesSection"

function Services() {
  return (
    <main className="main services-main">
      <ServicesHeroSection />
      <ServicesSection />
    </main>
  )
}

export default Services
