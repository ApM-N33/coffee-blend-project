import React from "react"

function OurProductsBtns({
  showCategoryItems,
  category_type,
  t,
  isActive,
  text,
}) {
  return (
    <li className="btn-item" data-aos="zoom-in">
      <button
        onClick={() => showCategoryItems(category_type)}
        className={`prod-btn py-2 px-3 ${isActive ? "active" : ""}`}
      >
        {t(text)}
      </button>
    </li>
  )
}

export default OurProductsBtns
