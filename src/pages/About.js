import React from "react"
import AboutHeroSection from "../components/Main/AboutHeroSection/AboutHeroSection"
import OurStorySection from "../components/Main/OurStorySection/OurStorySection"
import CustomersSection from "../components/Main/CustomersSection/CustomersSection"
import OurMenuSection from "../components/Main/OurMenuSection/OurMenuSection"
import CounterSection from "../components/Main/CounterSection/CounterSection"

function About() {
  return (
    <main className="main about-main">
      <AboutHeroSection />
      <OurStorySection />
      <CustomersSection />
      <OurMenuSection />
      <CounterSection />
    </main>
  )
}

export default About
