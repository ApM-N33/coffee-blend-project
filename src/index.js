import React from "react"
import ReactDOM from "react-dom/client"
import "aos/dist/aos.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./assets/styles/app.scss"
import i18next from "i18next"
import { I18nextProvider } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { BrowserRouter } from "react-router-dom"
import common_en from "./languages/en/common.json"
import common_ru from "./languages/ru/common.json"
import common_am from "./languages/am/common.json"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { CartProvider } from "./contexts/CartProvider"

i18next.use(LanguageDetector).init({
  interpolation: {
    escapeValue: false,
  },
  fallbackLng: "en",
  resources: {
    en: { common: common_en },
    ru: { common: common_ru },
    am: { common: common_am },
  },
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
  },
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  // <React.StrictMode>
  <I18nextProvider i18n={i18next}>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </I18nextProvider>
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
