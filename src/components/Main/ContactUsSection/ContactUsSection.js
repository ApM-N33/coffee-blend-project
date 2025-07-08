import React from "react"
import ContactInformation from "./ContactInformation"
import ContactUsForm from "./ContactUsForm"
import ContactMapLocation from "./ContactMapLocation"

function ContactUsSection() {
  return (
    <section className="contact-us">
      <div className="mainContainer">
        <div className="row justify-content-center">
          <ContactInformation />
          <ContactUsForm />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <ContactMapLocation />
        </div>
      </div>
    </section>
  )
}

export default ContactUsSection
