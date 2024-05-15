import React from "react"
import infoImage from "../../assets/icon/icons8-информация-100 1.png"
import shopImage from "../../assets/icon/icons8-торговый-центр-64 1.png"
import frenImage from "../../assets/icon/icons8-внешний-друг-электронный-интерфейс-анггара-глиф-анггара-путра-32 1.png"
import walletImage from "../../assets/icon/icons8-бумажник-100 1.png"
export default function Footer({ showModal, setShowModal }) {
  return (
    <footer>
      <a
        href=""
        onClick={(e) => {
          e.preventDefault()
          setShowModal("info")
        }}
        className="footer__link info"
      >
        <div className="footer__img__wrapper">
          <img src={infoImage} alt="info" />
        </div>
        <h6 className="footer__link__text">INFO</h6>
      </a>
      <a
        href=""
        onClick={(e) => {
          e.preventDefault()
        }}
        className="footer__link shop"
      >
        <div className="footer__img__wrapper">
          <img src={shopImage} alt="shop" />
        </div>
        <h6 className="footer__link__text">SHOP</h6>
      </a>
      <a
        href=""
        onClick={(e) => {
          e.preventDefault()
        }}
        className="footer__link frens"
      >
        <div className="footer__img__wrapper">
          <img src={frenImage} alt="frens" />
        </div>
        <h6 className="footer__link__text">FRENS</h6>
      </a>
      <a
        href=""
        onClick={(e) => {
          e.preventDefault()
        }}
        className="footer__link wallet"
      >
        <div className="footer__img__wrapper">
          <img src={walletImage} alt="wallet" />
        </div>
        <h6 className="footer__link__text">WALLET</h6>
      </a>
    </footer>
  )
}
