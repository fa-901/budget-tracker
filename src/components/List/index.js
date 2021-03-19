import { useDispatch, useSelector } from 'react-redux'
import { getList } from './ListReducer';


export default function ExpenseList(props) {
    const dispatch = useDispatch();
    const list = useSelector(getList);

    let display = list.map((e, i) => {
        return (
            <li key={i} className="list-group-item d-flex">
                <span>{e.name}</span>
                <span className='ms-auto'>
                    ${e.value}
                    <span className='ms-2 fs-6 fas fa-times c-pointer'></span>
                </span>
            </li>
        )
    });

    return (
        <ul className='list-group'>
            {display}
        </ul>
    )
}