import { createSlice } from '@reduxjs/toolkit';

export const listSlice = createSlice({
    name: 'list',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },
        removeItem: (state, action) => {
            return state.filter((e, i) => { return i !== action.payload });
        },
    },
});

export const { addItem, removeItem } = listSlice.actions;

export const getList = state => state.list;

export default listSlice.reducer;
