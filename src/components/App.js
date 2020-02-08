import React, { useState, useEffect } from "react"

import "./App.css"
import NavBar, { PAGE_NAMES } from "./NavBar"
import PageOne from "./PageOne"
import PageTwo from "./PageTwo"
import { ReactComponent as TopLeftSVG } from "assets/top-left-svg.svg"
import { ReactComponent as BubbleRight } from "assets/bubble-right.svg"
import { ReactComponent as BubbleLeft } from "assets/bubble-left.svg"
import { ReactComponent as CornerLeaves } from "assets/corner-leaves.svg"
import { addKeyFramesForBubbles } from "helpers/cssHelpers"

const Snap = window.Snap

// TODO:
// - CREATE A HELPER TO GENERATE KEYFRAMES BASED ON SPRING CONFIG

const animateToPage = pageName => {
  const p1 = Snap.select("#top-left-svg")
  const svg1 = Snap.select("#top-left-bubble")
  const po1 =
    "M94.0006 497.5C105.304 561.283 237.68 430 280.001 464C322.321 498 344.001 610.5 397.001 579C433.413 557.358 473 376.5 525 444.5C577 512.5 670.303 444.5 670.303 389.965C670.303 335.431 568.064 295.911 553.5 229.5C541 172.5 604.5 153 596 111.5C584.091 53.3522 508 49.5 452 59.5C367.125 74.6564 244.173 182.171 225.5 98C221.398 79.5091 229.745 67.9587 225.5 49.5C207.384 -29.2859 25.4997 -3.50007 1.99988 66.5C-17.2071 123.713 160.145 149 144 187.5C127.855 226 76.6091 180 43.4999 272C31.0839 306.5 146.937 308.642 180.5 330C246.5 372 87.0006 458 94.0006 497.5Z"
  const t1 = "translate(0 0)"
  const po2 =
    "M970.967 267.915C997.042 225.646 950.789 194.36 924.404 184C924.404 184 781 154 747 100C713 46.0001 652.009 -34 587 18C521.991 70 493 174 421 166C349 158 288.04 97.9998 252.999 83.4814C98.6787 43.9999 56.9998 84 30.9998 146C4.99984 208 64.1093 272 31.0001 364C2.54482 394.044 -14.5632 496.642 18.9999 518C85 560 32.4375 630 18.9999 716C8.99974 780 56.3582 806 98.6789 840C141 874 254.2 873.332 296.999 802C314.999 772 323 690 375 758C397.217 787.053 467 874 565 840C663 806 557.028 646 707 646C752.011 646 808.468 694.662 869 690C917.426 686.27 813 602 829 555.401C829 500 924.359 486 892.68 448C861.001 410 735.138 379.419 723.302 351.966C700.413 298.875 892.68 298 892.68 298C892.68 298 944.891 310.183 970.967 267.915Z"
  const t2 = "translate(-100 200)"

  switch (pageName) {
    case PAGE_NAMES.HOME_PAGE:
      p1.animate({ d: po1, transform: t1 }, 1500, window.mina.backin)
      svg1.animate({ width: 700 }, 1500, window.mina.backin)
      break
    case PAGE_NAMES.WORK_PAGE:
      p1.animate({ d: po2, transform: t2 }, 1500, window.mina.backin)
      svg1.animate({ width: 900 }, 1500, window.mina.backin)
      break
    default:
  }
}

function App() {
  const [pageVisible, setPageVisible] = useState("HOME")
  const [hoverProjectIdx, setHoverProjectIdx] = useState(0)

  useEffect(() => {
    addKeyFramesForBubbles()
  }, [])

  const switchPage = pageName => {
    setPageVisible(pageName)
    animateToPage(pageName)
  }

  return (
    <div className="App">
      <NavBar pageVisible={pageVisible} switchPage={switchPage} />
      <TopLeftSVG className={"top-left-svg"} />
      {pageVisible === "HOME" && <PageOne />}
      {pageVisible === "WORK" && (
        <PageTwo
          hoverProjectIdx={hoverProjectIdx}
          setHoverProjectIdx={setHoverProjectIdx}
        />
      )}
    </div>
  )
}

export default App
