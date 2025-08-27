import React from "react"

function MenuCategoryCards({ img, title, price, desc, t }) {
  return (
    <div
      className="card d-flex align-items-center flex-row menu-card"
      data-aos="flip-up"
    >
      <img
        src={`/images/${img}`}
        className="img-fluid object-fit-cover"
        alt=""
      />
      <div className="card-body ps-3 p-0">
        <div className="card_title-wrap d-flex align-items-end justify-content-between">
          <h3 className="card-title text-capitalize mb-0">
            <span>{t(title)}</span>
          </h3>
          <span className="card_price-text">
            <span className="price-currency">$</span>
            <span className="price-value">{price}</span>
          </span>
        </div>
        <p className="card-text">{t(desc)}</p>
      </div>
    </div>
  )
}

export default MenuCategoryCards
