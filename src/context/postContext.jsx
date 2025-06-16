import { createContext, useEffect, useState } from "react";
import axios from "axios";

const PostContext = createContext();

export const PostProvider = ({children}) =>{
    const [posts, setPosts] = useState([])

    useEffect(() => {
    axios
      .get("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts?page=1&limit=50")
      .then((resp) => {
        setPosts(resp.data);
      });
  }, []);

  return(
    <PostContext.Provider value = {{posts}}>
    {children}
    </PostContext.Provider>

  );
};




export default PostContext;