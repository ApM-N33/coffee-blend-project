import React from "react"
import { useTranslation } from "react-i18next"

function CounterCards({ totalCount, text, GiCoffeeCup, CountUp, inView }) {
  const { t } = useTranslation("common")
  return (
    <div className="col-lg-3 col-sm-6 col-12">
      <div className="counter-card d-flex flex-column align-items-center">
        <div className="coffee_cup-wrap position-relative d-flex justify-content-center align-items-center">
          <GiCoffeeCup className="cup-icon" />
        </div>
        <span className="count-text">
          {inView ? <CountUp end={totalCount} duration={7} /> : 0}
        </span>
        <p className="card-text">{t(text)}</p>
      </div>
    </div>
  )
}

export default CounterCards
