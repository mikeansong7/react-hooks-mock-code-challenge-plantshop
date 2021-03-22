import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, addPlant}) {
const[search, setSearch]= useState("")

const filteredPlants= plants.filter(plant => {
  return  plant.name.includes(search)
})



  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
