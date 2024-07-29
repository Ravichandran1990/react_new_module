import { useDispatch } from "react-redux"
import { reactionAdd } from "../posts/postsSlice";
const emojisObj = {
    smile: '😀',
    crying: '😂'
}
const Emojis = ({post}) => {
    const dispatch = useDispatch(); 
    const emojies = Object.entries(emojisObj).map(([key, emoji]) => (
        <button key={key} onClick={() => dispatch(reactionAdd({postId: post.id, reaction: key}))}>{emoji} {post.reactions[key]}</button>
    ))
 
    return (
        <>
        <h3>
            Emojis
        </h3>         
        {emojies}
        </>
    )
}

export default Emojis;