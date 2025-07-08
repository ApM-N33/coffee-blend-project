import React from "react"
import { useTranslation } from "react-i18next"
import { IoPerson } from "react-icons/io5"
import { FaCalendarDays } from "react-icons/fa6"
import { LuMessageSquareText } from "react-icons/lu"
import footerItems from "../../data/footer-recent-items.json"

function FooterRecentBlog() {
  const { t } = useTranslation("common")
  return (
    <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up">
      <h2 className="footer-title">{t("footer.recent_blog.title")}</h2>
      {footerItems.map((item) => (
        <div
          key={item.id}
          className="card mb-4 footer-card d-flex flex-row align-items-center"
        >
          <img
            src={`/images/${item.img}`}
            className="img-fluid object-fit-cover"
            alt=""
          />
          <div className="card-body py-0 pe-0">
            <h3 className="card-title">{t(item.title)}</h3>
            <p className="card-text">
              <FaCalendarDays className="item-icon me-1" /> {t(item.date)}
              <IoPerson className="item-icon ms-1" /> {t(item.admin)}
              <LuMessageSquareText className="item-icon ms-1" />{" "}
              {t(item.comments)}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FooterRecentBlog
