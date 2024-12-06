import { useState } from 'react'


function App() {
  let foodItems=["eggs","rice","milk","water","fruits"]
 
  return <> <h1>Healthy food</h1>
  <ul className="list-group">
    {foodItems.map((item)=><li key={item} className="list-group-item">{item}</li>)}
    
  
  
  
</ul></>

    
}

export default App
