import { useState, useEffect, useRef } from 'react';
import {
    setAmount,
    getBudget,
} from './BudgetReducer';

import { useSelector, useDispatch } from 'react-redux'


export default function Budget(props) {
    const value = useSelector(getBudget);
    const dispatch = useDispatch();
    const [isEdit, switchEdit] = useState(false);
    const [input, handleInput] = useState(value);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isEdit) {
            inputRef.current.focus();
        }
        else{
            dispatch(setAmount(Number(input) || 0))
        }
    }, [isEdit]) // eslint-disable-line react-hooks/exhaustive-deps

    function toggleEdit() {
        switchEdit(p => !p);
    }

    function handleKeyDown(e) {
        if (e.key !== 'Enter') {
            return;
        }
        toggleEdit();
    }

    var display = isEdit ? (
        <input type='number' className='num-input' value={input} onChange={(e) => { handleInput(e.currentTarget.value) }} onKeyDown={handleKeyDown} ref={inputRef} />
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