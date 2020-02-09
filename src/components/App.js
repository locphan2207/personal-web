import React, { useState, useEffect, useRef } from "react"

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
  const [pageVisible, setPageVisible] = useState(PAGE_NAMES.HOME_PAGE)
  const [closingPage, setClosingPage] = useState(null)
  const previousClosingPage = useRef(null)
  const nextPage = useRef(null)

  const switchPage = pageName => {
    animateToPage(pageName)
    setClosingPage(pageVisible)
    nextPage.current = pageName
  }

  useEffect(() => {
    addKeyFramesForBubbles()
  }, [])

  useEffect(() => {
    if (!closingPage) {
      if (previousClosingPage.current) setPageVisible(nextPage.current)
    } else previousClosingPage.current = closingPage
  }, [closingPage])

  return (
    <div className="App">
      <NavBar pageVisible={pageVisible} switchPage={switchPage} />
      <TopLeftSVG className={"top-left-svg"} />
      {pageVisible === PAGE_NAMES.HOME_PAGE && (
        <PageOne
          isClosing={closingPage === PAGE_NAMES.HOME_PAGE}
          setClosingPage={setClosingPage}
        />
      )}
      {pageVisible === PAGE_NAMES.WORK_PAGE && (
        <PageTwo
          isClosing={closingPage === PAGE_NAMES.WORK_PAGE}
          setClosingPage={setClosingPage}
        />
      )}
    </div>
  )
}

export default App
