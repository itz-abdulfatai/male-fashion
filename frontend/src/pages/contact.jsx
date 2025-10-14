import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className=" flex flex-col items-stretch md:gap-20 ">
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7693927.968487424!2d25.7179386!3d61.9138602!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4681cadf4b32f6dd%3A0x146d63c75a810!2sFinland!5e0!3m2!1sen!2sng!4v1735069695376!5m2!1sen!2sng"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <section className=" flex-col gap-10 md:flex-row w-full flex  my-10 md:my-0">
          <div className="flex flex-col gap-8 w-full">
            <span className="text-accent text-sm font-bold uppercase letter-space">
              information
            </span>
            <h1 className=" text-5xl capitalize font-bold">contact us</h1>
            <p className="inner-contact">
              As you might expect of a company that began as a high-end
              interiors contractor, we pay strict attetion.
            </p>
            <div>
              <h2 className="contact-h2">America</h2>
              <p className="inner-contact">
                195 E Parker Square Dr, Parker, CO 801{" "}
              </p>
              <Link
                className="inner-contact"
                target="_blank"
                to="https://wa.link/w91nvu"
              >
                (303) 456-7890
              </Link>
            </div>

            <div>
              <h2 className="contact-h2"> wakanda</h2>
              <Link className="inner-contact">
                195 E tchala cresent Dr, Parker, CO 801{" "}
              </Link>
              <Link
                className="inner-contact"
                target="_blank"
                to="https://wa.link/w91nvu"
              >
                (303) 456-7890
              </Link>
            </div>
          </div>

          <form action="" className="w-full flex flex-col gap-8 items-stretch ">
            <div className="flex items-center flex-col md:flex-row justify-stretch gap-5">
              <input
                type="text"
                placeholder="Name"
                className="px-5 py-4 w-full bg-transparent border border-solid border-secondary"
              />
              <input
                type="text"
                className="px-5 py-4 w-full bg-transparent border border-solid border-secondary"
                placeholder="Email"
              />
            </div>
            <textarea
              name=""
              id=""
              rows={5}
              className=" resize-none px-5 py-4 w-full bg-transparent border border-solid border-secondary"
            ></textarea>
            <button className="bg-secondary text-primary px-9 uppercase font-bold bext-2xl py-3 self-start">
              send message
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Contact;
