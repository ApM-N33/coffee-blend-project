import React from "react"
import ShopHeroSection from "../components/Main/ShopHeroSection/ShopHeroSection"
import useOurProductsItems from "../hooks/useOurProductsItems"
import OurProductsSection from "../components/Main/OurProductsSection/OurProductsSection"
import generateId from "../shared/generateId"

function Shop() {
  const { t, shopItemsCategory, shopItemsCategoryBtns, showCategoryItems } =
    useOurProductsItems()

  return (
    <main className="main shop-main">
      <ShopHeroSection />
      <OurProductsSection
        t={t}
        itemsCategory={generateId(shopItemsCategory)}
        itemsCategoryBtns={shopItemsCategoryBtns}
        showCategoryItems={showCategoryItems}
      />
    </main>
  )
}

export default Shop
