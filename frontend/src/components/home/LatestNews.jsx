import { useEffect, useState } from "react"
import { BlogPosts } from "../../assets/constants"
import PropTypes from 'prop-types';

function LatestNews() {
    const [posts, setPosts] = useState([...BlogPosts])

    useEffect(() => {
        setPosts([...BlogPosts])
    }, [])
  return (
    <section className=" min-h-[60vh] flex flex-col items-center gap-5 md:gap-10 ">
        <span className="text-accent  text-sm font-bold uppercase letter-space">Latest News</span>
        <h2 className=" font-bold leading-10 text-4xl">Fashion New Trends</h2>
        <div className=" flex items-center flex-col md:flex-row md:justify-center gap-10">
            {
                posts.filter(post => post.visibility == 'public').map((post, index) => {
                    if (index < 3 ) return (
                        <PostCard post={post} key={index}/>
                    )
                })
                
        }
        </div>
    </section>
  )
}

export default LatestNews

function PostCard ({post}) {
  return (
  <div className="group bg-white relative w-full md:min-w-[350px] max-w-[360px] min-h-40 flex flex-col items-stretch">
    <img src={post.image || 'https://picsum.photos/200/300?random=1'} alt="" className="h-[270px]" />
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

const BlogPostPropTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    visibility: PropTypes.oneOf(['public', 'private']).isRequired,
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
    author: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    timestamps: PropTypes.shape({
      createdAt: PropTypes.string.isRequired, // ISO 8601 format
      updatedAt: PropTypes.string.isRequired, // ISO 8601 format
    }).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string, // nullable
  };

  PostCard.propTypes = {
    post: PropTypes.shape(BlogPostPropTypes).isRequired,
  };