import React from "react"
import HomeHeroSection from "../components/Main/HomeHeroSection/HomeHeroSection"
import HeroContactInfo from "../components/Main/HeroContactInfo/HeroContactInfo"
import OurStorySection from "../components/Main/OurStorySection/OurStorySection"
import OurMenuSection from "../components/Main/OurMenuSection/OurMenuSection"
import ServicesSection from "../components/Main/ServicesSection/ServicesSection"
import CounterSection from "../components/Main/CounterSection/CounterSection"
import CoffeeSelersSection from "../components/Main/CoffeeSelersSection/CoffeeSelersSection"
import GallerySection from "../components/Main/GallerySection.js/GallerySection"
import OurProductsSection from "../components/Main/OurProductsSection/OurProductsSection"
import CustomersSection from "../components/Main/CustomersSection/CustomersSection"
import RecentBlogSection from "../components/Main/RecentBlogSection/RecentBlogSection"
import BookingSection from "../components/Main/BookingSection/BookingSection"
import useOurProductsItems from "../hooks/useOurProductsItems"
import homeRecentItems from "../data/recent-blog-items.json"
import generateId from "../shared/generateId"

function Home({ showModalItem }) {
  const { t, homeItemsCategory, itemsCategoryBtns, showCategoryItems } =
    useOurProductsItems()

  return (
    <main className="main home-main">
      <HomeHeroSection />
      <HeroContactInfo />
      <OurStorySection />
      <ServicesSection />
      <OurMenuSection />
      <CounterSection />
      <CoffeeSelersSection />
      <GallerySection showModalItem={showModalItem} />
      <OurProductsSection
        t={t}
        itemsCategory={generateId(homeItemsCategory)}
        itemsCategoryBtns={itemsCategoryBtns}
        showCategoryItems={showCategoryItems}
      />
      <CustomersSection />
      <RecentBlogSection recentItems={homeRecentItems.slice(0, 3)} />
      <BookingSection />
    </main>
  )
}

export default Home
