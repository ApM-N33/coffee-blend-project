import React from "react"

function OurProductsTitleCol({ t }) {
  return (
    <div className="col-12 d-flex flex-column align-items-center text-center">
      <span className="title-label" data-aos="flip-right">
        {t("our-products.title_label")}
      </span>
      <h2 className="our_prod-title text-uppercase" data-aos="flip-right">
        {t("our-products.title")}
      </h2>
      <p className="our_prod-desc" data-aos="flip-right">
        {t("our-products.desc")}
      </p>
    </div>
  )
}

export default OurProductsTitleCol
