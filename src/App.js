import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Foods from './components/Foods';
import AddFood from "./components/AddFood";
// import About from "./components/About";


function App() {
  const [showAddFood , setShowAddFood] = useState(false)
  const [foods , setFoods] = useState([])

  useEffect(() => {
    const getFoods = async () => {
      const foodFromServer = await fetchFoods()
      setFoods(foodFromServer)
    }
    
    getFoods()


  }, [])

  // Fetch Foods
  const fetchFoods = async () => {
    const res = await fetch('http://localhost:5000/foods')
     const data = await res.json()
    
      return data 

  }

  // Fetch Food
  const fetchFood = async (id) => {
    const res = await fetch(`http://localhost:5000/foods/${id}`)
     const data = await res.json()
    
      return data 

  }


  // Add Task
  const addTask = async (food) => {
      const res = await fetch('http://localhost:5000/foods',{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(food),
      })

      const data = await res.json()

      setFoods([...foods, data])

    // const id = Math.floor(Math.random() * 10000) + 1

    // const newfood = { id, ...food }
    // setFoods([...foods, newfood])
  }

  // Delete Food
  const deleteFood = async (id) => {
      await fetch(`http://localhost:5000/foods/${id}`,
      {
        method: 'DELETE'
      })
   setFoods(foods.filter((food) => food.id !== id))
  }

  // Food Reminder
  const toggleReminder = async (id) => {
    const foodToToggle = await fetchFood(id)
    const updFood = {...foodToToggle, 
    reminder: !foodToToggle.reminder }

    const res = await fetch(`http://localhost:5000/foods/${id}`,{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updFood)
    })

    const data = await res.json()

    setFoods(foods.map((food) =>  
    food.id === id ? {...food, reminder:
    !data.reminder } : food )
    )
  }



// 
  return (
    
    <div className="container">

      <Header onAdd={() => 
      setShowAddFood(!showAddFood)}
      showAdd={showAddFood}  
      />
      {showAddFood &&  <AddFood  onAdd={addTask}/>}
      {foods.length > 0 ? (
      <Foods foods={foods} 
      onDelete={deleteFood} onToggle={toggleReminder} />
      ) : ('No Food to show')}
    
      <Footer />
    </div>

  );
}

export default App;
