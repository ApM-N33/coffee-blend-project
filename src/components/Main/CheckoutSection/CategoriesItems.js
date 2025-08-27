import React from "react"
import { useTranslation } from "react-i18next"

function CategoriesItems({ category, total }) {
  const { t } = useTranslation("common")
  return (
    <li
      className="category-item d-flex align-items-center justify-content-between"
      data-aos="flip-right"
    >
      {t(category)}
      <span>{`(${total})`}</span>
    </li>
  )
}

export default CategoriesItems
