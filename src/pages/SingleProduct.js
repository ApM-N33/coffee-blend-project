import React from "react"
import SingleProductHero from "../components/Main/SingleProductHero.js/SingleProductHero"
import SingleProductsSection from "../components/Main/SingleProductsSection.js/SingleProductsSection"

function SingleProduct() {
  return (
    <main className="main single-main">
      <SingleProductHero />
      <SingleProductsSection />
    </main>
  )
}

export default SingleProduct
