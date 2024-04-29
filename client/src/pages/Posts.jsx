import {Link} from 'react-router-dom';
import { usePosts } from '../context/PostsContext';
import { useEffect } from 'react';

function Posts () {
  const { getPosts, posts } = usePosts();

  useEffect(() => {
    getPosts()
  }, [])
  

  return <div className='home'>
     <div className="posts">
       {posts.map(post=>(
         <div className="post" key={post._id}>
           <div className="img">
             <img src={post.img} alt=''/>
           </div>
           <div className="content">
             <Link className='link' to={`/post/${post._id}`}>
             <h1>{post.title}</h1>
             <p>{post.description}</p>
             <button>Read More</button>
             </Link>
           </div>
         </div>
        
       ))}
     </div>
   </div>

};

export default Posts