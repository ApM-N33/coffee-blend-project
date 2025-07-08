import React from 'react'
import { useTranslation } from "react-i18next"

function ServicesCards({ Icon, title, desc }) {
  const {t} = useTranslation("common")
  return (
    <div className="col-md-4 col-12" data-aos="flip-up">
      <div className="service-card d-flex flex-column justify-content-center align-items-center text-center">
        <div className="service_icon-wrap d-flex justify-content-center align-items-center">
          {Icon && <Icon className="icon d-inline-block" />}
        </div>
        <h3 className="card-title text-uppercase">{t(title)}</h3>
        <p className="card-text">{t(desc)}</p>
      </div>
    </div>
  )
}

export default ServicesCards
