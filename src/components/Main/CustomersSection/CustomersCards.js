import React from "react"

function CustomersCards({ desc, img, first_name, last_name, speciality, t }) {
  return (
    <div
      className="chef_items-col d-flex align-items-end px-0"
      data-aos="zoom-in-down"
    >
      <div className="card cheff-card">
        <p className="card-text mb-3">{t(desc)}</p>
        <div className="card-body p-0 d-flex align-items-center">
          <img
            src={`/images/${img}`}
            className="card-img-top object-fit-cover chef-img"
            alt=""
          />
          <div className="ms-3">
            <h5 className="card-title mb-2">
              {t(first_name)} {t(last_name)}
            </h5>
            <p className="cheff-speciality text-capitalize">{t(speciality)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomersCards
