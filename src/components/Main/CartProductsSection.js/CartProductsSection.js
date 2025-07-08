import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { CartContext } from "../../../contexts/CartProvider"
import CartHeader from "./CartHeader"
import CartBodyWrap from "./CartBodyWrap"
import CartTotalCheckList from "./CartTotalCheckList"

function CartProductsSection() {
  const { t } = useTranslation("common")
  const { cart } = useContext(CartContext)
  return (
    <section className="cart-products">
      <div className="mainContainer">
        <div className="d-lg-flex flex-lg-row flex-column justify-content-start justify-content-lg-between">
          <div className="cart-container">
            <CartHeader t={t} />
            <div className="cart-body">
              {cart.map((item) => (
                <CartBodyWrap key={item.id} t={t} {...item} />
              ))}
            </div>
          </div>
          <div className="cart_totals-list-wrap">
            <CartTotalCheckList />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartProductsSection
