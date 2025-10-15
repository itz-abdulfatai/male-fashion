import { useContext } from "react";
import StarRating from "./StarRating";
import UserContext from "../../contexts/UserContext";

export default function Product({ product }) {
  const { state, dispatch } = useContext(UserContext);

  const isInCart = state.cart?.some((item) => item._id === product._id);
  const isInWishlist = state.wishlist?.some((item) => item._id === product._id);

  const handleAddToCart = (product) => {
    // console.log(`Add product ${productId} to cart`);
    if (!state.isLoggedIn) {
      alert("Please log in to add items to your cart.");
      return;
    }

    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const handleAddToWishlist = (product) => {
    // console.log(`Add product ${product._id} to wishlist`);
    if (!state.isLoggedIn) {
      alert("Please log in to add items to your wishlist.");
      return;
    }

    dispatch({ type: "ADD_TO_WISHLIST", payload: product });
  };
  return (
    <div className=" grow relative max-w-[250px] min-h-[260px] w-full group overflow-hidden  shadow-sm bg-cover flex flex-col items-stretch ">
      <img
        src={product.images[0].url || `https://picsum.photos/200/300`}
        alt="product image"
        className=" h-[260px] object-cover"
      />
      <div className=" p-5 flex flex-col gap-1">
        <h3 className=" text-[15px] font-[600]">{product.name}</h3>
        <div className=" flex items-center gap-5 text-[13px]">
          <StarRating rating={product.review.rating} />{" "}
          <span>({product.review.count})</span>
        </div>

        <p className=" font-bold text-lg">
          ${Number(product.price / 100).toFixed(2)}
        </p>
      </div>

      <div className=" absolute flex flex-col gap-y-2 top-2 right-2  md:-right-20 group-hover:right-2 transition-all duration-500 ease-in ">
        <button
          className={`  w-8 h-8 bg-primary font-semibold active:bg-primary hover:bg-neutral ${
            isInWishlist ? "text-accent" : "text-secondary"
          } p-3 text-2xl flex justify-center items-center`}
          title={isInWishlist ? "Remove from wishlist" : "Add to Wishlist"}
          onClick={() => handleAddToWishlist(product)}
        >
          <i className="bx bx-heart"></i>
          {/* <i class='bx bxs-heart' ></i> */}
        </button>
        {/* <button className=" w-8 h-8 bg-primary font-semibold active:bg-primary hover:bg-neutral text-secondary p-3 text-2xl flex justify-center items-center" title="View">
            <i className="bx bx-search"></i>
          </button> */}

        <button
          className=" w-8 h-8 bg-primary font-semibold active:bg-primary hover:bg-neutral text-secondary p-3 text-2xl flex justify-center items-center"
          title={isInCart ? "Remove from cart" : "Add to cart"}
          onClick={() => handleAddToCart(product)}
        >
          {" "}
          {isInCart ? (
            <i className="bx bx-minus"></i>
          ) : (
            <i className="bx bx-plus"></i>
          )}
        </button>
      </div>
    </div>
  );
}
