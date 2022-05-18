import { useEffect, useState } from 'react';
import './App.css';
import Total from './components/Total';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';
import FoodItems from './components/FoodItems';

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [data, setData] = useState(localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : "")
  const [amount, setAmount] = useState(100)
  //another amount state just for display, otherwise it renders/updates whenever user types in the input
  const [amountForDisplay, setAmountForDisplay] = useState(localStorage.getItem("amountForDisplay") || 100)
  
  const [total, setTotal] = useState(localStorage.getItem("total") ? JSON.parse(localStorage.getItem("total")) : [])
  const [loading, setLoading] = useState(false)

  const [totalCalories, setTotalCalories] = useState(0)
  const [totalProtein, setTotalProtein] = useState(0)
  const [totalSugar, setTotalSugar] = useState(0)
  const [totalCarbs, setTotalCarbs] = useState(0)
  const [totalFat, setTotalFat] = useState(0)
  const [totalSodium, setTotalSodium] = useState(0)
  const [totalFiber, setTotalFiber] = useState(0)
  

  function toFixedIfNecessary( value, dp ){
    return +parseFloat(value).toFixed( dp );
  }
  
  //gotta wait for setTotal to complete, before using other setters based on total's value - reason being setters are asynchronous
  useEffect(() => {
    setTotalCalories(() => total.reduce((a, b) => a + (b.data.calories * (b.amount / 100)), 0))
    setTotalProtein(() => total.reduce((a, b) => a + (b.data.protein_g * (b.amount / 100)), 0))
    setTotalSugar(() => total.reduce((a, b) => a + (b.data.sugar_g * (b.amount / 100)), 0))
    setTotalCarbs(() => total.reduce((a, b) => a + (b.data.carbohydrates_total_g * (b.amount / 100)), 0))
    setTotalFat(() => total.reduce((a, b) => a + (b.data.fat_total_g * (b.amount / 100)), 0))
    setTotalSodium(() => total.reduce((a, b) => a + (b.data.sodium_mg * (b.amount / 100)), 0))
    setTotalFiber(() => total.reduce((a, b) => a + (b.data.fiber_g * (b.amount / 100)), 0))
    localStorage.setItem("total", JSON.stringify(total))
  }, [total])

  const clearTotal = () => {
    setTotal([])
  }
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com',
      'X-RapidAPI-Key': '1799b3d7f4msh313f04c80397e86p18c018jsncf818699acf9'
    }
  };
  async function fetchData () {
    setLoading(true)
    const response = await fetch(`https://calorieninjas.p.rapidapi.com/v1/nutrition?query=${searchTerm}`, options)
    const data = await response.json()
    setData(data.items[0])
    setLoading(false)
    if(data.items[0]) localStorage.setItem("data", JSON.stringify(data.items[0]))
    localStorage.setItem("amountForDisplay", amount)
  }

  return (
    <div className="App">
      <div className='search-and-result'>
        <SearchForm setSearchTerm={setSearchTerm}
                    setAmount={setAmount}
                    fetchData={fetchData}
                    setAmountForDisplay={setAmountForDisplay}
                    amount={amount}
        />
        <SearchResult loading={loading}
                      data={data}
                      amountForDisplay={amountForDisplay}
                      toFixedIfNecessary={toFixedIfNecessary}
                      setTotal={setTotal}
                      total={total}
        />
      </div>
      <hr />
      <br />
      <div className="total-and-items">
        <FoodItems  total={total}
                    toFixedIfNecessary={toFixedIfNecessary}
                    setTotal={setTotal}
        />
        <Total total={total} 
              setTotal={setTotal}
              toFixedIfNecessary={toFixedIfNecessary} 
              totalCalories={totalCalories} 
              totalProtein={totalProtein} 
              totalSugar={totalSugar}
              totalCarbs={totalCarbs}
              totalFat={totalFat}
              totalSodium={totalSodium}
              totalFiber={totalFiber}
              handleClear={clearTotal} />
      </div>
    </div>
  );
}

export default App;
