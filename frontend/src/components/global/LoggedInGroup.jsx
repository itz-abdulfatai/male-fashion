import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import NotificationDot from "./NotificationDot";

function LoggedInGroup() {
  const { userState = {} } = useContext(UserContext);
  return (
    <>
      <button className=" flex justify-stretch items-stretch " title="wishlist">
        <i className="bx bxs-heart accent-hover transition-all"></i>
      </button>
      <Link  to="/shop/cart" className=" flex justify-stretch  relative group items-stretch " title="cart">
        <i className="bx accent-hover transition-all bxs-shopping-bag-alt"></i>
        <NotificationDot/>
      </Link>
      <button
        className=" flex justify-stretch items-stretch w-6 rounded-full overflow-hidden border-1 border-secondary border-solid aspect-square"
        title="account"
      >
        <img src={userState.user?.avatar || "/avatar.jpg"} alt="user avatar" />
      </button>
    </>
    // <div className=" flex items-center justify-center gap-5 text-2xl bg-neutral px-3 py-1 rounded-3xl">
    //   <button className=" flex justify-stretch items-stretch " title="wishlist"><i className='bx bxs-heart accent-hover'></i></button>
    //   <button className=" flex justify-stretch items-stretch " title="cart"><i className='bx accent-hover bxs-shopping-bag-alt' ></i></button>
    //   <button className=" flex justify-stretch items-stretch w-6 rounded-full overflow-hidden border-2 border-secondary border-solid aspect-square" title="account"><img src={userState.user?.avatar || '/avatar.jpg'} alt="user avatar" /></button>

    // </div>
  );
}

export default LoggedInGroup;

// wishlist
// cart
// avatar
