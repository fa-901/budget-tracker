import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getList, removeItem } from './ListReducer';


export default function ExpenseList(props) {
    const dispatch = useDispatch();
    const list = useSelector(getList);

    let display = list.map((e, i) => {
        return (
            <li key={i} className="list-group-item d-flex">
                <span>{e.name}</span>
                <span className='ms-auto'>
                    <span className='rounded-pill p-1 bg-y'>${e.value}</span>
                    <span className='ms-2 fs-6 fas fa-times c-pointer' onClick={() => { dispatch(removeItem(i)) }}></span>
                </span>
            </li>
        )
    });

    return (
        <Fragment>
            <h2>
                Expense List
            </h2>
            <ul className='list-group'>
                {display}
            </ul>
        </Fragment>
    )
}