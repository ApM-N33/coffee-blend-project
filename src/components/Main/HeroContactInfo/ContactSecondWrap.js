import React from "react"
import { useTranslation } from "react-i18next"

function ContactSecondWrap({ MdOutlineMyLocation }) {
  const { t } = useTranslation("common")
  return (
    <div className="contact_info-wrap" data-aos="fade-up">
      <span className="icon-wrap">
        <MdOutlineMyLocation className="icon location-icon" />
      </span>
      <div className="info-wrap">
        <h3 className="contact-title">
          {t("hero_contact-section.contact-title2")}
        </h3>
        <p className="contact-desc">
          {t("hero_contact-section.contact-desc2")}
        </p>
      </div>
    </div>
  )
}

export default ContactSecondWrap
