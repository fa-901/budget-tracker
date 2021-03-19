import { createSlice } from '@reduxjs/toolkit';

export const listSlice = createSlice({
    name: 'list',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            let key = new Date().toISOString();
            state.push({ ...action.payload, key });
        },
        removeItem: (state, action) => {
            return state.filter((e, i) => { return e.key !== action.payload });
        },
    },
});

export const { addItem, removeItem } = listSlice.actions;

export const getList = state => state.list;

export default listSlice.reducer;
