import React from "react"

function SingleProductLeftCol({ img }) {
  return (
    <div className="col-lg-6 col-12 product_img-col" data-aos="fade-up">
      <img
        className="w-100 h-100 object-fit-cover"
        src={`/images/${img}`}
        alt=""
      />
    </div>
  )
}

export default SingleProductLeftCol
