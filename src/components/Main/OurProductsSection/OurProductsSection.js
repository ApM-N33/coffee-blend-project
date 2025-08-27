import { MdShoppingCart } from "react-icons/md"
import OurProductsBtns from "./OurProductsBtns"
import OurProductsCards from "./OurProductsCards"
import OurProductsTitleCol from "./OurProductsTitleCol"

function OurProductsSection({
  t,
  itemsCategory,
  itemsCategoryBtns,
  showCategoryItems,
}) {
  return (
    <section className="our-products">
      <div className="mainContainer">
        <div className="row">
          <OurProductsTitleCol t={t} />
        </div>
        <div className="row">
          <div className="col-12">
            <ul className="products_btns-list mb-5 mb-md-0 d-flex flex-column flex-md-row justify-content-center column-gap-2 list-unstyled">
              {itemsCategoryBtns.map((item) => (
                <OurProductsBtns
                  key={item.id}
                  {...item}
                  t={t}
                  showCategoryItems={showCategoryItems}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="row row-gap-5 p-md-5 p-0">
          {itemsCategory.map((item) => (
            <OurProductsCards
              key={item.id}
              {...item}
              item={item}
              t={t}
              MdShoppingCart={MdShoppingCart}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurProductsSection
