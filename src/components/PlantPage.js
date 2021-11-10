import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')
  useEffect(()=>{
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(data => setPlants(data))
  },[])
  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants}/>
      <Search setSearch={setSearch} search={search}/>
      <PlantList plants={plants} search={search} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
