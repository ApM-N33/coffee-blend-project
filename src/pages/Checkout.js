import React from "react"
import CheckoutHeroSection from "../components/Main/CheckoutHeroSection/CheckoutHeroSection"
import CheckoutSection from "../components/Main/CheckoutSection/CheckoutSection"

function Checkout() {
  return (
    <main className="main checkout-main">
      <CheckoutHeroSection />
      <CheckoutSection />
    </main>
  )
}

export default Checkout
