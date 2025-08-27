import React from "react"
import { FaPhoneAlt } from "react-icons/fa"
import { MdOutlineMyLocation } from "react-icons/md"
import { LuClock9 } from "react-icons/lu"
import ContactFirstWrap from "./ContactFirstWrap"
import ContactSecondWrap from "./ContactSecondWrap"
import ContactThirdWrap from "./ContactThirdWrap"
import BookForm from "./BookForm"
import { useTranslation } from "react-i18next"

function HeroContactInfo() {
  const { t } = useTranslation("common")
  return (
    <section className="hero-contact d-flex flex-column flex-lg-row align-items-xl-end">
      <div className="contact-wrap d-flex flex-column flex-sm-row row-gap-3 row-gap-sm-0">
        <ContactFirstWrap FaPhoneAlt={FaPhoneAlt} />
        <ContactSecondWrap MdOutlineMyLocation={MdOutlineMyLocation} />
        <ContactThirdWrap LuClock9={LuClock9} />
      </div>
      <div className="book-table p-4">
        <h3 className="book_table-title text-uppercase">
          {t("hero_contact-section.book_table-title")}
        </h3>
        <BookForm />
      </div>
    </section>
  )
}

export default HeroContactInfo
