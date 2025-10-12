import StarRating from "./StarRating";

export default function Product({ product }) {
    return (
      <div className=" grow relative max-w-[250px] min-h-[260px] w-full group overflow-hidden  shadow-sm bg-cover flex flex-col items-stretch ">
        <img
          src={product.images[0].url || `https://picsum.photos/200/${300 + Math.ceil(Math.random() * 15)}`}
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
  
        <div className=" absolute flex flex-col gap-y-2 top-2 right-2  md:-right-20 group-hover:right-2 transition-all duration-500 ease-in ">
          <button className="  w-8 h-8 bg-primary font-semibold active:bg-primary hover:bg-neutral text-secondary p-3 text-2xl flex justify-center items-center" title="Wishlist">
            <i className="bx bx-heart"></i>
            {/* <i class='bx bxs-heart' ></i> */}
          </button>
          <button className=" w-8 h-8 bg-primary font-semibold active:bg-primary hover:bg-neutral text-secondary p-3 text-2xl flex justify-center items-center" title="View">
            <i className="bx bx-search"></i>
          </button>
  
          <button className=" w-8 h-8 bg-primary font-semibold active:bg-primary hover:bg-neutral text-secondary p-3 text-2xl flex justify-center items-center" title="Add to cart">
          <i className='bx bx-plus' ></i>
          </button>
        </div>
      </div>
    );
  }