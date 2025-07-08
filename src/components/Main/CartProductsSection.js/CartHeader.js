import React from "react"

function CartHeader({ t }) {
  return (
    <div className="cart-header w-100" data-aos="flip-down">
      <div className="cart-col first-col"></div>
      <div className="cart-col second-col"></div>
      <div className="cart-col third-col">
        <p>{t("cart-section.cart-product")}</p>
      </div>
      <div className="cart-col fourth-col">
        <p>{t("cart-section.cart-price")}</p>
      </div>
      <div className="cart-col fifth-col">
        <p>{t("cart-section.cart-quantity")}</p>
      </div>
      <div className="cart-col sixth-col">
        <p>{t("cart-section.cart-total")}</p>
      </div>
    </div>
  )
}

export default CartHeader
