import React from "react"
import { useTranslation } from "react-i18next"

function HeroBgBtns({ btn_text }) {
  const { t } = useTranslation("common")
  return (
    <button className="hero-btn py-3 px-4" data-aos="fade-up">
      {t(btn_text)}
    </button>
  )
}

export default HeroBgBtns
