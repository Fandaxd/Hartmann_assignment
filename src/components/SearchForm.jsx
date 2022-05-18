import React from 'react'

const SearchForm = (props) => {
  return (
    <div className='search-inputs'>
      <label htmlFor="Search">Search an item: </label>
      
      <input name='Search' type="text" onKeyPress={event => {if(/[^a-zA-Z]/.test(event.key)) event.preventDefault()}} placeholder='Search...' onChange={event => props.setSearchTerm(event.target.value)} />
      <br />
      <label htmlFor="Amount">Amount in grams: </label>
      
      <input name='Amount' type="number" placeholder='amount in grams' value={props.amount} onChange={(e) => props.setAmount(e.target.value)} />
      <br />
      <button className="btn btn-success" onClick={() => {
        props.fetchData()
        props.setAmountForDisplay(props.amount)
      }}>Get Data</button>
    </div>
  )
}

export default SearchForm