import { useSwipeable } from "react-swipeable"
import GalleryModalImages from "./GalleryModalImages"
function GalleryModals({
  modals,
  isShow,
  closeModalItem,
  slideNextImage,
  slidePrevImage,
  isModalClicked,
}) {
  const swipeHandlers = useSwipeable({
    onSwipedLeft: slideNextImage,
    onSwipedRight: slidePrevImage,
    preventScrollOnSwipe: true,
  })
  return (
    <div
      className={`gellery-modal ${isShow ? "active" : "hide"}`}
      onClick={(e) => isModalClicked(e)}
    >
      <button onClick={closeModalItem} className="hide_modal-btn">
        X
      </button>
      <button onClick={slidePrevImage} className="prev-btn">
        {"<"}
      </button>
      <div className="mainContainer" {...swipeHandlers}>
        {modals.map((item) => (
          <GalleryModalImages key={item.id} {...item} />
        ))}
      </div>
      <button onClick={slideNextImage} className="next-btn">
        {">"}
      </button>
    </div>
  )
}

export default GalleryModals
