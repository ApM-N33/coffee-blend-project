import React from "react"

function BookingIframe() {
  return (
    <div className="col-md-6 px-0 iframe-col" data-aos="flip-up">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.99641068776!2d-122.52000126043224!3d37.757807037665756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2z0KHQsNC9LdCk0YDQsNC90YbQuNGB0LrQviwg0JrQsNC70LjRhNC-0YDQvdC40Y8sINCh0KjQkA!5e0!3m2!1sru!2sam!4v1750943427738!5m2!1sru!2sam"
        className="iframe w-100 h-100"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  )
}

export default BookingIframe
