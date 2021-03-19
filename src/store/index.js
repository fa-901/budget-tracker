import { configureStore } from '@reduxjs/toolkit';
import budgetReducer from '../components/BudgetReducer';
import listReducer from '../components/List/ListReducer';

export default configureStore({
    reducer: {
        budget: budgetReducer,
        list: listReducer,
    },
});
