import React, { useState, useEffect, useRef } from "react"

import "./App.css"
import NavBar, { PAGE_NAMES, NAV_NAMES_ORDER } from "./NavBar"
import PageIndicator from "./PageIndicator"
import PageOne from "./PageOne"
import PageTwo from "./PageTwo"
import PageThree from "./PageThree"
import PageFour from "./PageFour"
import { throttle } from "helpers/animationHelpers"

// TODO:
// - CREATE A HELPER TO GENERATE KEYFRAMES BASED ON SPRING CONFIG
// - SWITCH TO NEW DESIGN

const SCROLL_COUNT_TO_PAGE = 100

let WHEEL_TRACK = 0

function App() {
  const [pageVisible, setPageVisible] = useState(PAGE_NAMES.HOME_PAGE)
  const [closingPage, setClosingPage] = useState(null)
  const [isScrollingToPage, setIsScrollingToPage] = useState(0)
  const nextPage = useRef(null)

  // Trigger the closing animation and store the next page to ref
  // So it can set the new page after closing animation finishes
  const switchPage = pageName => {
    setClosingPage(pageVisible)
    nextPage.current = pageName
  }

  useEffect(() => {
    const currIdx = NAV_NAMES_ORDER.findIndex(item => pageVisible === item)
    const prevPage = NAV_NAMES_ORDER[currIdx - 1]
    const nextPage = NAV_NAMES_ORDER[currIdx + 1]
    if (isScrollingToPage === 1) {
      switchPage(nextPage)
    } else if (isScrollingToPage === -1) {
      switchPage(prevPage)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrollingToPage])

  useEffect(() => {
    window.addEventListener(
      "wheel",
      throttle(e => {
        WHEEL_TRACK = e.deltaY > 0 ? WHEEL_TRACK + 1 : WHEEL_TRACK - 1
        console.log(WHEEL_TRACK, e)
        if (WHEEL_TRACK > SCROLL_COUNT_TO_PAGE) {
          setIsScrollingToPage(1)
          WHEEL_TRACK = 0
        } else if (WHEEL_TRACK <= -SCROLL_COUNT_TO_PAGE) {
          setIsScrollingToPage(-1)
          WHEEL_TRACK = 0
        }
      }, 300)
    )
  }, [])

  // Act as a listener for when a page finishes its closing animation
  // Will change the page when it knows the animation finishes (when closingPage goes to null)
  useEffect(() => {
    if (!closingPage && nextPage.current) {
      setPageVisible(nextPage.current)
      setIsScrollingToPage(0)
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
      {pageVisible === PAGE_NAMES.SKILLS_PAGE && (
        <PageThree
          isClosing={closingPage === PAGE_NAMES.SKILLS_PAGE}
          setClosingPage={setClosingPage}
        />
      )}
      {pageVisible === PAGE_NAMES.ABOUT_PAGE && (
        <PageFour
          isClosing={closingPage === PAGE_NAMES.ABOUT_PAGE}
          setClosingPage={setClosingPage}
        />
      )}
    </div>
  )
}

export default App
