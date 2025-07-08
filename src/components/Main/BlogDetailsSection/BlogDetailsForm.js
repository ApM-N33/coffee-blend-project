import React from "react"
import { useTranslation } from "react-i18next"

function BlogDetailsForm() {
  const { t } = useTranslation("common")
  return (
    <div className="blog_form-wrap w-100" data-aos="flip-right">
      <h3 className="blog_form-title">{t("blog_details.leave_comment")}</h3>
      <form className="blog-form d-flex flex-column">
        <label>{t("blog_details.name")}</label>
        <input type="text" />
        <label>{t("blog_details.email")}</label>
        <input type="email" />
        <label>{t("blog_details.website")}</label>
        <input type="text" />
        <label>{t("blog_details.message")}</label>
        <textarea></textarea>
        <button className="post-btn">{t("blog_details.post_btn")}</button>
      </form>
    </div>
  )
}

export default BlogDetailsForm
