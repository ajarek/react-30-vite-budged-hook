import { useState } from 'react'
import TableRows from '../TableRows/TableRows'
import classes from './styles.module.css'
export function AddDeleteTableRows() {
  const [rowsData, setRowsData] = useState([])

  const addTableRows = () => {
    const rowsInput = {
      Date: new Date(),
      Description: '',
      Select: '',
      Amount: '',
    }
    setRowsData([...rowsData, rowsInput])
  }
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
      <div className='row '>
        <div className='col-lg-12 '>
          <table className={`table ${classes.table1}`}>
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
          Total: <span>0</span>
        </h4>
      </div>
    </div>
  )
}
export default AddDeleteTableRows
