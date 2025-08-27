import React from "react"
import menuCategoryItems from "../../../data/menu-category.json"
import { useTranslation } from "react-i18next"
import MenuCategoryCols from "./MenuCategoryCols"

function MenuCategorySection() {
  const { t } = useTranslation("common")
  return (
    <section className="menu-category">
      <div className="mainContainer">
        <div className="row row-gap-5">
          {menuCategoryItems.map((col) => (
            <MenuCategoryCols key={col.id} {...col} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuCategorySection
