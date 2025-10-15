import { useEffect, useState } from "react";
import Axios from "axios";
import SideDropDown from "../components/shop/SideDropDown";
import TagDropDown from "../components/shop/TagsDropDown";
import Product from "../components/global/Product";
import LocationDisplay from "../components/global/LocationDisplay";

function Shop() {
  const [products, setProducts] = useState(null);
  const [productCount, setProductCount] = useState(0);
  let [categories, setCategories] = useState(null);
  let [brands, setBrands] = useState(null);
  let [tags, setTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("none");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('')
  const [activeBrand, setActiveBrand] = useState('')
  const [activeTag, setActiveTag] = useState('')

  const start = (page - 1) * 9 + 1;
  const end = start + (products?.length || 0) - 1; 
  

  useEffect(() => {
    function fetchCategoriesFromProducts(products) {
      const categories = [];
      products.forEach((product) => {
        if (product.category) {
          const existingCategory = categories.find(
            (c) => c.key === product.category
          );
          if (!existingCategory) {
            categories.push({ key: product.category, count: 1 });
          } else {
            existingCategory.count++;
          }
        }
      });
      return categories;
    }

    function fetchBrandsFromProducts(products) {
      const brands = [];
      products.forEach((product) => {
        if (product.brand) {
          const existingBrand = brands.find((c) => c.key === product.brand);
          if (!existingBrand) {
            brands.push({ key: product.brand, count: 1 });
          } else {
            existingBrand.count++;
          }
        }
      });
      return brands;
    }

    function fetchTagsFromProducts(products) {
      const tags = new Set();

      products.forEach((product) => {
        if (Array.isArray(product.tags)) {
          product.tags.forEach((tag) => tags.add(tag));
        }
      });

      return Array.from(tags);
    }

    async function fetchProducts() {
      try {
        setLoading(true);
        setSearchLoading(true);
        setError(null);
        const response = await Axios.get(
          `api/products?search=${searchTerm}&page=${page}&sort=${sort}&category=${activeCategory}&brand=${activeBrand}&tag=${activeTag}`
        );
        const { data } = response;
        const { products: apiProducts, totalCount } = data;
        console.log(apiProducts);
        
        setProducts(apiProducts);
        setProductCount(totalCount);

        setCategories(fetchCategoriesFromProducts(apiProducts));
        setBrands(fetchBrandsFromProducts(apiProducts));
        setTags(fetchTagsFromProducts(apiProducts));
        setLoading(false);
        setSearchLoading(false);
      } catch (error) {
        console.error(error);
        setProducts(null);
        setProductCount(0);
        setLoading(false);
        setSearchLoading(false);

        if (error.message === "Request failed with status code 404") {
          setError("product not found");
        } else {
          setError(error.message);
        }
        setCategories(null);
        setBrands(null);
        setTags([]);
      }
    }
    fetchProducts();
  }, [searchTerm, page, sort,
    activeCategory,
    activeBrand,
    activeTag
  ]);

  return (
    <>

<LocationDisplay/>


      <section className=" flex flex-col md:flex-row">
        <div className="  md:basis-[280px]  flex flex-col justify-stretch gap-5 px-5">
          <form
            action=""
            className=" flex justify-stretch items-stretch relative border border-solid border-[#bcbcbc79] "
          >
            <input
              value={searchTerm}
              onChange={(e) =>{ setSearchTerm(e.target.value) 
                setPage(1)
              }}
              type="text"
              placeholder="Search..."
              className=" p-2 bg-transparent  flex-1 "
            />
            <span className="  text-[#bcbcbc79] w-10 flex items-center justify-center ">
              {searchLoading ? (
                <i className="bx bx-loader-circle bx-spin bx-rotate-90"></i>
              ) : (
                // <i className="bx bx-search"></i>
                <i className="bx bx-search"></i>
              )}
              {/* <i className="bx bx-search"></i> */}
            </span>
          </form>
          <SideDropDown name="categories" criteria={categories} setCriteria={setActiveCategory} activeCriteria={activeCategory} resetPage={setPage}
          
          />
          <SideDropDown name="brands" activeCriteria={activeBrand} resetPage={setPage} criteria={brands} setCriteria={setActiveBrand}
          />
          <TagDropDown name={"tags"} tags={tags} resetPage={setPage} setTag={setActiveTag}  activeTag={activeTag} />
        </div>
        <div className=" flex-1 flex flex-col gap-5 max-h-screen overflow-auto">
          <div className=" flex p-2 justify-between items-center">
            <span className=" text-sm ">
              Showing {start}–{end} of {productCount} results
            </span>
            <label
              htmlFor="priceSort"
              className="text-sm flex items-center gap-3"
            >
              Sort by Price:{" "}
              <select
              value={sort}
              onChange={ (e) => {
                setSort(e.target.value)
                // console.log(e.target.value)
                setPage(1)
              }}
                name=""
                id="priceSort"
                className=" px-2 bg-transparent custom-select flex justify-center items-center cursor-pointer"
              >
                <option value="none" className="option">
                  
                  none
                </option>
                <option value="asc" className="option">
                  low to high
                </option>
                <option className="option" value="desc">
                  high to low
                </option>
              </select>
            </label>
          </div>
          <div className="flex flex-wrap gap-5 items-start">
            {products?.length > 0 &&
              products.map((product) => (
                <Product key={product.name + Math.random()} product={product} />
              ))}

            {loading && (
              <div className=" w-full h-52 text-center  flex justify-center pt-28 ">
                <i className="bx text-9xl text-[#bcbcbc] bx-loader-circle bx-spin bx-rotate-90"></i>
              </div>
            )}

            {error && (
              <div className="text-accent capitalize w-full pt-28 text-4xl h-52 text-center">
                {" "}
                <p>{error}</p>{" "}
                <span className=" text-base">try agian later</span>{" "}
              </div>
            )}
          </div>

          <div className="w-full px-5 py-2-">
            {
             products && products.length > 1 && 
            
             <div className="flex justify-center gap-5">

             <button
               onClick={() => {
                 if (page > 1) {
                   setPage(page - 1);
                 }
               }}
               className="text-2xl w-10 aspect-square rounded-full flex items-center justify-center transition-all duration-300 ease-in-out border border-solid border-transparent hover:border-accent"
             >
               <i className="bx bx-left-arrow-alt"></i>
             </button>
           

             {[...Array(Math.ceil(productCount / 9))].map((_, index) => {
               const currentPage = index + 1;
               const totalPages = Math.ceil(productCount / 9);
           
               // Show only:
               // 1. The first page
               // 2. The last page
               // 3. Pages around the current page (current, +2, -2)
               if (
                 currentPage === 1 ||
                 currentPage === totalPages ||
                 (currentPage >= page - 2 && currentPage <= page + 2)
               ) {
                 return (
                   <button
                     key={index}
                     className={`p-2 ${
                       page === currentPage
                         ? "text-secondary w-10 flex justify-center items-center aspect-square rounded-full border border-solid border-accent"
                         : ""
                     }`}
                     onClick={() => setPage(currentPage)}
                   >
                     {currentPage}
                   </button>
                 );
               }
           
               if (
                 (currentPage === page - 3 && page > 4) ||
                 (currentPage === page + 3 && page < totalPages - 3)
               ) {
                 return (
                   <span key={index} className="p-2 text-gray-500">
                     ...
                   </span>
                 );
               }
           
               return null;
             })}
           

             <button
               onClick={() => {
                 if (page < Math.ceil(productCount / 9)) {
                   setPage(page + 1);
                 }
               }}
               className="text-2xl w-10 aspect-square rounded-full flex items-center justify-center transition-all duration-300 ease-in-out border border-solid border-transparent hover:border-accent"
             >
               <i className="bx bx-right-arrow-alt"></i>
             </button>
           </div>
           
          }
          </div>
        </div>
      </section>
    </>
  );
}

export default Shop;
