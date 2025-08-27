import { useContext } from "react"
import { CartContext } from "../../../contexts/CartProvider"

function CartBodyWrap({
  t,
  id,
  img,
  title,
  desc,
  price,
  quantity,
  totalPrice,
}) {
  const { deleteItemFromCart, decrement, increment, handleChange } =
    useContext(CartContext)
  return (
    <div className="cart_body-wrap">
      <div className="cart-col first-col">
        <button onClick={() => deleteItemFromCart(id)} className="del-btn">
          X
        </button>
      </div>
      <div className="cart-col second-col">
        <img className="prod-img" src={`images/${img}`} alt="" />
      </div>
      <div className="cart-col third-col">
        <h3 className="prod-title">{t(title)}</h3>
        <p className="prod-desc">{t(desc)}</p>
      </div>
      <div className="cart-col fourth-col">
        <span className="price-text">$ {price}</span>
      </div>
      <div className="cart-col fifth-col">
        <button onClick={() => decrement(id)} className="decrement-btn">
          -
        </button>
        <input
          type="text"
          value={quantity}
          className="quantity-input"
          onChange={(e) => handleChange(Number(e.target.value), id)}
        />
        <button onClick={() => increment(id)} className="increment-btn">
          +
        </button>
      </div>
      <div className="cart-col sixth-col">
        <span className="price-text">
          $ {Number(parseFloat(totalPrice).toFixed(6))}
        </span>
      </div>
    </div>
  )
}

export default CartBodyWrap
