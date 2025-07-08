import React from "react"
import { useTranslation } from "react-i18next"

function BlogComments({
  img,
  first_name,
  last_name,
  date,
  comment,
  reply_btn_text,
  i,
}) {
  const { t } = useTranslation("common")
  return (
    <div
      className={`card comment_card-${i + 1} commentCard flex-row`}
      data-aos="flip-right"
    >
      <img
        src={`/images/${img}`}
        className="person-img object-fit-cover"
        alt=""
      />
      <div className="card-body py-0 ps-4 pe-0">
        <h5 className="card-title">
          {t(first_name)} {t(last_name)}
        </h5>
        <p className="card_date-text text-uppercase">{t(date)}</p>
        <p className="card-text">{t(comment)}</p>
        <button className="reply-btn">{t(reply_btn_text)}</button>
      </div>
    </div>
  )
}

export default BlogComments
