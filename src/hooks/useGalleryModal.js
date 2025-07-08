import { useState, useEffect, useRef } from "react"
import galleryItems from "../data/gallery-images.json"

function useGalleryModal() {
  const [modals, setModals] = useState([])
  const [isShow, setShow] = useState(false)
  const itemIndex = useRef(null)

  useEffect(() => {
    setModals(
      galleryItems.map((item) => ({
        ...item,
        isActive: false,
      }))
    )
  }, [])

  const showModalItem = (id) => {
    setShow(true)
    document.body.style.overflowY = "hidden"
    itemIndex.current = modals.findIndex((item) => item.id === id)
    setModals(
      modals.map((item) => ({
        ...item,
        isActive: item.id === id,
      }))
    )
  }

  const closeModalItem = () => {
    setShow(false)
    document.body.style.overflowY = "unset"
  }

  const isModalClicked = (e) => {
    e.stopPropagation()
    if (e.currentTarget === e.target) {
      setShow(false)
      document.body.style.overflowY = "unset"
    }
  }

  const slideNextImage = () => {
    itemIndex.current++
    setModals(
      modals.map((item, index) => ({
        ...item,
        isActive:
          ((itemIndex.current % modals.length) + modals.length) %
            modals.length ===
          index,
      }))
    )
  }

  const slidePrevImage = () => {
    itemIndex.current--
    setModals(
      modals.map((item, index) => ({
        ...item,
        isActive:
          ((itemIndex.current % modals.length) + modals.length) %
            modals.length ===
          index,
      }))
    )
  }

  return {
    modals,
    isShow,
    showModalItem,
    closeModalItem,
    isModalClicked,
    slideNextImage,
    slidePrevImage,
  }
}

export default useGalleryModal
