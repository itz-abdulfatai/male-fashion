/* eslint-disable react/prop-types */
import { useState } from "react";
import { mockProducts } from "../../assets/constants";

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

function Product({ product }) {
  return (
    <div className=" relative max-w-[280px] min-h-[260px] w-full group overflow-hidden  shadow-sm bg-cover flex flex-col items-stretch ">
      <img
        src={product.images[0].url || "https://picsum.photos/200/300?random=1"}
        alt="product image"
        className=" h-[260px] object-cover"
      />
      <div className=" p-5 flex flex-col gap-1">
        <h3 className=" text-[15px] font-[600]">{product.name}</h3>
        <div className=" flex items-center gap-5 text-[13px]">

        <StarRating rating={product.review.rating} /> <span >({product.review.count})</span>
        </div>

        <p className=" font-bold text-lg">
          ${Number(product.price / 100).toFixed(2)}
        </p>
      </div>

      <div className=" absolute flex flex-col gap-y-2 top-2 right-2  md:-right-20 group-hover:right-2 transition-all ">
        <button className="  w-8 h-8 bg-primary font-semibold active:bg-primary hover:bg-neutral text-secondary p-3 text-2xl flex justify-center items-center" title="Wishlist">
          <i className="bx bx-heart"></i>
          {/* <i class='bx bxs-heart' ></i> */}
        </button>
        <button className=" w-8 h-8 bg-primary font-semibold active:bg-primary hover:bg-neutral text-secondary p-3 text-2xl flex justify-center items-center" title="View">
          <i className="bx bx-search-alt"></i>
        </button>

        <button className=" w-8 h-8 bg-primary font-semibold active:bg-primary hover:bg-neutral text-secondary p-3 text-2xl flex justify-center items-center" title="Add to cart">
        <i className='bx bx-plus' ></i>
        </button>
      </div>
    </div>
  );
}

// product.images[0].url || 'https://picsum.photos/200/300'

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating text-lg" title={rating}>
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <i key={`full-${i}`} className="bx bxs-star text-[#FFD700]"></i>
        ))}

      {halfStar && <i className="bx bxs-star-half text-[#FFD700]"></i>}

      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <i key={`empty-${i}`} className="bx bx-star text-gray-400"></i>
        ))}
    </div>
  );
};
