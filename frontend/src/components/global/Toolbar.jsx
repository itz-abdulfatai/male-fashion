import { useContext, useState } from "react"
import UserContext from "../../contexts/UserContext"
import LoggedOutGroup from "./LoggedOutGroup"
import AdminGroup from "./AdminGroup"
import LoggedInGroup from "./LoggedInGroup"
function Toolbar() {
    const [active, setActive] = useState(false)

  

    const { state } = useContext(UserContext);
    return (
      <>
        {/* toolbar in mobile */}

        {/* {state.isLoggedIn ? (
          state.user?.role == "ceo" || state.user?.role == "admin" ? (
            <AdminGroup />
          ) : (
            <LoggedInGroup />
          )
        ) : !state.isLoggedIn ? (
          <LoggedOutGroup active={active} setActive={setActive} />
        ) : null} */}
        <nav className=" flex items-center  px-2 py-1 bg-neutral rounded-full  relative overflow-hidden">
          <div
            className={` flex items-center justify-between gap-2 text-2xl relative w-0 md:w-auto menu overflow-hidden transition-all duration-1000 ${
              active && " w-auto"
            } `}
          >
            {state.isLoggedIn ? (
              state.user?.role == "ceo" || state.user?.role == "admin" ? (
                <AdminGroup />
              ) : (
                <LoggedInGroup />
              )
            ) : !state.isLoggedIn ? (
              <LoggedOutGroup active={active} setActive={setActive} />
            ) : null}
          </div>

          <button
            onClick={() => setActive(!active)}
            className=" md:hidden z-30 flex justify-center items-center "
            title="menu"
          >
            <i className="bx   bx-menu text-3xl"></i>
          </button>
        </nav>

        {/* toolbar in pc */}

        {/* {
        state.isLoggedIn ? state.user?.role == 'ceo' || state.user?.role == 'admin'? (<AdminGroup/>) : (<LoggedInGroup/>) :
        !state.isLoggedIn ? (<LoggedOutGroup active={active} setActive={setActive}/>): null
        } */}
      </>
    );
}

export default Toolbar