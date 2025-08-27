import React from "react"
import { useTranslation } from "react-i18next"

function BlogDetailsCards({ title, img, desc1, desc2, desc3, desc4, desc5 }) {
  const { t } = useTranslation("common")
  return (
    <div className="card blogCard" data-aos="flip-right">
      <h2 className="card-title mb-4">{t(title)}</h2>
      <p className="card-text">{t(desc1)}</p>
      <img
        src={`/images/${img}`}
        className="card--img object-fit-cover"
        alt=""
      />
      <p className="card-text mb-0 mt-3">{t(desc2)}</p>
      <p className="card-text my-3">{t(desc3)}</p>
      <p className="card-text">{t(desc4)}</p>
      <p className="card-text">{t(desc5)}</p>
    </div>
  )
}

export default BlogDetailsCards
