import React from "react"
import MenuCategoryCards from "./MenuCategoryCards"

function MenuCategoryCols({ t, category_title, category_items }) {
  return (
    <div className="col-md-6 col-12">
      <h3 className="category-title mb-5 text-uppercase">
        {t(category_title)}
      </h3>
      {category_items.map((item) => (
        <MenuCategoryCards key={item.id} {...item} t={t} />
      ))}
    </div>
  )
}

export default MenuCategoryCols
