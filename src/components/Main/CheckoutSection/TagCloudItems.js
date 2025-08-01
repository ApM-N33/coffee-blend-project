import React from "react"
import { useTranslation } from "react-i18next"

function TagCloudItems({ text }) {
  const { t } = useTranslation("common")
  return (
    <li className="tag-item" data-aos="flip-right">
      <button className="tag-btn">{t(text)}</button>
    </li>
  )
}

export default TagCloudItems
