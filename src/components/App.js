import React, { useState, useEffect, useRef } from "react"

import "./App.css"
import NavBar, { PAGE_NAMES } from "./NavBar"
import PageOne from "./PageOne"
import PageTwo from "./PageTwo"
import { ReactComponent as TopLeftSVG } from "assets/top-left-svg.svg"
import { addKeyFramesForBubbles } from "helpers/animationHelpers"
import { animateToPage } from "helpers/svgHelpers"

// TODO:
// - CREATE A HELPER TO GENERATE KEYFRAMES BASED ON SPRING CONFIG

function App() {
  const [pageVisible, setPageVisible] = useState(PAGE_NAMES.HOME_PAGE)
  const [closingPage, setClosingPage] = useState(null)
  const nextPage = useRef(null)

  // Trigger the closing animation and store the next page to ref
  // So it can set the new page after closing animation finishes
  const switchPage = pageName => {
    setClosingPage(pageVisible)
    nextPage.current = pageName
  }

  // Animate top left svg when page has changed
  useEffect(() => {
    animateToPage(nextPage.current)
  }, [pageVisible])

  // Add random generated keyframes to bubbles
  useEffect(() => {
    addKeyFramesForBubbles()
  }, [])

  // Act as a listener for when a page finishes its closing animation
  // Will change the page when it knows the animation finishes (when closingPage goes to null)
  useEffect(() => {
    if (!closingPage && nextPage.current) {
      setPageVisible(nextPage.current)
    }
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
