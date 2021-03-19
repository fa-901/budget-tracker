import { createSlice } from '@reduxjs/toolkit';

export const budgetSlice = createSlice({
    name: 'budget',
    initialState: {
        value: 100,
    },
    reducers: {
        setAmount: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setAmount } = budgetSlice.actions;

export const getBudget = state => state.budget.value;

export default budgetSlice.reducer;
