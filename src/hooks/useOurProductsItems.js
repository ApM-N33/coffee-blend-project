import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useLocation } from "react-router-dom"
import ourProductsBtns from "../data/our-products-btns.json"
import ourProductsItems from "../data/our-products-items.json"
import coffeeProductsItems from "../data/coffee-items.json"

function useOurProductsItems() {
  const { t } = useTranslation("common")
  const { pathname } = useLocation()
  const [homeItemsCategory, setHomeItemsCategory] = useState([])
  const [menuItemsCategory, setMenuItemsCategory] = useState([])
  const [shopItemsCategory, setShopItemsCategory] = useState([])
  const [shopItemsCategoryBtns, setShopItemsBtns] = useState([])
  const [itemsCategoryBtns, setItemsBtns] = useState([])

  const showCategoryItems = (category) => {
    setHomeItemsCategory(
      ourProductsItems
        .filter((item) => category === item.category_type)
        .slice(0, 3)
        .map((item) => ({ ...item, isActive: category === item.category_type }))
    )
    setMenuItemsCategory(
      ourProductsItems
        .filter((item) => category === item.category_type)
        .map((item) => ({ ...item, isActive: category === item.category_type }))
    )
    setShopItemsCategory(
      [...coffeeProductsItems, ...ourProductsItems]
        .map((item) => ({
          ...item,
          img: item.coffeeImg || item.img,
          isActive: category === item.category_type,
        }))
        .filter((item) => category === item.category_type)
    )
    setItemsBtns(
      ourProductsBtns
        .map((item) => ({
          ...item,
          isActive: category === item.category_type,
        }))
        .slice(1)
    )
    setShopItemsBtns(
      ourProductsBtns.map((item) => ({
        ...item,
        isActive: category === item.category_type,
      }))
    )
  }

  useEffect(() => {
    showCategoryItems(pathname === "/shop" ? "Coffee" : "Main Dish")
  }, [pathname])

  return {
    t,
    homeItemsCategory,
    menuItemsCategory,
    shopItemsCategory,
    itemsCategoryBtns,
    shopItemsCategoryBtns,
    showCategoryItems,
  }
}

export default useOurProductsItems
