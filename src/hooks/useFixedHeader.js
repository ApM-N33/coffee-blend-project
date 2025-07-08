import { useEffect, useState } from "react"

function useFixedHeader() {
  const [isFixed, setFixed] = useState("")

  useEffect(() => {
    const setFixedHeader = () => {
      const scrollY = window.scrollY
      if (scrollY > 150 && scrollY < 250) return setFixed("toTop")
      if (scrollY > 250) return setFixed("fixed")
      return setFixed("")
    }

    window.addEventListener("scroll", setFixedHeader)
    window.addEventListener("scroll", setFixedHeader)
    return () => window.removeEventListener("scroll", setFixedHeader)
  }, [])

  return {
    isFixed,
  }
}

export default useFixedHeader
