import { useEffect, useState } from "react"
import Card from "../UI/Card"
import MealItems from "./MealItems/MealItem"

let LOADED_MEALS = []

let AvailableMeal = () => {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()

  let fetchMeals = async () => {
    
    setIsLoading(true)
    let response = await fetch('https://react-http-fad6d-default-rtdb.firebaseio.com/meals.json')

    if(!response.ok){
      throw new error("Failed to load")
    }

    let data = await response.json()
    
    for (let key in data) {
      LOADED_MEALS.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price
      }) 
    }

    setMeals(LOADED_MEALS)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchMeals()
    .catch((error) => {
      setIsLoading(false)
      setError(error.message)
    })
  }, [])

  if(isLoading){
    return (
      <>
        <p className="fs-5 text-center mt-3 text-white">Loading....</p>
      </>
    )
  }

  if(error){
    return (
      <>
        <p className="fs-5 text-center mt-3 text-danger">{error}</p>
      </>
    )
  }

  let mealList = meals.map((meal) => {
    return <MealItems id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price}></MealItems>;
  })


  return (
    <>
      <Card>
        {mealList}
      </Card>
    </>
  )
}

export default AvailableMeal;