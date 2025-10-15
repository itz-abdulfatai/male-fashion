import { useContext } from "react";
import PriceSummary from "./PriceSummary";
import UserContext from "../../contexts/UserContext";

export default function OrderSummary() {
  const { state } = useContext(UserContext);
  return (
    <div className=" w-full  flex flex-col items-stretch gap-7 lg:w-[300px] xl:w-[360px]  bg-neutral p-[30px]">
      <h3 className=" font-bold uppercase pb-[25px] text-2xl border-solid border-b border-[#d7d7d7]">
        {" "}
        Your order
      </h3>
      <div className=" flex justify-between items-center">
        <span>Product</span>
        <span>Total</span>
      </div>
      <div className=" flex flex-col gap-5 max-h-[200px] py-3  overflow-auto min-h-20">
        {" "}
        {state.cart?.map((item) => (
          <PriceSummary key={item.id} item={item} />
        ))}
      </div>

      <div className="border-solid border-y border-[#d7d7d7] py-7">
        <div className=" flex items-center justify-between">
          <span>Subtotal</span>
          <span className="compulsury">$750.99</span>
        </div>
        <div className=" flex items-center justify-between">
          <span>Total</span>
          <span className="compulsury">$750.99</span>
        </div>
      </div>
      <div className=" flex gap-5 flex-col">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ut
          temporibus dolore corporis iste distinctio delectus atque.
        </p>

        <div className=" flex items-start gap-5 capitalize">
          <div className="checkbox-wrapper-43">
            <input type="checkbox" id="cbx-45" />
            <label htmlFor="cbx-45" className="check">
              <svg width="18px" height="18px" viewBox="0 0 18 18">
                <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                <polyline points="1 9 7 14 15 4"></polyline>
              </svg>
            </label>
          </div>
          <label htmlFor="cbx-45">check payment</label>
        </div>
        <div className=" flex items-start gap-5 capitalize">
          <div className="checkbox-wrapper-43">
            <input type="checkbox" id="cbx-44" />
            <label htmlFor="cbx-44" className="check">
              <svg width="18px" height="18px" viewBox="0 0 18 18">
                <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                <polyline points="1 9 7 14 15 4"></polyline>
              </svg>
            </label>
          </div>
          <label htmlFor="cbx-44"> paypal</label>
        </div>

        <button className=" text-primary bg-secondary py-[14px] px-[30px] uppercase font-bold">
          place order
        </button>
      </div>
    </div>
  );
}
