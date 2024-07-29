import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: '1',
        name: 'Ravi'
    },
    {
        id: '2',
        name: 'Vihaan'
    },
    {
        id: '3',
        name: 'Mallesh'
    }
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export const getAllUsers = state => state.users;

export const usersReducer = usersSlice.reducer;