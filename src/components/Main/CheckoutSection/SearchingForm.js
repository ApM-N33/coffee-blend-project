import React from "react"
import { useTranslation } from "react-i18next"
import { IoSearch } from "react-icons/io5"

function SearchingForm() {
  const { t } = useTranslation("common")
  return (
    <form className="searching-form w-100" data-aos="flip-right">
      <input
        className="search-input w-100"
        type="text"
        placeholder={t("checkout.search")}
      />
      <IoSearch className="search-icon" />
    </form>
  )
}

export default SearchingForm
