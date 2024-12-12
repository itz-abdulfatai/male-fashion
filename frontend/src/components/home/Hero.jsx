import { Link } from "react-router-dom"

function Hero() {



  return (
    <section className=" bg-neutral disp">
        <div className="">
            <span>summer collections</span>
            <h1>
                Fall - Winter Collections 2024
            </h1>
            <p className=""> a special label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.</p>
            <Link to='/shop'> shop now <i className='bx bx-arrow-back bx-rotate-180' ></i></Link>
        </div>
        <div className="">
            
        </div>
    </section>
  )
}

export default Hero