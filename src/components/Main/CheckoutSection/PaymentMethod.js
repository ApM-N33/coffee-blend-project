import React from "react"
import { useTranslation } from "react-i18next"

function PaymentMethod() {
  const { t } = useTranslation("common")
  return (
    <div className="payment_form-wrap p-4 w-100">
      <h3 className="payment-title mb-4 text-uppercase">
        {t("checkout.payment_method")}
      </h3>
      <form className="payment-form d-flex flex-column">
        <label>
          <input type="radio" name="payment" value={" Direct Bank Tranfer"} />
          {t("checkout.direct_bank_tranfer")}
        </label>
        <label>
          <input type="radio" name="payment" value={"Check Payment"} />
          {t("checkout.check_payment")}
        </label>
        <label>
          <input type="radio" name="payment" value={"Paypal"} />
          {t("checkout.paypal")}
        </label>
        <label>
          <input type="checkbox" />
          {t("checkout.read_and_accept")}
        </label>
        <button className="sbmt-btn py-3 px-4 w-100" type="submit">
          {t("checkout.place_an_order")}
        </button>
      </form>
    </div>
  )
}

export default PaymentMethod
