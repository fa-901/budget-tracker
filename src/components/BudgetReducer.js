import { createSlice } from '@reduxjs/toolkit';

export const budgetSlice = createSlice({
    name: 'budget',
    initialState: {
        value: 0,
    },
    reducers: {
        setAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { setAmount } = budgetSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.budget.value;

export default budgetSlice.reducer;
