import React from "react"
import { useTranslation } from "react-i18next"
import { FaCalendarAlt } from "react-icons/fa"
import { IoPerson } from "react-icons/io5"
import { LuMessageSquareText } from "react-icons/lu"

function RecentItems({ img, desc, date, admin, comments }) {
  const { t } = useTranslation("common")
  return (
    <div className="card flex-row recent-card" data-aos="flip-right">
      <img
        src={`/images/${img}`}
        className="object-fit-cover card-img"
        alt=""
      />
      <div className="card-body p-0 ps-4">
        <p className="card-text">{t(desc)}</p>
        <div className="d-flex column-gap-1 date-wrap">
          <FaCalendarAlt className="icon" />
          {t(date)}
          <IoPerson className="icon" />
          {t(admin)}
          <LuMessageSquareText className="icon" />
          {t(comments)}
        </div>
      </div>
    </div>
  )
}

export default RecentItems
