import React, { useContext } from "react"
import { CartContext } from "../../../contexts/CartProvider"
import { Link } from "react-router-dom"

function CoffeeSelersCards({
  coffeeImg,
  title,
  desc,
  price,
  btn_text,
  t,
  MdShoppingCart,
  item,
}) {
  const { addToCart } = useContext(CartContext)

  return (
    <div className="col-md-3 col-12" data-aos="flip-up">
      <div className="card coffee-card">
        <Link to={`/single-product/${item.id}`}>
          <img
            src={`/images/${coffeeImg}`}
            className="card-img-top object-fit-cover"
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

export default CoffeeSelersCards
