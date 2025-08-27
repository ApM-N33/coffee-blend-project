import React from "react"

function ContactMapLocation() {
  return (
    <div
      className="col-12 px-0 location-map"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <iframe
        className="w-100 h-100"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.0505056452!2d-74.30915396572304!3d40.69719336768423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodCo0JA!5e0!3m2!1sru!2sam!4v1751898670052!5m2!1sru!2sam"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  )
}

export default ContactMapLocation
