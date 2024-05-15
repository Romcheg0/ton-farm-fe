import React from "react"
import crossImage from "../../assets/icon/icons8-отмена-48 (1).png"

export default function InfoModal({ showModal, setShowModal }) {
  return (
    <div className={`modal modal_info ${showModal !== "info" && "hidden"}`}>
      <div className="modal__nail modal__nail_1"></div>
      <div className="modal__nail modal__nail_2"></div>
      <div className="modal__nail modal__nail_3"></div>
      <div className="modal__nail modal__nail_4"></div>
      <button
        className="cross"
        onClick={() => {
          setShowModal(false)
        }}
      >
        <img src={crossImage} alt="Close" />
      </button>
      <h1>INFO</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
        reprehenderit! Corrupti voluptate doloremque neque beatae? Dolor quos
        eius quae rerum voluptates doloribus, nisi ex aliquid est ea dolore
        harum perferendis nostrum error temporibus molestias fugit beatae
        asperiores cupiditate, quis ab. Praesentium voluptatibus molestiae
        temporibus reiciendis, vel repellendus quasi. Doloremque eius assumenda
        pariatur nulla quia, reprehenderit architecto odit eaque corrupti
        eligendi!
      </p>
    </div>
  )
}
