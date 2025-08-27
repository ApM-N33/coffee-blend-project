import React from "react"

function OurMenuCoffeeImages({ coffeeImg, className }) {
  return (
    <div className="col-md-6 col-12" data-aos="flip-down">
      <div className={`coffee_img-wrap w-100 ${className}`}>
        <img
          src={`/images/${coffeeImg}`}
          className="w-100 h-100 object-fit-cover"
          alt=""
        />
      </div>
    </div>
  )
}

export default OurMenuCoffeeImages
