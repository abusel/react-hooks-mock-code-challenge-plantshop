import React, {useState} from "react";

function PlantCard({plant, setPlants, plants}) {
  const [clicked, setClicked] = useState(true)
  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      {clicked ? (
        <button className="primary" onClick={()=>{
          setClicked(false)
        }
        }>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      <button onClick={()=>{
        fetch(`http://localhost:6001/plants/${plant.id}`,{
          method: 'Delete'
        }).then(res=> {
          setPlants(plants => plants.filter(selected => {
            return selected.id !== plant.id
          }))
        })
      }}>Delete</button>
    </li>
  );
}

export default PlantCard;
