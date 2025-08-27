import Slider from "react-slick"
import settings from "../../../shared/slickslider"
import homeHeroItems from "../../../data/home-slides.json"
import HomeBgSlides from "./HomeBgSlides"

function HomeHeroSection() {
  return (
    <section className="hero position-relative">
      <Slider {...settings}>
        {homeHeroItems.map((item) => (
          <HomeBgSlides key={item.id} {...item} />
        ))}
      </Slider>
    </section>
  )
}

export default HomeHeroSection
