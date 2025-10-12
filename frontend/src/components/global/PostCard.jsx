 function PostCard ({post}) {
    return (
    <div className="group bg-white relative w-full md:min-w-[350px] max-w-[360px] min-h-40 flex flex-col items-stretch">
      <img src={post.image || `https://picsum.photos/200/${300 + Math.floor(Math.random()*9)}?random=1`} alt="" className="h-[270px]" />
      <div className="text-black flex justify-center items-start">
  
      <div className="bg-white group-hover:little-shadow -translate-y-10 w-[80%] p-4 flex flex-col items-start gap-3">
      <span className=" text-[#3d3d3d] text-sm "><i className='bx bx-calendar' ></i>{new Date(post.timestamps.createdAt).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })}</span>
  
    <h3 className="font-bold text-lg">{post.title}</h3>
    <a href="" className=" letter-space uppercase text-sm font-bold py-[3px] border-solid border-b-2  border-accent group-hover:border-accent md:border-black">read more</a>
    </div>
  
  
      </div>
    </div>
  )}

  export default PostCard