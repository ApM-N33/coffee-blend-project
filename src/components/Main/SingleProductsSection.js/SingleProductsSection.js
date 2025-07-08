import { Fragment } from "react"
import SingleProductLeftCol from "./SingleProductLeftCol"
import SingleProductRightCol from "./SingleProductRightCol"
import useSingleProducts from "../../../hooks/useSingleProducts"

function SingleProductsSection() {
  const { t, params, product, addToCart, increment, decrement, handleChange } =
    useSingleProducts()

  return (
    <section className="single-products">
      <div className="mainContainer">
        <div className="row row-gap-5">
          {product.id === params.id && (
            <>
              <SingleProductLeftCol {...product} />
              <SingleProductRightCol
                t={t}
                product={product}
                increment={increment}
                decrement={decrement}
                handleChange={handleChange}
                addToCart={addToCart}
              />
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default SingleProductsSection
