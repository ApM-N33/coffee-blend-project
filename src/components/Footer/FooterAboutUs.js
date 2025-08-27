import React from "react"
import { useTranslation } from "react-i18next"
import { FaTwitter } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6"

function FooterAboutUs() {
  const { t } = useTranslation("common")
  return (
    <div className="col-lg-3 col-md-6 col-12" data-aos="fade-up">
      <h2 className="footer-title">{t("footer.about_us.title")}</h2>
      <p className="about_us-desc">{t("footer.about_us.desc")}</p>
      <ul className="social-list mt-5 list-unstyled d-flex align-items-center">
        <li className="social-item d-flex justify-content-center align-items-center">
          <FaTwitter className="social-icon" />
        </li>
        <li className="social-item d-flex justify-content-center align-items-center">
          <FaFacebookF className="social-icon" />
        </li>
        <li className="social-item d-flex justify-content-center align-items-center">
          <FaInstagram className="social-icon" />
        </li>
      </ul>
    </div>
  )
}

export default FooterAboutUs
