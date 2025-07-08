import React, { useContext } from "react"
import { CartContext } from "../../../contexts/CartProvider"
import { Link } from "react-router-dom"

function OurProductsCards({
  isActive,
  img,
  title,
  desc,
  price,
  btn_text,
  MdShoppingCart,
  category_type,
  t,
  item,
}) {
  const { addToCart } = useContext(CartContext)

  return (
    <div
      className={`col-md-${
        category_type === "Coffee" ? 3 : 4
      } col-12 products_card-col ${isActive ? "active" : "hide"}`}
    >
      <div className="card products-card" data-aos="flip-left">
        <Link to={`/single-product/${item.id}`}>
          <img
            src={`/images/${img}`}
            className={`card-img-top object-fit-cover ${
              category_type === "Coffee" ? "coffee-img" : ""
            }`}
            alt=""
          />
        </Link>
        <div className="card-body px-0 pt-4 text-center">
          <h5 className="card-title text-uppercase">{t(title)}</h5>
          <p className="card-text">{t(desc)}</p>
          <p className="card_price-text my-3">
            <span className="price-currency">$</span>
            <span className="price-value">{price}</span>
          </p>
          <button
            onClick={() => addToCart(item)}
            className="cart-btn text-capitalize"
          >
            {t(btn_text)}
            <MdShoppingCart className="basket-icon" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default OurProductsCards
