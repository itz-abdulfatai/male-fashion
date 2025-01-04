import { Link, useLocation } from "react-router-dom"

function LocationDisplay() {

  const {pathname} = useLocation()

  const links = pathname.split('/').filter(l => l !== '')


  console.log(links)
  return (
    <div className=" flex w-full flex-col sm:px-28 px-10 gap-4 padding-y bg-neutral  ">
    <h1 className="font-bold text-2xl capitalize">
      {
        links.length > 0? links[links.length - 1] : 'Location'
      }
    </h1>
    <div className=" flex items-center gap-2">
<Link to='/' className="text-secondary capitalize ">Home</Link>
{links.length > 0 && <span> {'>'}</span>}

{
  links.map((link, index) => (

    <>
    {
      link == links[links.length - 1] ? 

      <span key={index + Math.random()} className={`text-neutral hover:text-primary capitalize transition-all duration-200 ${link === links[index] && 'text-primary'}`}>
      {link}
    </span>
      
      :
      <Link key={index + Math.random()}  to={`/${links.slice(0, index + 1).join('/')}`} className={`text-secondary hover:text-primary capitalize transition-all duration-200 ${link === links[index] && 'text-primary'}`}>
        {link}
      </Link>
    }

      {
  index < (links.length - 1) && <span className="text-[#bcbcbc]"> {'>'} </span>
        }
    </>
  ))
}

     {/* {
     links.map((link, index) => (

      <>
        <Link key={index} to={link.to} className={`text-neutral hover:text-primary capitalize transition-all duration-200 ${link.active && 'text-primary'}`}>
          {link.label}
        </Link>

        {
  index < (linkss.length - 1) && <span className="text-[#bcbcbc]"> {'>'} </span>
        }
      </>
    //    {index < (links.length - 1) && <span className="text-[#bcbcbc]"> {'>'} </span>}


     )


     )
     
     } */}
    </div>
  </div>
  )
}

export default LocationDisplay

{/* <div className=" flex w-full flex-col sm:px-28 px-10 gap-4 padding-y bg-neutral  ">
<h1 className="font-bold text-2xl capitalize">shop</h1>
<div className=" flex items-center gap-2">
  <Link to="/">Home</Link> {">"}{" "}
  <span className=" text-[#bcbcbc] cursor-pointer">Shop</span>
</div>
</div> */}