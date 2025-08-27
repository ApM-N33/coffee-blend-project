import React from "react"
import { useTranslation } from "react-i18next"

function BookForm() {
  const { t } = useTranslation("common")
  return (
    <form className="book-form">
      <div className="row row-gap-3">
        <div className="col-lg-6 col-12">
          <input
            type="text"
            placeholder={t("hero_contact-section.input_firstName")}
          />
        </div>
        <div className="col-lg-6 col-12">
          <input
            type="text"
            placeholder={t("hero_contact-section.input_lastName")}
          />
        </div>
        <div className="col-lg-4 col-12">
          <input type="date" />
        </div>
        <div className="col-lg-4 col-12">
          <input type="time" />
        </div>
        <div className="col-lg-4 col-12">
          <input
            type="text"
            placeholder={t("hero_contact-section.input_Phone")}
          />
        </div>
        <div className="col-lg-6 col-12">
          <textarea placeholder={t("hero_contact-section.textarea")}></textarea>
        </div>
        <div className="col-lg-6 col-12">
          <button type="submit">{t("hero_contact-section.submit_btn")}</button>
        </div>
      </div>
    </form>
  )
}

export default BookForm
