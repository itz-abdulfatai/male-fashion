import { Link, useLocation } from "react-router-dom"
import { navLinks } from "../../assets/constants"

function Nav() {
  const {pathname} = useLocation()
  
  return (
    <nav className=" hidden md:flex justify-center items-center gap-10 capitalize text-lg ">
      {
        navLinks.map((link, index) => (
          <Link className={`hover:border-b-accent accent-hover capitalize transition-all duration-100 ease-linear border-b-2 border-solid border-primary py-1  ${(pathname === '/' && link.href === '/') || (pathname !== '/' && pathname.startsWith(link.href) && link.href !== '/') ? 'border-b-accent' : ''}`} key={ index} to={link.href}>{link.name}</Link>
        ))
      }
    </nav>
  )
}

export default Nav