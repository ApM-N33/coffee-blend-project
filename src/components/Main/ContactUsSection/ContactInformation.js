import React from "react"
import { useTranslation } from "react-i18next"

function ContactInformation() {
  const { t } = useTranslation("common")
  return (
    <div
      className="col-md-5 col-12"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <h2 className="contact_info-title">{t("contact_us.contact_info")}</h2>
      <ul className="contact_list list-unstyled">
        <li className="contact-item street_address-item">
          {t("contact_us.address")}{" "}
          <span>{t("contact_us.street_address")}</span>
        </li>
        <li className="contact-item">
          {t("contact_us.phone")}{" "}
          <a className="contact-link" href="tel:+ 1235 2355 98">
            + 1235 2355 98
          </a>
        </li>
        <li className="contact-item">
          {t("contact_us.email")}{" "}
          <a className="contact-link" href="mailto:info@yoursite.com">
            info@yoursite.com
          </a>
        </li>
        <li className="contact-item">
          {t("contact_us.website")}{" "}
          <a className="contact-link" href="https://colorlib.com/">
            Colorib
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ContactInformation
