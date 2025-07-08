import React from "react"
import { useTranslation } from "react-i18next"

function BlogAboutCheff() {
  const { t } = useTranslation("common")
  return (
    <div
      className="card cheffCard mt-5 flex-sm-row row-gap-4"
      data-aos="flip-right"
    >
      <img
        src="/images/cheff-5.jpg"
        className="cheff-img object-fit-cover"
        alt=""
      />
      <div className="card-body py-0 ps-sm-5 ps-0 pe-0">
        <h5 className="card-title">
          {t("blog_details.cheff_first_name")}{" "}
          {t("blog_details.cheff_last_name")}
        </h5>
        <p className="card-text">{t("blog_details.cheff_desc")}</p>
      </div>
    </div>
  )
}

export default BlogAboutCheff
