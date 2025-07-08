import React from "react"
import BookingIframe from "./BookingIframe"
import BookingTable from "./BookingTable"
import { useTranslation } from "react-i18next"

function BookingSection() {
  const { t } = useTranslation("common")
  return (
    <section className="hero-contact booking m-0">
      <div className="container-fluid">
        <div className="row">
          <BookingIframe />
          <BookingTable t={t} />
        </div>
      </div>
    </section>
  )
}

export default BookingSection
