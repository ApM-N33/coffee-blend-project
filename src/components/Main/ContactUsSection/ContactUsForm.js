import React from "react"
import { useTranslation } from "react-i18next"

function ContactUsForm() {
  const { t } = useTranslation("common")
  return (
    <div
      className="col-md-6 col-12"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <form className="contact_us-form">
        <div className="row">
          <div className="col-lg-6 col-12">
            <input type="text" placeholder={t("contact_us.inp_name")} />
          </div>
          <div className="col-lg-6 col-12">
            <input type="email" placeholder={t("contact_us.inp_email")} />
          </div>
          <div className="col-12">
            <input type="text" placeholder={t("contact_us.subject")} />
          </div>
          <div className="col-12">
            <textarea placeholder={t("contact_us.message")}></textarea>
          </div>
        </div>
        <button>{t("contact_us.send_message")}</button>
      </form>
    </div>
  )
}

export default ContactUsForm
