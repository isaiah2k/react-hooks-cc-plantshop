import React, { useState } from "react"

function PlantCard({ plant, onDeletePlant, onUpdatePlant }) {
  const [price, setPrice] = useState(plant.price)
  const [inStock, setInStock] = useState(
    plant.hasOwnProperty("inStock") ? plant.inStock : true
  )
  
  function handlePriceChange(e) {
    setPrice(e.target.value)
  }

  function handlePriceUpdate() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price })
    })
      .then((r) => r.json())
      .then(onUpdatePlant)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE"
    }).then(() => onDeletePlant(plant.id))
  }

  function handleToggleStock() {
    const updatedInStock = !inStock
    setInStock(updatedInStock)
  
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inStock: updatedInStock })
    })
      .then((r) => r.json())
      .then(onUpdatePlant)
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {price}</p>
      <input
        type="number"
        step="0.01"
        value={price}
        onChange={handlePriceChange}
      />
      <button onClick={handlePriceUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleToggleStock}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  )
}

export default PlantCard
