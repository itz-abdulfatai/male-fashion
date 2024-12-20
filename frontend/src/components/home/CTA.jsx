function CTA() {
  return (
    <section className="min-h-[70vh] gap-10 flex flex-col lg:flex-row items-stretch md:items-center " >
        <div className=" md:basis-2/3 flex flex-wrap ">
            <img src="/ig-imgs/ig-2.webp" alt="cta image" />
            <img src="/ig-imgs/ig-3.webp" alt="cta image" />
            <img src="/ig-imgs/ig-4.webp" className=" hidden md:block" alt="cta image" />
            <img src="/ig-imgs/ig-5.webp" className=" hidden md:block" alt="cta image" />
            <img src="/ig-imgs/ig-6.webp" className=" hidden md:block" alt="cta image" />
            <img src="/ig-imgs/ig-1.webp" className=" hidden md:block" alt="cta image" />
        </div> 
        <div className="md:basis-1/3 flex flex-col gap-10">
            <h2  className="font-bold text-4xl">Join the Golden Circle</h2>
            <p className="text-base text-[#3d3d3d]">Subscribe now for exclusive deals, early access to new arrivals, and golden perks you&#39;ll love. Your next favorite find is just an email away!</p>
            <form action="" className=" flex items-stretch w-full h-14 relative">
                <input type="email" className=" px-2 bg-transparent grow border-solid border-b-2 border-secondary placeholder:text-[#0f0f0f]"  placeholder="input email"/>
                <button className="px-2 py-1 text-secondary  text-2xl absolute right-3 bottom-3 flex justify-center items-center"><i className='bx bx-envelope'></i></button>
            </form>
        </div>
    </section>
  )
}

export default CTA