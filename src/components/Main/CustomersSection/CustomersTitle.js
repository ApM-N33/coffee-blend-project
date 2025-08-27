import React from "react"

function CustomersTitle({ t }) {
  return (
    <div className="col-12 text-center d-flex flex-column align-items-center">
      <span className="title-label" data-aos="zoom-in-down">
        {t("customers.title_label")}
      </span>
      <h2 className="customers-title text-uppercase" data-aos="zoom-in-down">
        {t("customers.title")}
      </h2>
      <p className="customers-desc" data-aos="zoom-in-down">
        {t("customers.desc")}
      </p>
    </div>
  )
}

export default CustomersTitle
