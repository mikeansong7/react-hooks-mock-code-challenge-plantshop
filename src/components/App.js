
import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";



function App() {

  const[plants, setPlants]= useState([])
  
 
useEffect (
  () => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(newPlants => {
      setPlants(newPlants)
    })
  }, []
)
function addPlant(plantObj){
  fetch("http://localhost:6001/plants",{
    method: "POST",
    headers: {
       "Content-Type": "application/json"    
    },
    body: JSON.stringify(plantObj)
  })
      .then(response => response.json())
       .then(newPlant => {
      setPlants([...plants, newPlant])

}
)}

  return (
    <div className="app">
      <Header />
      <PlantPage addPlant={addPlant} plants={plants}/>
    </div>
  );
}

export default App;
