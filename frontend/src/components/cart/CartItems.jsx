import { useContext } from "react";
import CartItem from "./CartItem";
import UserContext from "../../contexts/UserContext";

function CartItems() {
  const { state } = useContext(UserContext);
  // console.log("cart:", state.cart);

  const cartItems = state.cart;

  return (
    <div className="flex-1 flex flex-col items-stretch ">
      <div className="grid grid-cols-12 w-full mt-12 pb-7 border-b border-solid border-[#f0f0f0]">
        <h3 className=" text-[16px]  uppercase font-bold col-span-5">
          product
        </h3>
        <h3 className=" text-[16px]  uppercase font-bold col-span-3">
          quantity
        </h3>
        <h3 className=" text-[16px]  uppercase font-bold col-span-2">total</h3>
      </div>
      <div className="w-full max-h-[80vh] overflow-scroll">
        {!cartItems || cartItems.length === 0 ? (
          <p className=" text-center text-lg my-10">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>

      <div className="w-full p-7 flex flex-col sm:flex-row gap-10 items-center justify-between">
        <a
          href="/shop"
          className=" text-secondary bg-primary font-bold letter-space uppercase py-[14px] px-[35px] border-[#f3f3f3] border border-solid text-center"
        >
          Continue Shopping
        </a>
        <button className=" text-primary bg-secondary font-bold letter-space uppercase py-[14px] px-[35px] border-[#f3f3f3] border border-solid ">
          {" "}
          <i className="bx bx-loader-circle"></i> Update cart
        </button>
      </div>
    </div>
  );
}

export default CartItems;
