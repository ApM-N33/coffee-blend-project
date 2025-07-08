import { Parallax } from "react-parallax"
import { GiCoffeeCup } from "react-icons/gi"
import counterItems from "../../../data/counter-items.json"
import { useInView } from "react-intersection-observer"
import CountUp from "react-countup"
import CounterCards from "./CounterCards"

function CounterSection() {
  const { ref, inView } = useInView({ triggerOnce: true })
  return (
    <section className="counter-sector">
      <Parallax
        className="parallax-bg w-100 d-flex align-items-center position-relative"
        strength={500}
        bgImage="/images/bg_2.jpg"
      >
        <div className="mainContainer position-relative z-3">
          <div ref={ref} className="row row-gap-5 row-gap-lg-0">
            {counterItems.map((item) => (
              <CounterCards
                key={item.id}
                {...item}
                GiCoffeeCup={GiCoffeeCup}
                CountUp={CountUp}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </Parallax>
    </section>
  )
}

export default CounterSection
