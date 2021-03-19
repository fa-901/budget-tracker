import { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getList, removeItem } from './ListReducer';


export default function ExpenseList(props) {
    const [inp, setInp] = useState('');
    const dispatch = useDispatch();
    const list = useSelector(getList);

    function search(e) {
        setInp(e.currentTarget.value);
    }

    let display = list.filter((e) => {
        if (!inp) {
            return true;
        }
        let reg = new RegExp(inp, 'i');
        return reg.test(e.name);
    }).map((e, i) => {
        return (
            <li key={e.key} className="list-group-item d-flex">
                <span>{e.name}</span>
                <span className='ms-auto'>
                    <span className='rounded-pill p-1 bg-y'>${e.value}</span>
                    <span className='ms-2 fs-6 fas fa-times c-pointer' onClick={() => { dispatch(removeItem(e.key)) }}></span>
                </span>
            </li>
        )
    });

    if (list.length < 1) {
        display = (
            <div className="text-center hint">You have no items in your list</div>
        )
    }

    return (
        <Fragment>
            <h2>
                Expense List
            </h2>
            <div className='mb-3'>
                <input
                    className='txt-input'
                    placeholder='Search...'
                    type="text"
                    onChange={search}
                    value={inp}
                />
            </div>
            <ul className='list-group'>
                {display}
            </ul>
        </Fragment>
    )
}