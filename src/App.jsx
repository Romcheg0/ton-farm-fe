import { Outlet } from "react-router"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import cloudsImage from "./assets/clouds.png"
import "./App.css"
import { useState } from "react"
import Modal from "./Components/Modal/Modal"
import InfoModal from "./Components/InfoModal/InfoModal"
export default function App() {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="App">
      <img src={cloudsImage} alt="background" className="clouds" />
      <Header showModal={showModal} setShowModal={setShowModal} />
      <main>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <InfoModal showModal={showModal} setShowModal={setShowModal} />
        <Outlet showModal={showModal} setShowModal={setShowModal} />
      </main>
      <Footer showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}

