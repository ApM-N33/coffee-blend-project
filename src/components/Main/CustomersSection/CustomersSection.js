import React from "react"
import customersItems from "../../../data/customers-items.json"
import { Parallax } from "react-parallax"
import { useTranslation } from "react-i18next"
import CustomersCards from "./CustomersCards"
import CustomersTitle from "./CustomersTitle"

function CustomersSection() {
  const { t } = useTranslation("common")
  return (
    <section className="customers">
      <Parallax
        className="parallax-bg w-100"
        bgImage="/images/bg_1.jpg"
        strength={500}
      >
        <div className="container-fluid d-flex flex-column justify-content-end position-relative z-3">
          <div className="row">
            <CustomersTitle t={t} />
          </div>
          <div className="row">
            {customersItems.map((item) => (
              <CustomersCards key={item.id} t={t} {...item} />
            ))}
          </div>
        </div>
      </Parallax>
    </section>
  )
}

export default CustomersSection
