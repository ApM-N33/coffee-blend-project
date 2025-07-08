import React from "react"

function GalleryCards({ id, img, IoSearch, showModalItem }) {
  return (
    <div className="gallery-card position-relative px-0" data-aos="flip-right">
      <div className="overlay position-absolute d-flex justify-content-center align-items-center start-0 top-0 w-100 h-100">
        <div className="search_icon-cub position-relative d-flex justify-content-center align-items-center">
          <IoSearch className="search-icon" />
        </div>
      </div>
      <img
        onClick={() => showModalItem(id)}
        className="w-100 h-100 object-fit-cover"
        src={`/images/${img}`}
        alt=""
      />
    </div>
  )
}

export default GalleryCards
