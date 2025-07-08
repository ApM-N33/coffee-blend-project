import React from "react"
import SearchingForm from "./SearchingForm"
import CategoriesItems from "./CategoriesItems"
import RecentItems from "./RecentItems"
import TagCloudItems from "./TagCloudItems"
import sidebar_widgets from "../../../data/sidebar-widgets.json"
import { useTranslation } from "react-i18next"

function SidebarWidgets() {
  const { t } = useTranslation("common")
  return (
    <>
      <SearchingForm />
      <h3 className="sidebar-title text-capitalize">
        {t(sidebar_widgets.categories_title)}
      </h3>
      <ul className="categories-list d-flex flex-column row-gap-4 list-unstyled">
        {sidebar_widgets.categories_items.map((item) => (
          <CategoriesItems key={item.id} {...item} />
        ))}
      </ul>
      <h3 className="sidebar-title text-capitalize">
        {t(sidebar_widgets.recent_blog_title)}
      </h3>
      {sidebar_widgets.recent_blog_items.map((item) => (
        <RecentItems key={item.id} {...item} />
      ))}
      <h3 className="sidebar-title text-capitalize">
        {t(sidebar_widgets.tag_cloud_title)}
      </h3>
      <ul className="tag_cloud-list d-flex flex-wrap list-unstyled">
        {sidebar_widgets.tag_cloud_items.map((item) => (
          <TagCloudItems key={item.id} {...item} />
        ))}
      </ul>
      <h3 className="sidebar-title text-capitalize">
        {t(sidebar_widgets.paragraph_title)}
      </h3>
      <p className="paragraph-text">{t(sidebar_widgets.paragraph_text)}</p>
    </>
  )
}

export default SidebarWidgets
