// import { useState } from "react"

// eslint-disable-next-line react/prop-types
function LoggedOutGroup() {
  return (
    <>
      <button className="  flex justify-stretch items-stretch" title="search">
        <i className="bx  accent-hover bx-search-alt-2"></i>
      </button>
      <button className="   flex justify-stretch items-stretch" title="cart"><i className='bx accent-hover bxs-shopping-bag-alt' ></i></button>
      <button className="   flex justify-stretch items-stretch" title="login">
        <i className="bx accent-hover bx-log-in"></i>
      </button>
    </>
    // <div className=" overflow-hidden flex items-center  justify-center gap-2 md:gap-5 text-2xl bg-neutral px-3 py-1 rounded-3xl">
    //    {
    //     active &&
    //           <div className="flex items-center  justify-center gap-2 md:gap-5  ">
    //     <button className=" flex justify-stretch items-stretch" title="search"><i className='bx accent-hover bx-search-alt-2' ></i></button>
    //     <button className=" flex justify-stretch items-stretch" title="cart"><i className='bx accent-hover bxs-shopping-bag-alt' ></i></button>
    //     <button className=" flex justify-stretch items-stretch" title="login"><i className='bx accent-hover bx-log-in'></i></button>
    //     </div>

    //   }

    //   <button onClick={() => setActive(!active)} className=" md:hidden flex justify-stretch items-stretch relative" title="menu"><i className='bx   bx-menu'></i></button>

    // </div>
  );
}

export default LoggedOutGroup;

// search
// cart
// login
