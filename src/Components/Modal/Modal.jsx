import React, { useEffect } from "react"
import tonImage from "../../assets/ton.png"
import crossImage from "../../assets/icon/icons8-отмена-48 (1).png"

export default function Modal({ showModal, setShowModal }) {
  useEffect(() => {
    console.log(showModal)
  }, [showModal])
  return (
    <div className={`modal ${showModal !== "basic" && "hidden"}`}>
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
      <h1>TOP UP</h1>
      <h2>BALANCE</h2>
      <div className="modal__balance">
        <div className="balance__row">
          <img src={tonImage} alt="ton" />
          <h5>
            <span className="ton__amount">0.1</span>TON
          </h5>
          <button className="balance__buy">BUY</button>
        </div>
        <div className="balance__row">
          <img src={tonImage} alt="ton" />
          <h5>
            <span className="ton__amount">0.5</span>TON
          </h5>
          <button className="balance__buy">BUY</button>
        </div>
      </div>
      <h6>YOUR WALLET</h6>
      <div className="wallet__number">23457328573295789</div>
    </div>
  )
}
