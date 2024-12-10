import { useState } from 'react'
import { FoodItems } from './component/FoodItems'
import { ErrorMessage } from './component/ErrorMessage'
import Container from './component/container'
import styles from './App.module.css'



function App() {
  let foodItems=["eggs","rice","milk","water","fruits"]
// let foodMessage=foodItems.length ==0 ?<h3>No food</h3>:null
  return <Container> <h1 className={styles.heading}>Healthy food</h1>
  <ErrorMessage items ={foodItems}/>
   <FoodItems items={foodItems}/></Container>  
  
  
  

    
}

export default App
