export default function ExpenseForm(props) {
    return (
        <div className='mb-4'>
            <h2 className=''>
                Add Expense
            </h2>
            <div className='d-flex'>
                <div className='flex-fill me-2'>
                    <input className='txt-input' placeholder='Name' type="text" />
                </div>
                <div className='flex-fill mx-2'>
                    <input className='txt-input' placeholder='Cost' type="text" />
                </div>
                <button className=''>
                    <i className="far fa-save"></i>
                </button>
            </div>
        </div>
    )
}