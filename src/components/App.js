import React, { useState, useEffect, useRef } from "react"

import "./App.css"
import NavBar, { PAGE_NAMES } from "./NavBar"
import PageIndicator from "./PageIndicator"
import PageOne from "./PageOne"
import PageTwo from "./PageTwo"

// TODO:
// - CREATE A HELPER TO GENERATE KEYFRAMES BASED ON SPRING CONFIG
// - SWITCH TO NEW DESIGN

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
  useEffect(() => {}, [pageVisible])

  // Add random generated keyframes to bubbles
  useEffect(() => {}, [])

  // Act as a listener for when a page finishes its closing animation
  // Will change the page when it knows the animation finishes (when closingPage goes to null)
  useEffect(() => {
    if (!closingPage && nextPage.current) {
      setPageVisible(nextPage.current)
    }
  }, [closingPage])

  return (
    <div className="App">
      <div className="left-vertical-bar">
        <p>{"scroll"}</p>
      </div>
      <div className="right-vertical-bar" />
      <NavBar pageVisible={pageVisible} switchPage={switchPage} />
      <PageIndicator pageVisible={pageVisible} />
      {pageVisible === PAGE_NAMES.HOME_PAGE && (
        <PageOne
          isClosing={closingPage === PAGE_NAMES.HOME_PAGE}
          setClosingPage={setClosingPage}
          explore={() => switchPage(PAGE_NAMES.WORK_PAGE)}
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
