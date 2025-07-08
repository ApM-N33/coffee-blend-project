import React, { useContext } from "react"
import { CartContext } from "../../contexts/CartProvider"

function NotificationModal() {
  const { notification, isShow } = useContext(CartContext)
  return (
    <div className={`notification-modal ${isShow ? "active" : ""}`}>
      <p className="text-capitalize text-center">{notification}</p>
    </div>
  )
}

export default NotificationModal
