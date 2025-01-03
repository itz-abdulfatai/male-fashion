function CartTotal() {
  return (
    <div className=" w-full  flex flex-col items-stretch gap-14 lg:w-[300px] xl:w-[360px] mt-12">
        <h3 className="text-[16px]  uppercase font-bold ">Discount codes</h3>

        <form action="" className="flex items-stretch">
            <input type="text" className=" text-sm text-[#5c5c5c] border border-r-0 border-solid border-[#f3f3f3] h-[60px] pl-5 flex-1" placeholder="Coupon Code"/>
            <button className=" text-sm text-primary bg-secondary uppercase px-[30px] font-bold">apply</button>
        </form>

        <div className=" px-[40px] pt-[35px] pb-[40px] bg-neutral flex flex-col gap-5">
            <h3 className=" uppercase text-base"> Cart total</h3>
            <div className="flex justify-between items-center" >
                <p className="text-base capitalize">Subtotal</p>
                <span className=" text-accent text-base font-bold">$ 169.50</span>
            </div>

            <div className="flex justify-between items-center" >
                <p className="text-base capitalize">Total</p>
                <span className=" text-accent text-base font-bold">$ 169.50</span>
            </div>

            <button className="  px-[10px] py-[12px] letter-space cursor-pointer bg-secondary text-primary uppercase text-sm font-bold ">Proceed to checkout</button>
        </div>
    </div>
  )
}

export default CartTotal