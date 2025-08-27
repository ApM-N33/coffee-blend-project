import BasketHeroSection from "../components/Main/BasketHeroSection/BasketHeroSection"
import CartProductsSection from "../components/Main/CartProductsSection.js/CartProductsSection"

function Basket() {
  return (
    <main className="main basket-main">
      <BasketHeroSection />
      <CartProductsSection />
    </main>
  )
}

export default Basket
