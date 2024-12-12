function AdminGroup() {
  return (
    <>
      <button className=" flex justify-stretch items-stretch" title="search">
        <i className="bx accent-hover bx-search-alt-2"></i>
      </button>
      <button
        className=" flex justify-stretch items-stretch"
        title="admin dashboard"
      >
        <i className="bx accent-hover bxs-id-card"></i>
      </button>
      <button className=" flex justify-stretch items-stretch" title="login">
        <i className="bx accent-hover bx-log-out"></i>
      </button>
    </>
    // <div className=" flex items-center justify-center gap-2 md:gap-5 text-2xl bg-neutral px-3 py-1 rounded-3xl">
    //   <button className=" flex justify-stretch items-stretch"  title="search"><i className='bx accent-hover bx-search-alt-2' ></i></button>
    //   <button className=" flex justify-stretch items-stretch" title="admin dashboard"><i className='bx accent-hover bxs-id-card' ></i></button>
    //   <button className=" flex justify-stretch items-stretch" title="login"><i className='bx accent-hover bx-log-out'></i></button>

    // </div>
  );
}

export default AdminGroup;
// search
// dashboard
// logout

// <i class='bx bxs-id-card'></i>
