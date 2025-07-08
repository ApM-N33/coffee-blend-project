import React from "react"

function GalleryModalImages({ isActive, img }) {
  return (
    <div className={`modal-item ${isActive ? "active" : "hide"}`}>
      <img
        className="w-100 h-100 object-fit-cover"
        src={`/images/${img}`}
        alt=""
      />
    </div>
  )
}

export default GalleryModalImages
