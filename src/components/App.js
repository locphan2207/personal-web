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
  // const tlSvg = document.getElementById("top-left-bubble")
  // const s = Snap(tlSvg)
  const p1 = Snap.select("#top-left-svg")
  // const po1 = p1.node.getAttribute("d")
  const po2 =
    "M970.967 267.915C997.042 225.646 950.789 194.36 924.404 184C924.404 184 781 154 747 100C713 46.0001 652.009 -34 587 18C521.991 70 493 174 421 166C349 158 288.04 97.9998 252.999 83.4814C98.6787 43.9999 56.9998 84 30.9998 146C4.99984 208 64.1093 272 31.0001 364C2.54482 394.044 -14.5632 496.642 18.9999 518C85 560 32.4375 630 18.9999 716C8.99974 780 56.3582 806 98.6789 840C141 874 254.2 873.332 296.999 802C314.999 772 323 690 375 758C397.217 787.053 467 874 565 840C663 806 557.028 646 707 646C752.011 646 808.468 694.662 869 690C917.426 686.27 813 602 829 555.401C829 500 924.359 486 892.68 448C861.001 410 735.138 379.419 723.302 351.966C700.413 298.875 892.68 298 892.68 298C892.68 298 944.891 310.183 970.967 267.915Z"
  const t2 = "translate(-100 100)"
  p1.animate({ d: po2, transform: t2 }, 1000, window.mina.easeinout)
  // const el = document.getElementsByClassName("top-left-svg")[0]
  // el.setAttribute("class", "top-left-svg-2")
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
