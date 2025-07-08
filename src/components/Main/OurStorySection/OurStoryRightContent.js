import React from "react"
import { useTranslation } from "react-i18next"

function OurStoryRightContent() {
  const { t } = useTranslation("common")
  return (
    <div
      className="col-md-6 col-12 title-col d-flex align-items-center"
      data-aos="flip-right"
    >
      <div className="title-block">
        <span className="title-label">{t("our-story.title_label")}</span>
        <h2 className="our_story-title mb-5 text-uppercase">
          {t("our-story.title")}
        </h2>
        <p className="our_story-desc">{t("our-story.desc")}</p>
      </div>
    </div>
  )
}

export default OurStoryRightContent
