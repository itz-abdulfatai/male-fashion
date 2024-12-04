import { Link } from "react-router-dom"
import Nav from "./Nav"

function Header() {
  return (
    <header>
      <Link to='/'><img src="/logo.png" alt="Home" /></Link>
      <Nav/>
      <>
      </>

    </header>
  )
}

export default Header