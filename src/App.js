import { Routes, Route, useLocation } from "react-router-dom"
import AOS from "aos"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Services from "./pages/Services"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Shop from "./pages/Shop"
import SingleProduct from "./pages/SingleProduct"
import BlogDetails from "./pages/BlogDetails"
import Checkout from "./pages/Checkout"
import Contact from "./pages/Contact"
import Basket from "./pages/Basket"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import GalleryModals from "./components/Modals/GalleryModals"
import useGalleryModal from "./hooks/useGalleryModal"
import NotificationModal from "./components/Modals/NotificationModal"
import { useEffect } from "react"

function App() {
  const {
    modals,
    isShow,
    showModalItem,
    closeModalItem,
    isModalClicked,
    slideNextImage,
    slidePrevImage,
  } = useGalleryModal()

  const location = useLocation()

  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 700,
      anchorPlacement: "top-bottom",
      once: true,
      startEvent: "DOMContentLoaded",
    })
  }, [])

  useEffect(() => {
    const handleResize = () => AOS.refresh()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => AOS.refresh(), 300)
    return () => clearTimeout(timeout)
  }, [location.pathname])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home showModalItem={showModalItem} />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Footer key={location.pathname} />
      <GalleryModals
        modals={modals}
        isShow={isShow}
        closeModalItem={closeModalItem}
        slideNextImage={slideNextImage}
        slidePrevImage={slidePrevImage}
        isModalClicked={isModalClicked}
      />
      <NotificationModal />
      
    </>
  )
}

export default App
