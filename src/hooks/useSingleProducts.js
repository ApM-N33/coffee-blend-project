import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { CartContext } from "../contexts/CartProvider"
import generateId from "../shared/generateId"
import coffeeItems from "../data/coffee-items.json"
import ourProductItems from "../data/our-products-items.json"

const generatedIdItems = generateId([...coffeeItems, ...ourProductItems]).map(
  (item) => ({
    ...item,
    img: item.coffeeImg || item.img,
    desc: "product-details.first_desc",
    desc2: "product-details.second_desc",
    quantity: 1,
  })
)

function useSingleProducts() {
  const { t } = useTranslation("common")
  const params = useParams()
  const { addToCart } = useContext(CartContext)
  const [items, setItems] = useState(generatedIdItems)

  const product = items.find((item) => item.id === params.id)

  const increment = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        }
        return item
      })
    )
  }

  const decrement = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
          }
        }
        return item
      })
    )
  }

  const handleChange = (val, id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: isNaN(val) ? 1 : val,
          }
        }
        return item
      })
    )
  }

  return {
    t,
    params,
    product,
    addToCart,
    increment,
    decrement,
    handleChange,
  }
}

export default useSingleProducts
