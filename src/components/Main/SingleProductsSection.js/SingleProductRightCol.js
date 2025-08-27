import React from "react"
import { MdShoppingCart } from "react-icons/md"

function SingleProductRightCol({
  t,
  product,
  decrement,
  handleChange,
  increment,
  addToCart,
}) {
  return (
    <div className="col-lg-6 col-12 ps-5 product_data-col" data-aos="fade-down">
      <h3 className="product-title mb-2 text-uppercase">{t(product.title)}</h3>
      <p className="product-price">{`$${t(product.price)}`}</p>
      <p className="product-desc my-3">{t(product.desc)}</p>
      <p className="product-desc">{t(product.desc2)}</p>
      <select className="product-select my-3">
        <option value="Small">{t("single-products.oprion-text1")}</option>
        <option value="Medium">{t("single-products.oprion-text2")}</option>
        <option value="Large">{t("single-products.oprion-text3")}</option>
        <option value="Extra">{t("single-products.oprion-text4")}</option>
      </select>
      <div className="d-flex column-gap-2 align-items-center">
        <button onClick={() => decrement(product.id)} className="qty-btn">
          -
        </button>
        <input
          className="qty-input"
          value={product.quantity}
          onChange={(e) => handleChange(Number(e.target.value), product.id)}
          type="text"
        />
        <button onClick={() => increment(product.id)} className="qty-btn">
          +
        </button>
      </div>
      <button
        onClick={() => addToCart(product, product.quantity)}
        className="add-btn mt-3"
      >
        {t("single-products.btn_text")}
        <MdShoppingCart className="basket-icon ms-2" />
      </button>
    </div>
  )
}

export default SingleProductRightCol
