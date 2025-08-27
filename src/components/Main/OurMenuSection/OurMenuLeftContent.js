import React from "react"
import { useTranslation } from "react-i18next"

function OurMenuLeftContent() {
  const { t } = useTranslation("common")
  return (
    <div className="col-md-6 col-12 pe-md-5 d-flex flex-column justify-content-center align-items-end text-end">
      <span className="title-label" data-aos="fade-up">
        {t("our-menu.title_label")}
      </span>
      <h2 className="our_menu-title text-uppercase" data-aos="fade-up">
        {t("our-menu.title")}
      </h2>
      <p className="our_menu-desc mt-xl-5 mb-4" data-aos="fade-up">
        {t("our-menu.desc")}
      </p>
      <button
        className="menu-btn text-capitalize py-3 px-4 mb-3 mb-md-0"
        data-aos="fade-up"
      >
        {t("our-menu.btn_text")}
      </button>
    </div>
  )
}

export default OurMenuLeftContent
