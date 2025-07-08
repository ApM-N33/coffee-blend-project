import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

function useCollapse() {
  const { pathname } = useLocation()
  const accordionRef = useRef()

  useEffect(() => {
    if (accordionRef.current.classList.contains("show")) {
      accordionRef.current.classList.remove("show")
    }
  }, [pathname])

  return {
    accordionRef,
  }
}

export default useCollapse
