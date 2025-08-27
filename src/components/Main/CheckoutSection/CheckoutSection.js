import React from "react"
import BillingDetailsForm from "./BillingDetailsForm"
import CartTotalCheckList from "../CartProductsSection.js/CartTotalCheckList"
import PaymentMethod from "./PaymentMethod"
import SidebarWidgets from "./SidebarWidgets"
import SidebarWidgetsContent from "./SidebarWidgetsContent"

function CheckoutSection() {
  return (
    <section className="blog-details checkout">
      <div className="mainContainer">
        <div className="row">
          <div className="col-lg-8 col-12 left-col">
            <BillingDetailsForm />
            <div className="row row-gap-4 mt-5">
              <div className="col-md-6 col-12 d-flex cart-products">
                <CartTotalCheckList />
              </div>
              <div className="col-md-6 col-12 d-flex">
                <PaymentMethod />
              </div>
            </div>
          </div>
          <SidebarWidgetsContent>
            <SidebarWidgets />
          </SidebarWidgetsContent>
        </div>
      </div>
    </section>
  )
}

export default CheckoutSection
