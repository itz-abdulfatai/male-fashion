import LocationDisplay from "../components/global/LocationDisplay";
import WishlistItems from "../components/wishlist/WishlistItems";

function Wishlist() {
  return (
    <>
      <LocationDisplay />
      <section className=" flex items-stretch gap-10 flex-col lg:flex-row">
        {/* Wishlist items */}

        <WishlistItems />
      </section>
    </>
  );
}
export default Wishlist;
