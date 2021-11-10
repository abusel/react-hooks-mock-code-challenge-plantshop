import React, {useState} from "react";

function PlantCard({plant, setPlants, plants}) {
  const [clicked, setClicked] = useState(true)
  const [newPrice, setNewPrice] = useState('')
  const [displayPrice, setDisplayPrice] = useState(plant.price)
  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: ${displayPrice}</p>
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
          method: 'DELETE'
        }).then(res=> {
          setPlants(plants => plants.filter(selected => {
            return selected.id !== plant.id
          }))
        })
      }}>Delete</button>
      <form onSubmit={e =>{
        e.preventDefault()
        fetch(`http://localhost:6001/plants/${plant.id}`,{
          method: 'PATCH',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({price: newPrice})

        })
        setDisplayPrice(newPrice)
      }}>
        <input type='text' placeholder= 'new price' value={newPrice} onChange={e => setNewPrice(e.target.value)}></input>
      </form>
    </li>
  );
}

export default PlantCard;
