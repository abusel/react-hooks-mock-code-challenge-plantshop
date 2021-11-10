import React from "react";
import PlantCard from "./PlantCard";
import Search from "./Search";

function PlantList({plants, search, setPlants}) {
  return (
    <ul className="cards">{
      plants.filter(plant=> plant.name.toLowerCase().includes(search.toLowerCase())).map((plant)=>{
        return <PlantCard plant={plant} key={plant.id} plants={plants} setPlants={setPlants}/>
      })
    }</ul>
  );
}

export default PlantList;
