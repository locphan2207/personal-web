import React, { useState } from "react"
import "./App.css"
import NavBar from "./NavBar"
import PageOne from "./PageOne"
import PageTwo from "./PageTwo"
import { ReactComponent as TopLeftSVG } from "../assets/top-left-svg.svg"

// TODO:
// - CREATE A HELPER TO GENERATE KEYFRAMES BASED ON SPRING CONFIG

function App() {
  const [pageVisible, setPageVisible] = useState("HOME")
  const [hoverProjectIdx, setHoverProjectIdx] = useState(0)

  const onWorkOpen = () => {
    setPageVisible("WORK")
  }
  //https://css-tricks.com/svg-shape-morphing-works/
  return (
    <div className="App">
      <NavBar onWorkOpen={onWorkOpen} />
      <TopLeftSVG className={"top-left-svg"} />
      {pageVisible === "HOME" && <PageOne />}

      {pageVisible === "WORK" && (
        <PageTwo
          setPageVisible={setPageVisible}
          hoverProjectIdx={hoverProjectIdx}
          setHoverProjectIdx={setHoverProjectIdx}
        />
      )}
    </div>
  )
}

export default App
