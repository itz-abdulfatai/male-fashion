import { BlogPosts } from "../assets/constants"
import PostCard from "../components/global/PostCard"

function Blog() {
  return (
    <>
    <header className="h-80 bg-neutral bg-center bg-cover flex items-center justify-center" style={{backgroundImage: `url(/blog-hero.webp)`}}>

    <h1 className="text-white text-[60px] font-bold">
Our Blog
</h1>

    </header>

   
    <section className="flex justify-center flex-wrap gap-10">

      {
        BlogPosts.map((post, index) => (
          <PostCard post={post} key={index}/>
        ))
      }

    </section>
    
    </>
  )
}

export default Blog