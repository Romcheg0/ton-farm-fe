import React from "react"
import tonImage from "../../assets/ton.png"
import tokenImage from "../../assets/token.png"
export default function Header({ showModal, setShowModal }) {
  return (
    <header>
      <nav>
        <nav>
          <div className="nav__row nav__row_top">
            <div className="nav__board nav__ton">
              <img src={tonImage} alt="ton" />
              <div className="nav__board__inner nav__ton__board">0</div>
            </div>
            <div className="nav__board nav__token">
              <img src={tokenImage} alt="token" />
              <div className="nav__board__inner nav__token__board">0</div>
            </div>
            <div className="nav__stats__table">
              <div className="nav__stats__upper"></div>
              <div className="nav__board__stats">
                <h4>PHASE 1</h4>
                <h6>
                  PROFIT: <span className="ton__profit">0.00 TON</span>
                </h6>
                <h6>
                  FRENS: <span className="nav__frens">0</span>
                </h6>
                <div className="board__nail board__nail_1"></div>
                <div className="board__nail board__nail_2"></div>
                <div className="board__nail board__nail_3"></div>
                <div className="board__nail board__nail_4"></div>
              </div>
            </div>
          </div>
          <div className="nav__row nav__row_bottom">
            <div className="nav__col">
              <div className="board liquidity__board">
                <h6>
                  <span>$ERG</span> LIQUIDITY POOL
                </h6>
                <span>0.00$</span>
              </div>
            </div>
            <div className="nav__col">
              <button
                className="board topup__board"
                onClick={() => {
                  setShowModal("basic")
                }}
              >
                TOP UP
              </button>
              <button className="board withdraw__board">WITHDRAW</button>
            </div>
          </div>
        </nav>
      </nav>
    </header>
  )
}
