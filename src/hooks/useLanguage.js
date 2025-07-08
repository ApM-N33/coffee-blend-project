import { useState } from "react"

function useLanguage() {
  const [lang, setLang] = useState(
    localStorage.getItem("i18nextLng") === "am"
      ? "Հայերեն"
      : localStorage.getItem("i18nextLng") === "ru"
      ? "Русский"
      : "English"
  )
  const changeLangText = (text) => setLang(text)

  return {
    lang,
    changeLangText,
  }
}

export default useLanguage
