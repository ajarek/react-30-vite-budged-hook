export function TableRows({ rowsData, deleteTableRows, handleChange }) {
  return rowsData.map((data, index) => {
    const { Date, Description, Amount } = data
    return (
      <tr key={index}>
        <td>
          <input
            type='date'
            value={Date}
            onChange={(event) => handleChange(index, event)}
            name='Date'
            className='form-control'
          />
        </td>
        <td>
          <input
            type='text'
            value={Description}
            onChange={(event) => handleChange(index, event)}
            name='Description'
            className='form-control'
          />{' '}
        </td>
        <td>
          <select
            name='Type'
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
            value={Amount}
            onChange={(event) => handleChange(index, event)}
            name='Amount'
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
