import React, { useState } from "react"
import "./App.css"
import { ReactComponent as DownArrow } from "../assets/down-arrow.svg"

function App() {
  const [pageTwoVisible, setPageTwoVisible] = useState(false)

  const onArrowClick = () => {
    setPageTwoVisible(!pageTwoVisible)
  }

  return (
    <div className="App">
      <div className="page page-one">
        <div>
          <div className="avatar" />
          <div className="intro">
            <p>Hello,</p>
            <p>
              I'm <span>Tan Loc</span>,
            </p>
            <p>a software engineer.</p>
          </div>
        </div>
        <DownArrow className="down-arrow" onClick={onArrowClick} />
      </div>

      {pageTwoVisible && (
        <div className="page page-two">
          <div className="menu"></div>
        </div>
      )}
    </div>
  )
}

export default App
