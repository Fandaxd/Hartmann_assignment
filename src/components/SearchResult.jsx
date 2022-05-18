import React from 'react'
import random from "random-key-generator" //react package

const SearchResult = (props) => {
  return (
    <div className="search-result">
        {!props.loading ? (props.data ? 
        <div className='search-success'>
            <h4>stats for {props.amountForDisplay} grams of {props.data.name}</h4>
            <br />
            <br />
            <table>
                <tbody>
                    <tr>
                        <th>Calories</th>
                        <td>{props.toFixedIfNecessary(props.data.calories * (props.amountForDisplay/100), 2)} kcal</td>
                    </tr>
                    <tr>
                        <th>Carbs</th>
                        <td>{props.toFixedIfNecessary(props.data.carbohydrates_total_g * (props.amountForDisplay/100), 2)} g</td>
                    </tr>
                    <tr>
                        <th>Sugar</th>
                        <td>{props.toFixedIfNecessary(props.data.sugar_g * (props.amountForDisplay/100), 2)} g</td>
                    </tr>
                    <tr>
                        <th>Fat</th>
                        <td>{props.toFixedIfNecessary(props.data.fat_total_g * (props.amountForDisplay/100), 2)} g</td>
                    </tr>
                    <tr>
                        <th>Protein</th>
                        <td>{props.toFixedIfNecessary(props.data.protein_g * (props.amountForDisplay/100), 2)} g</td>
                    </tr>
                    <tr>
                        <th>Fiber</th>
                        <td>{props.toFixedIfNecessary(props.data.fiber_g * (props.amountForDisplay/100), 2)} g</td>
                    </tr>
                    <tr>
                        <th>Sodium</th>
                        <td>{props.toFixedIfNecessary(props.data.sodium_mg * (props.amountForDisplay/100), 2)} mg</td>
                    </tr>
                </tbody>
            </table>
            <button className="btn btn-success" onClick={() => {
                if(props.total.length >= 9) {
                    alert("You've reached the maximum amount of items. Please remove some if you want to add others.")
                    return
                }
                props.setTotal((prevTotal) => [...prevTotal, { data: props.data, amount: props.amountForDisplay, key: random() }])
            }}>Add to total
            </button>
        </div>
        
        : <p className='invalid-search'>Search a valid food so I can show it :d</p>)
        : <p className='fetching'>fetching data...</p>
        }
    </div>
  )
}

export default SearchResult