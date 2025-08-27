import React from "react"
import { useTranslation } from "react-i18next"
import { FaLocationDot } from "react-icons/fa6"
import { FaPhoneAlt } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"

function FooterContacts() {
  const { t } = useTranslation("common")
  
  return (
    <div className="col-lg-3 col-md-6 col-12" data-aos="fade-up">
      <h2 className="footer-title">{t("footer.contact_info.title")}</h2>
      <ul className="contact-list list-unstyled">
        <li className="contact-item">
          <FaLocationDot className="contact-icon map" />
          {t("footer.contact_info.location")}
        </li>
        <li className="contact-item">
          <FaPhoneAlt className="contact-icon phone" />
          +2 392 3929 210
        </li>
        <li className="contact-item">
          <FaEnvelope className="contact-icon mail" />
          info@yourdomain.com
        </li>
      </ul>
    </div>
  )
}

export default FooterContacts
