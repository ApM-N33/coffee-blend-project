import React from "react"
import { useTranslation } from "react-i18next"

function BillingDetailsForm() {
  const { t } = useTranslation("common")
  return (
    <div
      className="billing_form-wrap w-100 p-5"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <h3 className="billing_details-title mb-3 text-uppercase">
        {t("checkout.billing_details")}
      </h3>
      <form className="billing-form w-100">
        <div className="row">
          <div className="col-lg-6 col-12">
            <label>{t("checkout.first_name")}</label>
            <input type="text" />
          </div>
          <div className="col-lg-6 col-12">
            <label>{t("checkout.last_name")}</label>
            <input type="text" />
          </div>
          <div className="col-12">
            <label>{t("checkout.state_country")}</label>
            <select>
              <option>{t("checkout.france")}</option>
              <option>{t("checkout.russia")}</option>
              <option>{t("checkout.germany")}</option>
              <option>{t("checkout.armenia")}</option>
            </select>
          </div>
          <div className="col-12">
            <label>{t("checkout.street_address")}</label>
            <div className="row row-gap-3">
              <div className="col-lg-6 col-12">
                <input type="text" placeholder={t("checkout.placeholder1")} />
              </div>
              <div className="col-lg-6 col-12">
                <input type="text" placeholder={t("checkout.placeholder2")} />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <label>{t("checkout.town_city")}</label>
            <input type="text" />
          </div>
          <div className="col-lg-6 col-12">
            <label>{t("checkout.post_code")}</label>
            <input type="text" />
          </div>
          <div className="col-lg-6 col-12">
            <label>{t("checkout.phone")}</label>
            <input type="text" />
          </div>
          <div className="col-lg-6 col-12">
            <label>{t("checkout.email_address")}</label>
            <input type="text" />
          </div>
          <div className="col-auto mt-4">
            <label className="me-4">
              <input
                className="radio-input me-2"
                type="radio"
                name="building"
                value={"Create an Account?"}
              />
              {t("checkout.create_an_account")}
            </label>
            <label>
              <input
                className="radio-input me-2"
                type="radio"
                name="building"
                value={"Ship to different address"}
              />
              {t("checkout.ship_to_different")}
            </label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default BillingDetailsForm
