import { useTranslation } from "react-i18next"

function DropdownLang({ changeLangText }) {
  const { i18n } = useTranslation("common")
  return (
    <ul
      className="dropdown-menu dropdown_lang-menu text-capitalize"
      aria-labelledby="dropdownLanguage"
    >
      <li>
        <button
          onClick={(e) => {
            i18n.changeLanguage("en")
            changeLangText(e.currentTarget.innerText)
          }}
          className="dropdown-item lang-btn"
        >
          English
        </button>
      </li>
      <li>
        <button
          onClick={(e) => {
            i18n.changeLanguage("ru")
            changeLangText(e.currentTarget.innerText)
          }}
          className="dropdown-item lang-btn"
        >
          Русский
        </button>
      </li>
      <li>
        <button
          onClick={(e) => {
            i18n.changeLanguage("am")
            changeLangText(e.currentTarget.innerText)
          }}
          className="dropdown-item lang-btn"
        >
          Հայերեն
        </button>
      </li>
    </ul>
  )
}

export default DropdownLang
