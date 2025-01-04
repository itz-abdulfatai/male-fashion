import BillingDetails from "../components/checkout/BillingDetails";
import OrderSummary from "../components/checkout/OrderSummary";
import LocationDisplay from "../components/global/LocationDisplay";

function Checkout() {
  return (
    <>
   <LocationDisplay/>

  <section className=" flex  gap-10 flex-col lg:flex-row items-start">
    {/* billing details */}

    <BillingDetails/>


    {/* order summary */}

    <OrderSummary/>


</section>
   
    </>
  )
}

export default Checkout