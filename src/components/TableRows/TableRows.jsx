export function TableRows({ rowsData, deleteTableRows, handleChange }) {
  return rowsData.map((data, index) => {
    const { date, description, option,  amount } = data
    
    return (
      <tr key={index}>
        <td>
          <input
            type='date'
            value={date}
            onChange={(event) => handleChange(index, event)}
            name='date'
            className='form-control'
          />
        </td>
        <td>
          <input
            type='text'
            value={description}
            onChange={(event) => handleChange(index, event)}
            name='description'
            className='form-control'
          />{' '}
        </td>
        <td>
          <select
            name='option'
            value ={option}
            onChange={(event) => handleChange(index, event)}
            className={'form-select'}     
          >
            <option value='Expense'>Expense</option>
            <option value='Income'>Income</option>
          </select>
        </td>
        <td>
          <input
            type='number'
            value={amount}
            onChange={(event) => handleChange(index, event)}
            name='amount'
            className='form-control'
          />{' '}
        </td>
        <td>
          <button
            className='btn btn-outline-danger'
            onClick={() => deleteTableRows(index)}
          >
            x
          </button>
        </td>
      </tr>
    )
  })
}

export default TableRows
