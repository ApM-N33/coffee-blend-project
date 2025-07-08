import React from "react"
import BookForm from "../HeroContactInfo/BookForm"

function BookingTable({ t }) {
  return (
    <div className="col-md-6 px-0" data-aos="flip-down">
      <div className="book-table booking-table d-flex flex-column justify-content-center p-4">
        <h3 className="book_table-title booking-title text-capitalize">
          {t("booking.title")}
        </h3>
        <BookForm />
      </div>
    </div>
  )
}

export default BookingTable
