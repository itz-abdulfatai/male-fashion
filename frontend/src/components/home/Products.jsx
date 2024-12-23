/* eslint-disable react/prop-types */
import { useState } from "react";
import { mockProducts } from "../../assets/constants";
import Product from "../global/Product";

function Products() {
  const [productsToShow, setProductsToShow] = useState(
    [...mockProducts].sort((a, b) => b.review.rating - a.review.rating)
  );

  const [activeMode, setActiveMode] = useState("bestSellers");

  function changeActive(mode) {
    let sortedProducts;

    if (mode === "bestSellers") {
      sortedProducts = [...mockProducts].sort((a, b) => b.review.rating - a.review.rating);
      setActiveMode("bestSellers");
    } else if (mode === "newArrivals") {
      sortedProducts = [...mockProducts].sort(
        (a, b) => b.timestamps.createdAt - a.timestamps.createdAt
      );
      setActiveMode("newArrivals");
    } else if (mode === "hotSales") {
      sortedProducts = [...mockProducts].sort((a, b) => b.views - a.views);

      setActiveMode("hotSales");
    }

    setProductsToShow(sortedProducts);
  }

  return (
    <section>
      <div className=" flex mb-10 justify-center items-center gap-2 md:gap-20">
        <button
          className={` ${
            activeMode == "bestSellers" && "text-secondary"
          } text-neutral md:text-2xl capitalize font-bold text-base cursor-pointer`}
          onClick={() => changeActive("bestSellers")}
        >
          best sellers
        </button>
        <button
          className={` ${
            activeMode == "newArrivals" && "text-secondary"
          } text-neutral md:text-2xl capitalize font-bold text-base cursor-pointer`}
          onClick={() => changeActive("newArrivals")}
        >
          new arrivals
        </button>
        <button
          className={` ${
            activeMode == "hotSales" && "text-secondary"
          } text-neutral md:text-2xl capitalize font-bold text-base cursor-pointer`}
          onClick={() => changeActive("hotSales")}
        >
          hot sales
        </button>
      </div>
      <main className=" flex flex-col md:flex-row items-center md:justify-center md:items-center flex-wrap gap-10 md:gap-7">
        {productsToShow.map((product, index) => {
          if (index < 8) return <Product product={product} key={product._id} />;
          return null;
        })}
      </main>
    </section>
  );
}
export default Products;



// product.images[0].url || 'https://picsum.photos/200/300'

