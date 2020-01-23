import React, { useState } from "react"
import "./App.css"
import PageTwo from "./PageTwo"
import { ReactComponent as DownArrow } from "../assets/down-arrow.svg"

// TODO:
// - CREATE A HELPER TO GENERATE KEYFRAMES BASED ON SPRING CONFIG

function App() {
  const [pageTwoVisible, setPageTwoVisible] = useState(false)
  const [hoverProjectIdx, setHoverProjectIdx] = useState(0)

  const onOpen = () => {
    setPageTwoVisible(true)
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
        <DownArrow className="down-arrow" onClick={onOpen} />
      </div>

      {pageTwoVisible && (
        <PageTwo
          setPageTwoVisible={setPageTwoVisible}
          hoverProjectIdx={hoverProjectIdx}
          setHoverProjectIdx={setHoverProjectIdx}
        />
      )}
    </div>
  )
}

export default App
