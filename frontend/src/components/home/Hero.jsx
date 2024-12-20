import { Link } from "react-router-dom"
import { settings } from "../../assets/constants"

function Hero() {



  return (
    <section className=" bg-neutral bg-cover max-md:sml-hero bg-no-repeat  flex items-stretch md:hero flex-col  md:flex-row justify-center relative " style={{backgroundImage:'url(/hero-models.webp)'}}>
        <div className=" flex flex-col justify-center w-full gap-5 md:gap-10 items-start">
            <span className=" text-accent font-semibold uppercase">summer collections</span>
            <h1 className=" md:text-5xl text-4xl font-bold leading-[58px] text-black">
                Fall - Winter <br /> Collections 2024
            </h1>
            <p className=" md:max-w-[500px] text-black"> a unique brand producing luxury essentials. produced with a steadfast dedication to outstanding quality and ethics.</p>
            <Link to='/shop' className=" px-8 py-4 bg-black text-white flex justify-center items-center gap-5 uppercase font-semibold"> shop now <i className='bx bx-arrow-back bx-rotate-180' ></i></Link>
        </div>
        <div className=" w-full  justify-stretch items-stretch hidden md:flex" >
          {/* <img src="/hero-model.png" alt="hero model"  className=" object-cover"/> */}
            
        </div>
        <div className="absolute bottom-10 sm:left-16 left-8 flex items-center gap-5">
          {
            settings.socials.map (social => (
              <Link key={social.name} to={social.href} target="blank">
              <i  className={`bx ${social.class} text-xl text-black`}></i>
              </Link>
            ))
          }
        </div>
    </section>
  )
}

export default Hero