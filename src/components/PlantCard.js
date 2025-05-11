// src/components/PlantCard.js
import React, { useState } from "react"

function PlantCard({ plant }) {
  const { name, image, price } = plant
  const [inStock, setInStock] = useState(true)

  function handleToggleStock() {
    setInStock((prev) => !prev)
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button className={inStock ? "primary" : ""} onClick={handleToggleStock}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  )
}

export default PlantCard