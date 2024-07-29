import { useSelector } from "react-redux";
import { getAllPosts } from './postsSlice';

import GetUser from "../users/GetUser";
import Emojis from "../emojis/Emojis";

const PostsList = () => {
    const posts = useSelector(getAllPosts);
    
    const renderedPosts = posts.map((post) => (
        <article key={post.id} className="article">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <GetUser userId={post?.userId}/>
            <Emojis post={post}/>
        </article> 
    ))
    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}

export default PostsList;