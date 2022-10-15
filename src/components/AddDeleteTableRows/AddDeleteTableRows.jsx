import { useEffect, useState } from 'react'
import TableRows from '../TableRows/TableRows'
import classes from './styles.module.css'
export function AddDeleteTableRows() {
  const [rowsData, setRowsData] = useState([])
  const [totalBalance, setTotalBalance] = useState(0)

  const addTableRows = () => {
    const rowsInput = {
      date: '',
      description: '',
      option:'Expense',
      amount: '',
    }
    setRowsData([...rowsData, rowsInput])
  }

  

  useEffect(() => {
    const total = rowsData?.reduce((acc, item) =>item.option==='Income'? acc + Number(item.amount):acc - Number(item.amount), 0)

    setTotalBalance(total)
  })

  const deleteTableRows = (index) => {
    const rows = [...rowsData]
    rows.splice(index, 1)
    setRowsData(rows)
  }

  const handleChange = (index, event) => {
    const { name, value } = event.target
    const rowsInput = [...rowsData]
    rowsInput[index][name] = value
    setRowsData(rowsInput)
  }
  return (
    <div className='container'>
      <div className='row  '>
        <div className='table-responsive '>
          <table className={`table `}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Type</th>
                <th>Amount</th>
                <th>
                  <button
                    className='btn btn-outline-success'
                    onClick={addTableRows}
                  >
                    New Entry
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <TableRows
                rowsData={rowsData}
                deleteTableRows={deleteTableRows}
                handleChange={handleChange}
              />
            </tbody>
          </table>
        </div>
        <div className='col-sm-4'></div>
        <h4>
          Total: <span>{totalBalance}</span>
        </h4>
      </div>
    </div>
  )
}
export default AddDeleteTableRows
