import React from "react"
import flowerImage from "../../assets/flower.png"
import personImage from "../../assets/person.png"
import houseImage from "../../assets/house.png"
export default function Home() {
  return (
    <>
      <div className="main__row">
        <img src={personImage} alt="person" className="person" />
        <img src={houseImage} alt="house" className="house" />
      </div>
      <div className="flowers">
        <img src={flowerImage} alt="flower" className="flower flower_1" />
        <img src={flowerImage} alt="flower" className="flower flower_2" />
        <img src={flowerImage} alt="flower" className="flower flower_3" />
        <img src={flowerImage} alt="flower" className="flower flower_4" />
      </div>
    </>
  )
}
