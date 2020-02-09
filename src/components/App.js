import React, { useState, useEffect } from "react"

import "./App.css"
import NavBar, { PAGE_NAMES } from "./NavBar"
import PageOne from "./PageOne"
import PageTwo from "./PageTwo"
import { ReactComponent as TopLeftSVG } from "assets/top-left-svg.svg"
import { addKeyFramesForBubbles } from "helpers/cssHelpers"
import { animateToPage } from "helpers/svgHelpers"

// TODO:
// - CREATE A HELPER TO GENERATE KEYFRAMES BASED ON SPRING CONFIG

function App() {
  const [pageVisible, setPageVisible] = useState("HOME")

  useEffect(() => {
    addKeyFramesForBubbles()
  }, [])

  const switchPage = pageName => {
    setPageVisible(pageName)
    animateToPage(pageName)
  }
  console.log(PAGE_NAMES)
  return (
    <div className="App">
      <NavBar pageVisible={pageVisible} switchPage={switchPage} />
      <TopLeftSVG className={"top-left-svg"} />
      {pageVisible === PAGE_NAMES.HOME_PAGE && <PageOne />}
      {pageVisible === PAGE_NAMES.WORK_PAGE && <PageTwo />}
    </div>
  )
}

export default App
