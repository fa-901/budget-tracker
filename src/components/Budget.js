import { useState, useRef } from 'react';
import {
    setAmount,
    selectCount,
} from './BudgetReducer';

import { useSelector, useDispatch } from 'react-redux'


export default function Budget(props) {
    const value = useSelector(selectCount);
    const dispatch = useDispatch();
    const [isEdit, switchEdit] = useState(false);
    const [input, handleInput] = useState(value);
    const inputRef = useRef(null);

    function toggleEdit() {
        switchEdit(p => !p);
    }

    var display = isEdit ? (
        <input type='number' className='num-input' value={input} onChange={(e) => { handleInput(e.currentTarget.value) }} onBlur={toggleEdit} ref={inputRef} />
    ) : `Budget: $${value}`;

    return (
        <div className='budget d-flex align-items-center'>
            <div className='me-3'>
                {display}
            </div>
            <button className='ms-auto' onClick={toggleEdit} >
                <i className={`far fa-${isEdit ? 'save' : 'edit'}`}></i>
            </button>
        </div>
    )
}