import { useContext } from "react";
// import CartItem from "./CartItem";
import UserContext from "../../contexts/UserContext";
import WishlistItem from "./WishlistItem";

function WishlistItems() {
  const { state } = useContext(UserContext);
  // console.log("wishlist:", state.wishlist);

  const wishlistItems = state.wishlist;

  return (
    <div className="flex-1 flex flex-col items-stretch">
      {/* <div className="grid grid-cols-12 w-full mt-12 pb-7 border-b border-solid border-[#f0f0f0]">
        <h3 className=" text-[16px]  uppercase font-bold col-span-5">
          product
        </h3>
        <h3 className=" text-[16px]  uppercase font-bold col-span-3">
          quantity
        </h3>
        <h3 className=" text-[16px]  uppercase font-bold col-span-2">total</h3>
      </div> */}
      <div className="w-full max-h-[80vh] overflow-scroll">
        {wishlistItems?.length === 0 ? (
          <p className=" text-center text-lg my-10">Your wishlist is empty.</p>
        ) : (
          wishlistItems?.map((item) => (
            <WishlistItem key={item.id} item={item} />
          ))
        )}
      </div>
    </div>
  );
}

export default WishlistItems;
