import React, { useContext } from "react"
import { CartContext } from "../../../contexts/CartProvider"
import { useTranslation } from "react-i18next"

function CartTotalCheckList() {
  const { cartCheck } = useContext(CartContext)
  const { t } = useTranslation("common")
  const { subtotal, delivery, discount, allItemsTotalPrice } = cartCheck
  return (
    <>
      <div className="cart_totals-list" data-aos="flip-up">
        <h3 className="total_list-title text-uppercase mb-2">
          {t("cart-checklist.title")}
        </h3>
        <ul className="check-list list-unstyled">
          <li className="list-item">
            {t("cart-checklist.subtotal")}
            <span>
              <span>$</span>
              {Number(parseFloat(subtotal).toFixed(6))}
            </span>
          </li>
          <li className="list-item">
            {t("cart-checklist.delivery")}
            <span>
              <span>$</span>
              {delivery}
            </span>
          </li>
          <li className="list-item">
            {t("cart-checklist.discount")}
            <span>
              <span>$</span>
              {discount}
            </span>
          </li>
          <li className="list-item text-uppercase">
            {t("cart-checklist.total")}
            <span>
              <span>$</span>
              {Number(parseFloat(allItemsTotalPrice).toFixed(6)) < 0
                ? 0
                : Number(parseFloat(allItemsTotalPrice).toFixed(6))}
            </span>
          </li>
        </ul>
      </div>
      <button className="checkout-btn" type="submit">
        {t("cart-checklist.btn-text")}
      </button>
    </>
  )
}

export default CartTotalCheckList
