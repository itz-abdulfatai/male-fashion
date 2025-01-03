import { useEffect, useState } from "react"
import { BlogPosts } from "../../assets/constants"
import PropTypes from 'prop-types';
import PostCard from '../global/PostCard';

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