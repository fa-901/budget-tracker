import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux'
import { addItem } from './List/ListReducer';


export default function ExpenseForm(props) {
    const dispatch = useDispatch();
    const [isFocused, setFocus] = useState(false);
    const nameRef = useRef(null);
    const valueRef = useRef(null);

    function toggleFocus(v) {
        setFocus(v);
    }

    function saveFn() {
        const name = nameRef.current.value;
        const value = Number(valueRef.current.value) || 0;
        dispatch(addItem({ name, value }))
        nameRef.current.value='';
        valueRef.current.value='';
    }

    function handleKeyDown(e) {
        if (e.key !== 'Enter') {
            return;
        }
        saveFn();
    }

    return (
        <div className='mb-4'>
            <h2 className=''>
                Add Expense
            </h2>
            <div className='d-flex'>
                <div className='flex-fill me-2'>
                    <input
                        onKeyDown={handleKeyDown}
                        className='txt-input'
                        placeholder='Name'
                        type="text"
                        onFocus={() => { toggleFocus(true) }}
                        onBlur={() => { toggleFocus(false) }}
                        ref={nameRef}
                    />
                </div>
                <div className='flex-fill mx-2'>
                    <input
                        onKeyDown={handleKeyDown}
                        className='txt-input'
                        placeholder='Cost'
                        type="text"
                        onFocus={() => { toggleFocus(true) }}
                        onBlur={() => { toggleFocus(false) }}
                        ref={valueRef}
                    />
                </div>
                <button className='' onClick={saveFn}>
                    <i className="far fa-save"></i>
                </button>
            </div>
            {isFocused && <div className="text-center hint">Press 'Enter' to save. Or use the button</div>}
        </div>
    )
}