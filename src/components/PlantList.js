import React, { useEffect, useState } from "react"
import PlantCard from "./PlantCard"

function PlantList() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then(setPlants)
  }, [])

  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard key={plant.id} {...plant} />
      ))}
    </ul>
  )
}

export default PlantList