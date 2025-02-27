function CartItem() {
  return (
    <div className="grid grid-cols-12 w-full py-7 border-b border-solid border-[#f0f0f0]">
    <div className="col-span-5 flex-col md:flex-row flex gap-8 md:items-center ">
      <img
        src="https://picsum.photos/200/300?random=1"
        className=" w-[86px] h-[90px]"
        alt=""
      />

      <div className="flex justify-center flex-col gap-3">
        <h4>T-shirt Contrast Pocket</h4>
        <p>$98.49</p>
      </div>
    </div>
    <div className="col-span-3 flex items-center  gap-5">
      <button>
        <i className="bx hover:opacity-40 bx-chevron-left"></i>
      </button>
      <span>3</span>
      <button>
        <i className="bx hover:opacity-40 bx-chevron-right"></i>
      </button>
    </div>
    <div className="col-span-2 flex items-center">
      <span className="font-bold text-lg">$30.0</span>
    </div>

    <div className="col-span-2 flex items-center justify-end pr-5 ">
      <button className=" w-10 aspect-square rounded-full bg-neutral flex justify-center items-center ">
        <i className="bx bx-x font-extrabold text-2xl"></i>
      </button>
    </div>
  </div>
  )
}

export default CartItem