import React from "react"
import { useTranslation } from "react-i18next"

function FooterServices() {
  const { t } = useTranslation("common")
  return (
    <div className="col-lg-2 col-md-6 col-12 ps-md-4" data-aos="fade-up">
      <h2 className="footer-title">{t("footer.services.title")}</h2>
      <ul className="list-unstyled services-list">
        <li className="services-item">{t("footer.services.cooked")}</li>
        <li className="services-item">{t("footer.services.deliver")}</li>
        <li className="services-item">{t("footer.services.quality_foods")}</li>
        <li className="services-item">{t("footer.services.mixed")}</li>
      </ul>
    </div>
  )
}

export default FooterServices
