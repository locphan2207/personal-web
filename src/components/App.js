import React from "react"
import "./App.css"
import { ReactComponent as DownArrow } from "../assets/down-arrow.svg"

function App() {
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
        <DownArrow className="down-arrow" />
      </div>
      <div className="page"></div>
    </div>
  )
}

export default App
