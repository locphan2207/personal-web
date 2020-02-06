import React, { useState, useEffect } from "react"

import "./App.css"
import NavBar from "./NavBar"
import PageOne from "./PageOne"
import PageTwo from "./PageTwo"
import { ReactComponent as TopLeftSVG } from "../assets/top-left-svg.svg"

const Snap = window.Snap

// TODO:
// - CREATE A HELPER TO GENERATE KEYFRAMES BASED ON SPRING CONFIG

const animateToPage2 = () => {
  const tlSvg = document.getElementById("top-left-bubble")
  const s = Snap(tlSvg)
  const p1 = Snap.select("#top-left-svg")
  const p2 = Snap.select("#top-left-svg-2")
  const po1 = p1.node.getAttribute("d")
  const po2 = p2.node.getAttribute("d")
  const t2 = p2.node.getAttribute("transform")
  const o2 = p2.node.getAttribute("opacity")
  p1.animate(
    { d: po2, transform: t2, opacity: o2 },
    5000,
    window.mina.easeinout
  )
}

function App() {
  const [pageVisible, setPageVisible] = useState("HOME")
  const [hoverProjectIdx, setHoverProjectIdx] = useState(0)

  const onWorkOpen = () => {
    setPageVisible("WORK")
    animateToPage2()
  }

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
