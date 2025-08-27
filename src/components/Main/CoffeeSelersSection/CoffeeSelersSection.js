import { MdShoppingCart } from "react-icons/md"
import { useTranslation } from "react-i18next"
import coffeeItems from "../../../data/coffee-items.json"
import CoffeeSelersCards from "./CoffeeSelersCards"
import generateId from "../../../shared/generateId"

function CoffeeSelersSection() {
  const { t } = useTranslation("common")
  const coffeeitems = generateId(coffeeItems)

  return (
    <section className="coffee-selers">
      <div className="mainContainer">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center text-center">
            <span className="title-label" data-aos="zoom-out-up">
              {t("coffee-selers.title_label")}
            </span>
            <h2
              className="coffee_selers-title mb-5 text-uppercase"
              data-aos="zoom-out-up"
            >
              {t("coffee-selers.title")}
            </h2>
            <p className="coffee_selers-desc" data-aos="zoom-out-up">
              {t("coffee-selers.desc")}
            </p>
          </div>
        </div>
        <div className="row row-gap-4 row-gap-md-0">
          {coffeeitems.map((item) => (
            <CoffeeSelersCards
              key={item.id}
              item={item}
              {...item}
              t={t}
              MdShoppingCart={MdShoppingCart}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoffeeSelersSection
