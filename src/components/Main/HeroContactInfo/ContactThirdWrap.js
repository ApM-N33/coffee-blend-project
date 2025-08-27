import React from "react"
import { useTranslation } from "react-i18next"

function ContactThirdWrap({ LuClock9 }) {
  const { t } = useTranslation("common")
  return (
    <div className="contact_info-wrap" data-aos="fade-up">
      <span className="icon-wrap">
        <LuClock9 className="icon clock-icon" />
      </span>
      <div className="info-wrap">
        <h3 className="contact-title">
          {t("hero_contact-section.contact-title3")}
        </h3>
        <p className="contact-desc">
          {t("hero_contact-section.contact-desc3")}
        </p>
      </div>
    </div>
  )
}

export default ContactThirdWrap
