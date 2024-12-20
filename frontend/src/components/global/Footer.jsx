import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" min-h-[40vh] bg-secondary text-primary ">
      <div className="flex flex-col md:flex-row w-full gap-10">
        <div className="w-full flex flex-col gap-8">
          <Link to="/">
            <img
              className="max-md:h-4 object-cover"
              src={
                document.documentElement.classList.contains("dark")
                  ? "/logo.png"
                  : "/logo-white.png"
              }
              alt="Home"
            />
          </Link>
          <p className="text-[#5c5c5c] text-sm max-w-[300px]">
            The customer is at the heart of our unique business model, which
            includes design.
          </p>
        </div>

        <div className="w-full flex md:justify-between gap-5 text-[#5c5c5c] text-sm flex-col md:flex-row items-center md:items-start">
          <div className=" flex flex-col w-full gap-4 capitalize">
            <h3 className=" text-primary text-base uppercase font-bold">shopping</h3>
            <Link to={"/"}> Clothing Store</Link>
            <Link to={"/"}> Trending Shoes</Link>
            <Link to={"/"}>Accessories</Link>
            <Link to={"/"}> Sale</Link>
          </div>

          <div className=" flex flex-col w-full gap-4 capitalize">
            <h3 className=" text-primary text-base uppercase font-bold">Quick links</h3>
            <Link to={"/"}> home</Link>
            <Link to={"/"}> shop</Link>
            <Link to={"/"}>contact</Link>
            <Link to={"/"}> blog</Link>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <h3 className="text-primary text-base uppercase font-bold" >newsletter</h3>
          <p className="text-[#5c5c5c] text-sm max-w-[300px]">
            Be the first to know about new arrivals, look books, sales & promos!
          </p>
          <form  action="" className=" flex items-stretch max-w-[300px] w-full h-14 relative">
            <input 
              type="email"
              className=" px-2 bg-transparent grow border-solid border-b-2 border-primary placeholder:text-primary"
              placeholder="input email"
            />
            <button className="px-2 py-1 text-primary  text-2xl absolute right-3 bottom-3 flex justify-center items-center">
              <i className="bx bx-envelope"></i>
            </button>
          </form>
        </div>
      </div>
      <div className=" w-full border-solid border-t flex justify-center items-center border-[#5c5c5c83] mt-10 text-center pt-10">
      <p className="flex-items-center text-sm text-[#5c5c5c]">

      Copyright © 2024 All rights reserved | This page was made with <i className='bx bx-heart text-accent' ></i> by Abdulfatai
      </p>
      </div>
    </footer>
  );
}

export default Footer;
