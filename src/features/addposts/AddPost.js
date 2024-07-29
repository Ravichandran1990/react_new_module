import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "../posts/postsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { getAllUsers } from "../users/usersSlice";


const AddPost = () => {
    const dispatch = useDispatch();
    const users = useSelector(getAllUsers);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState();

    const onTitleChange = (e) => setTitle(e.target.value);
    const onContentChange = (e) => setContent(e.target.value);
    const userChange = (e) => setUserId(e.target.value);

    useEffect(() => {
        setUserId(users[0].id);
    }, [users]);

    const onSave = title && content && userId;
    const onSaveFormData = (e) => {
        e.preventDefault();
        dispatch(postAdded({
            id: nanoid(),
            title,
            content,
            userId,
            reactions: {
                smile: 0,
                crying: 0
            }
        }))
        setTitle('')
        setContent('')
    };

    const userOptions = users.map((user) => (
        <option value={user.id} key={user.id}>{user.name}</option>
    ))
    return (
        <>
            <form>
                <label>Title</label>
                <input type="text" value={title} onChange={onTitleChange} />
                <label>Content</label>
                <textarea onChange={onContentChange} value={content}> </textarea>
                <select value={userId} onChange={userChange}>
                    {userOptions}
                </select>
                <button onClick={onSaveFormData} disabled={!onSave}>on Save data</button> 
            </form>
        </>
    )
};

export default AddPost;