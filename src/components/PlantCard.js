import React, { useState } from "react"

function PlantCard({ plant, onDeletePlant, onUpdatePlant }) {
  const [price, setPrice] = useState(plant.price)

  function handlePriceChange(e) {
    setPrice(e.target.value)
  }

  function handlePriceUpdate() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: price }),
    })
      .then((r) => r.json())
      .then(onUpdatePlant)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    }).then(() => onDeletePlant(plant.id))
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>
        Price: $
        <input
          type="number"
          step="0.01"
          value={price}
          onChange={handlePriceChange}
        />
        <button onClick={handlePriceUpdate}>Update</button>
      </p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default PlantCard
