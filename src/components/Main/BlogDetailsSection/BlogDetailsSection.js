import React from "react"
import SidebarWidgets from "../CheckoutSection/SidebarWidgets"
import SidebarWidgetsContent from "../CheckoutSection/SidebarWidgetsContent"
import blog_details from "../../../data/blog-details.json"
import BlogDetailsCards from "./BlogDetailsCards"
import BlogTagBtns from "./BlogTagBtns"
import BlogAboutCheff from "./BlogAboutCheff"
import BlogComments from "./BlogComments"
import BlogDetailsForm from "./BlogDetailsForm"
import { useTranslation } from "react-i18next"

function BlogDetailsSection() {
  const { t } = useTranslation("common")
  return (
    <section className="blog-details checkout">
      <div className="mainContainer">
        <div className="row row-gap-4">
          <div className="col-lg-8 col-12 left-col">
            {blog_details.blog_items.map((item) => (
              <BlogDetailsCards key={item.id} {...item} />
            ))}
            <ul className="tag_btns-list mt-4 list-unstyled d-flex flex-wrap column-gap-2">
              {blog_details.tag_btns.map((item) => (
                <BlogTagBtns key={item.id} {...item} />
              ))}
            </ul>
            <BlogAboutCheff />
            <h3 className="comments-title">
              <span className="me-2">
                {blog_details.persons_comments.length}
              </span>
              {t(blog_details.comments_title)}
            </h3>
            {blog_details.persons_comments.map((item, i) => (
              <BlogComments key={item.id} {...item} i={i} />
            ))}
            <BlogDetailsForm />
          </div>
          <SidebarWidgetsContent>
            <SidebarWidgets />
          </SidebarWidgetsContent>
        </div>
      </div>
    </section>
  )
}

export default BlogDetailsSection
