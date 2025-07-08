import React from "react"
import { useTranslation } from "react-i18next"

function FooterBottomText() {
  const { t } = useTranslation("common")
  return (
    <div className="col-12 text-center" data-aos="fade-up">
      <p className="footer_bottom-text">{t("footer.copyright")}</p>
    </div>
  )
}

export default FooterBottomText
