import { createContext, useContext, useState } from "react";
import { createPostReq, getPostsReq} from "../api/posts";

 
const PostContext = createContext();

export const usePosts = () => {
    const context = useContext(PostContext);

    if(!context){
        throw new Error("usePosts must be used within a PostProvider");
    }
    return context;
};

export function PostProvider({ children }) {

    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            const res = await getPostsReq();
            setPosts(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    const createPost = async (post) => {
      try {
        const res = await createPostReq(post);
        console.log(res.data)  
      } catch (error) {
        console.log(error);
      } 
    };

    return (
        <PostContext.Provider 
        value={{
            posts,
            createPost,
            getPosts,
        }}>
        { children}
        </PostContext.Provider>
    );
}