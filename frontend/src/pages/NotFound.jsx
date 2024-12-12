import { Link } from "react-router-dom"
import { navLinks } from "../assets/constants"

function NotFound() {
  
  return (
    <section className=" bg-neutral flex  flex-col justify-center items-center gap-10 md:gap-20 min-h-screen">

<Link to="/">
        <img
          className="max-md:h-4 object-cover"
          src={
            document.documentElement.classList.contains("dark")
              ? "/logo-white.png"
              : "/logo.png"
          }
          alt="Home"
        />
      </Link>

      <div className=" flex flex-col gap-10 justify-center items-center">
        <h1 className=" text-9xl md:text-[20rem] font-extrabold text-accent">404</h1>
        <p className=" text-xl">Not Found</p>
        <nav className=" flex justify-center items-center gap-5">

        {
          navLinks.map((link, index) => (
            <Link className={`hover:border-b-accent accent-hover transition-all capitalize duration-100 ease-linear border-b-2 border-solid border-primary py-1 `} key={ index} to={link.href}>{link.name}</Link>
          ))
        }
        </nav>
      </div>
      
    </section>
  )
}

export default NotFound