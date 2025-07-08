import React from "react"
import MenuHeroSection from "../components/Main/MenuHeroSection/MenuHeroSection"
import HeroContactInfo from "../components/Main/HeroContactInfo/HeroContactInfo"
import MenuCategorySection from "../components/Main/MenuCategorySection/MenuCategorySection"
import OurProductsSection from "../components/Main/OurProductsSection/OurProductsSection"
import useOurProductsItems from "../hooks/useOurProductsItems"
import generateId from "../shared/generateId"

function Menu() {
  const { t, menuItemsCategory, itemsCategoryBtns, showCategoryItems } =
    useOurProductsItems()

  return (
    <main className="main menu-main">
      <MenuHeroSection />
      <HeroContactInfo />
      <MenuCategorySection />
      <OurProductsSection
        t={t}
        itemsCategory={generateId(menuItemsCategory)}
        itemsCategoryBtns={itemsCategoryBtns}
        showCategoryItems={showCategoryItems}
      />
    </main>
  )
}

export default Menu
