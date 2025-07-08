import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md"
import useScrollToTop from "../../hooks/useScrollToTop"

function ScrollTopBtn() {
  const { isShow, scrollToTop } = useScrollToTop()
  return (
    <button onClick={scrollToTop} className={`to_top-btn ${isShow}`}>
      <MdOutlineKeyboardDoubleArrowUp className="arrow-up" />
    </button>
  )
}

export default ScrollTopBtn
