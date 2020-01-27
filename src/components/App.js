import React, { useState } from "react"
import "./App.css"
import PageTwo from "./PageTwo"
import { ReactComponent as DownArrow } from "../assets/down-arrow.svg"
import { ReactComponent as HumanSvg } from "../assets/human.svg"

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
        {/* <div className="avatar" /> */}
        <HumanSvg className={"human-svg"} />
        <div className="intro">
          <p>
            Hello, I'm <span>Tan Loc</span>.
          </p>
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
