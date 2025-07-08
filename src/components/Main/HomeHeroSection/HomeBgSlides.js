import React from "react"
import { useTranslation } from "react-i18next"
import HeroBgBtns from "./HeroBgBtns"

function HomeBgSlides({
  hero_bg,
  hero_title,
  hero_subtitle,
  hero_desc,
  hero_btns,
}) {
  const { t } = useTranslation("common")
  return (
    <div className="hero_bg-wrap">
      <div
        className="hero-bg w-100 d-flex justify-content-center align-items-center position-relative"
        style={{ backgroundImage: `url(/images/${hero_bg})` }}
      >
        <div className="mainContainer d-flex flex-column align-items-center position-relative text-center">
          <span className="title-label" data-aos="fade-up">
            {t(hero_title)}
          </span>
          <h1 className="hero-title text-uppercase" data-aos="fade-up">
            {t(hero_subtitle)}
          </h1>
          <p className="hero-desc mt-4 mb-5" data-aos="fade-up">
            {t(hero_desc)}
          </p>
          <div>
            {hero_btns.map((btn) => (
              <HeroBgBtns key={btn.id} {...btn} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBgSlides

// data-aos="fade-up"
