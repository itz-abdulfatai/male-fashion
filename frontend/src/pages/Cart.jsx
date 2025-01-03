import CartItems from "../components/cart/CartItems"
import CartTotal from "../components/cart/CartTotal"
import LocationDisplay from "../components/global/LocationDisplay"

function Cart () {
  return (
  <>



  <LocationDisplay/>
  <section className=" flex items-stretch gap-10 flex-col lg:flex-row">

  {/* cart items */}

  <CartItems/>

  {/* cart total */}

  <CartTotal/>
  
  
  </section>
  </>
)}
export default Cart