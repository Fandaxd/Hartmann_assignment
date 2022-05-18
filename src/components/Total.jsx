import FoodItems from "./FoodItems"

const Total = (props) => {
  return (
    <div className="total">
      <h3>Total</h3>
      <table>
        <tbody>
          <tr>
            <th>Calories</th>
            <td>{props.toFixedIfNecessary(props.totalCalories, 2)} kcal</td>
          </tr>
          <tr>
            <th>Carbs</th>
            <td>{props.toFixedIfNecessary(props.totalCarbs, 2)} g</td>
          </tr>
          <tr>
            <th>Sugar</th>
            <td>{props.toFixedIfNecessary(props.totalSugar, 2)} g</td>
          </tr>
          <tr>
            <th>Fat</th>
            <td>{props.toFixedIfNecessary(props.totalFat, 2)} g</td>
          </tr>
          <tr>
            <th>Protein</th>
            <td>{props.toFixedIfNecessary(props.totalProtein, 2)} g</td>
          </tr>
          <tr>
            <th>Fiber</th>
            <td>{props.toFixedIfNecessary(props.totalFiber, 2)} g</td>
          </tr>
          <tr>
            <th>Sodium</th>
            <td>{props.toFixedIfNecessary(props.totalSodium, 2)} mg</td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-danger" onClick={() => props.handleClear()}>Clear total</button>
    </div>
  )
}

export default Total