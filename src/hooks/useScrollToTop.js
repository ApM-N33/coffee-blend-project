import { useEffect, useState } from "react"

function useScrollToTop() {
  const [isShow, setShow] = useState("")

  useEffect(() => {
    const showToTopBtn = () => {
      let scrollY = window.scrollY
      scrollY > 500 ? setShow("active") : setShow("")
    }
    window.addEventListener("scroll", showToTopBtn)
    return () => window.removeEventListener("scroll", showToTopBtn)
  }, [])

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return {
    isShow,
    scrollToTop,
  }
}

export default useScrollToTop
