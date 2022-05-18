import React from 'react'
import FoodItem from "./FoodItem"

const FoodItems = (props) => {
  return (
    <div>
        {props.total.map((e) => {
          return <FoodItem  element={e}
                            toFixedIfNecessary={props.toFixedIfNecessary}
                            setTotal={props.setTotal}
                            key={e.key}
                  />
          })
        }
    </div>
  )
}

export default FoodItems