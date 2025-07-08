import React from "react"
import galleryItems from "../../../data/gallery-images.json"
import { IoSearch } from "react-icons/io5"
import GalleryCards from "./GalleryCards"

function GallerySection({ showModalItem }) {
  return (
    <section className="gallery-section">
      <div className="container-fluid">
        <div className="row">
          {galleryItems.map((item) => (
            <GalleryCards
              key={item.id}
              {...item}
              IoSearch={IoSearch}
              item={item}
              showModalItem={showModalItem}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection
