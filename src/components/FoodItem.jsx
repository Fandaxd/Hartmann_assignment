import React from 'react'
import { TiDelete } from "react-icons/ti"
import { TiInfo } from "react-icons/ti"

const FoodItem = (props) => {
    //remove item button
    const handleRemove = (keyToRemove) => {
        props.setTotal(prevTotal => prevTotal.filter(e => e.key !== keyToRemove))
    }

    return (
        <div className="food-item">
            <strong>{props.element.data.name}, {props.element.amount}g</strong>
            <div className="tooltip-homemade">
                <TiInfo className="info-icon"></TiInfo>
                <div className="tooltip-text">
                Carbs: {props.toFixedIfNecessary(props.element.data.carbohydrates_total_g * (props.element.amount/100), 2)} g
                <br />
                Sugar: {props.toFixedIfNecessary(props.element.data.sugar_g * (props.element.amount/100), 2)} g
                <br />
                Fat: {props.toFixedIfNecessary(props.element.data.fat_total_g * (props.element.amount/100), 2)} g
                <br />
                Protein: {props.toFixedIfNecessary(props.element.data.protein_g * (props.element.amount/100), 2)} g
                <br />
                Fiber: {props.toFixedIfNecessary(props.element.data.fiber_g * (props.element.amount/100), 2)} g
                <br />
                Sodium: {props.toFixedIfNecessary(props.element.data.sodium_mg * (props.element.amount/100), 2)} mg
                </div>
            </div>
            <p className="food-item-calories">{props.toFixedIfNecessary(props.element.data.calories * (props.element.amount/100), 2)}kcal</p>
            
            <TiDelete className="delete-icon" onClick={() => handleRemove(props.element.key)}></TiDelete>
        </div>
    )
}

export default FoodItem