import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { getList } from './List/ListReducer';
import { getBudget } from './Budget/BudgetReducer';

export default function Remainder(props) {
    const list = useSelector(getList);
    const budget = useSelector(getBudget);

    var total = list.reduce((a, v) => { return a + v.value }, 0);
    var rem = budget - total;

    rem = rem < 0 ? <small>over limit</small> : `$${rem}`;

    return (
        <Fragment>
            <div className='col-md-4'>
                <div className='rem d-flex align-items-center'>
                    <div className='me-3'>
                        Remaining: {rem}
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='total d-flex align-items-center'>
                    <div className='me-3'>
                        Total spent: ${total}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}