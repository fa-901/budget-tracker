import { configureStore } from '@reduxjs/toolkit';
import budgetReducer from '../components/BudgetReducer';

export default configureStore({
    reducer: {
        budget: budgetReducer,
    },
});
