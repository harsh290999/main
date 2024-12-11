import { useState } from 'react'
import { FoodItems } from './component/FoodItems'
import { ErrorMessage } from './component/ErrorMessage'
import Container from './component/container'
import styles from './App.module.css'
import FoodInput from './component/FoodInput'



function App() {
  let foodItems=["eggs","rice","milk","water","fruits"]
  let[textToShow,setTesToShow]=useState("Initial text")
  console.log(`value of text to show: ${textToShow}`)
  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTesToShow(event.target.value)
  };
// let foodMessage=foodItems.length ==0 ?<h3>No food</h3>:null
  return <Container> <h1 className={styles.heading}>Healthy food</h1>
  <FoodInput handleOnChange={handleOnChange} />
  <p>{textToShow}</p>
  <ErrorMessage items ={foodItems}/>
   <FoodItems items={foodItems}/></Container>  
  
  
  

    
}

export default App
