import React from "react"
import { useTranslation } from "react-i18next"

function ContactFirstWrap({ FaPhoneAlt }) {
  const { t } = useTranslation("common")
  return (
    <div className="contact_info-wrap" data-aos="fade-up">
      <span className="icon-wrap">
        <FaPhoneAlt className="icon phone-icon" />
      </span>
      <div className="info-wrap">
        <h3 className="contact-title">000 (123) 456 7890</h3>
        <p className="contact-desc">
          {t("hero_contact-section.contact-desc1")}
        </p>
      </div>
    </div>
  )
}

export default ContactFirstWrap
