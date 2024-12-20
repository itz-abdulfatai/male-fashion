import { Link } from "react-router-dom";

function ShowCase() {
  return (
    <section className=" max-md:showcase-flex md:showcase-grid min-h-[170vh]">
      <div className=" relative flex group">
        <div className="md:absolute flex-col flex gap-5  items-start text  bg-transparent">
          <span className=" font-bold  capitalize">
            Clothing <br className=" hidden md:block" /> Collections 2030
          </span>
          <Link
            className=" uppercase font-semibold border-0 border-b-2 border-solid border-transparent group-hover:border-accent  "
            style={{ letterSpacing: "4px" }}
          >
            shop now
          </Link>
        </div>
        <img
          className="w-full object-cover"
          src="/sweater.webp"
          alt="showcase img"
        />
      </div>
      <div className=" relative group">
        <img
          className="w-full object-cover"
          src="/glass.webp"
          alt="showcase img"
        />
        <div className="md:absolute flex-col flex gap-5 items-start text bg-transparent">
          <span className=" font-bold  capitalize">
            accessories <br className=" hidden md:block" />
          </span>
          <Link
            className=" uppercase font-semibold border-0 border-b-2 border-solid border-transparent group-hover:border-accent  "
            style={{ letterSpacing: "4px" }}
          >
            shop now
          </Link>
        </div>
      </div>
      <div className=" relative group ">
        <img
          className="w-full object-cover"
          src="/sneak.webp"
          alt="showcase img"
        />

        <div className="md:absolute flex-col flex gap-5 items-start text bg-transparent ">
          <span className=" font-bold  capitalize">
            shoe spring <br className=" hidden md:block" /> 2029
          </span>
          <Link
            className=" uppercase font-semibold border-0 border-b-2 border-solid border-transparent group-hover:border-accent  "
            style={{ letterSpacing: "4px" }}
          >
            shop now
          </Link>
        </div>
      </div>
    </section>
  );
}
export default ShowCase;
