import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: '1',
        title: 'Test',
        content: 'Test content',
        userId: '1',
        reactions: {
            smile: 0,
            crying: 0
        }
    }
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload);
        },
        reactionAdd(state, action) {
            const {postId, reaction} = action.payload;
            const existingPost = state.find(post => post.id === postId);
            if(existingPost) {
                existingPost.reactions[reaction]++;
            }
        }
    }
});

export const getAllPosts = state => state.posts;

export const { postAdded, reactionAdd } = postsSlice.actions;

export default postsSlice.reducer;