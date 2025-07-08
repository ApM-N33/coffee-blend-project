// import { createContext, useEffect, useState } from "react"
// import { useTranslation } from "react-i18next"

// const CartContext = createContext()

// function CartProvider({ children }) {
//   const { t } = useTranslation("common")
//   const [cart, setCart] = useState(
//     JSON.parse(localStorage.getItem("CART_PRODUCTS")) || []
//   )
//   const [notification, setNotification] = useState("")
//   const [isShow, setShow] = useState(false)

//   useEffect(() => {
//     localStorage.setItem("CART_PRODUCTS", JSON.stringify(cart))
//   }, [cart])

//   useEffect(() => {
//     const timeOut = setTimeout(() => {
//       if (isShow) setShow(false)
//     }, 1300)
//     return () => clearTimeout(timeOut)
//   }, [isShow])

//   const addToCart = (product) => {
//     const foundItem = cart.find((item) => item.id === product.id)
//     if (foundItem) {
//       setCart(
//         cart.map((item) => {
//           if (item.id === product.id) {
//             return {
//               ...item,
//               quantity: item.quantity + 1,
//               totalPrice: (item.quantity + 1) * item.price,
//             }
//           }
//           return item
//         })
//       )
//       setShow(true)
//       setNotification(t("notification-modal.second_text"))
//     } else {
//       setCart([
//         ...cart,
//         {
//           ...product,
//           img: product.coffeeImg || product.img,
//           quantity: 1,
//           totalPrice: product.price,
//         },
//       ])
//       setShow(true)
//       setNotification(t("notification-modal.first_text"))
//     }
//   }

//   const increment = (id) => {
//     setCart(
//       cart.map((item) => {
//         if (item.id === id) {
//           return {
//             ...item,
//             quantity: item.quantity + 1,
//             totalPrice: (item.quantity + 1) * item.price,
//           }
//         }
//         return item
//       })
//     )
//   }

//   const decrement = (id) => {
//     setCart(
//       cart.map((item) => {
//         if (item.id === id) {
//           return {
//             ...item,
//             quantity: item.quantity > 1 ? item.quantity - 1 : 1,
//             totalPrice:
//               item.quantity > 1 ? item.totalPrice - item.price : item.price,
//           }
//         }
//         return item
//       })
//     )
//   }

//   const handleChange = (val, id) => {
//     setCart(
//       cart.map((item) => {
//         if (item.id === id) {
//           return {
//             ...item,
//             quantity: isNaN(val) ? 1 : val,
//           }
//         }
//         return item
//       })
//     )
//   }

//   const deleteItemFromCart = (id) => {
//     setCart(cart.filter((item) => item.id !== id))
//   }

//   const cartItemsTotalPrice = cart.reduce((acc, item) => {
//     return acc + item.totalPrice
//   }, 0)

//   useEffect(() => {
//     window.addEventListener("storage", (e) => {
//       if (e.key === "CART_PRODUCTS") {
//         const updatedCarts = JSON.parse(e.newValue)
//         setCart(updatedCarts)
//       }
//     })
//   }, [])

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         increment,
//         decrement,
//         handleChange,
//         deleteItemFromCart,
//         cartItemsTotalPrice,
//         notification,
//         isShow,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   )
// }

// export { CartProvider, CartContext }

////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

import { createContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

const CartContext = createContext()

function CartProvider({ children }) {
  const { t } = useTranslation("common")
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("CART_PRODUCTS")) || []
  )
  const [notification, setNotification] = useState("")
  const [isShow, setShow] = useState(false)

  useEffect(() => {
    localStorage.setItem("CART_PRODUCTS", JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (isShow) setShow(false)
    }, 1300)
    return () => clearTimeout(timeOut)
  }, [isShow])

  const addToCart = (product, qty = 1) => {
    const foundItem = cart.find((item) => item.id === product.id)
    if (foundItem) {
      setCart(
        cart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + qty,
              totalPrice: (item.quantity + qty) * item.price,
            }
          }
          return item
        })
      )
      setShow(true)
      setNotification(t("notification-modal.second_text"))
    } else {
      setCart([
        ...cart,
        {
          ...product,
          img: product.coffeeImg || product.img,
          quantity: qty,
          totalPrice: qty * product.price,
        },
      ])
      setShow(true)
      setNotification(t("notification-modal.first_text"))
    }
  }

  const increment = (id) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: (item.quantity + 1) * item.price,
          }
        }
        return item
      })
    )
  }

  const decrement = (id) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
            totalPrice:
              item.quantity > 1 ? (item.quantity - 1) * item.price : item.price,
          }
        }
        return item
      })
    )
  }

  const handleChange = (val, id) => {
    setCart(
      cart.map((item) => {
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

  const deleteItemFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const cartItemsTotalPrice = cart.reduce((acc, item) => {
    return acc + item.totalPrice
  }, 0)

  // useEffect(() => {
  //   window.addEventListener("storage", (e) => {
  //     if (e.key === "CART_PRODUCTS") {
  //       const updatedCarts = JSON.parse(e.newValue)
  //       setCart(updatedCarts)
  //     }
  //   })
  // }, [])

  const cartCheck = {
    subtotal: cartItemsTotalPrice,
    delivery: 0,
    discount: 3,
    total: () => cartItemsTotalPrice - cartCheck.discount,
  }
  cartCheck.allItemsTotalPrice = cartCheck.total()

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCheck,
        addToCart,
        increment,
        decrement,
        handleChange,
        deleteItemFromCart,
        notification,
        isShow,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext }
