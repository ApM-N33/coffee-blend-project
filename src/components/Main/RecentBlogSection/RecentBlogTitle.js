import React from "react"

function RecentBlogTitle({ t }) {
  return (
    <div className="col-12 d-flex flex-column align-items-center text-center">
      <h2
        className="recent_blog-title text-uppercase"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        {t("recent-blog.title")}
      </h2>
      <p
        className="recent_blog-desc"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        {t("recent-blog.desc")}
      </p>
    </div>
  )
}

export default RecentBlogTitle
