import {
    setAmount,
    selectCount,
} from './BudgetReducer';

import { useSelector, useDispatch } from 'react-redux'


export default function Budget(props) {
    const value = useSelector(selectCount);
    const dispatch = useDispatch();


    return (
        <div className='budget'>
            Budget: ${value}
            <div></div>
        </div>
    )
}