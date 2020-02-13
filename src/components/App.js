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

const SCROLL_COUNT_TO_PAGE = 5

function App() {
  const [pageVisible, setPageVisible] = useState(PAGE_NAMES.HOME_PAGE)
  const [closingPage, setClosingPage] = useState(null)
  const [wheelTrack, setWheelTrack] = useState(0)
  const nextPage = useRef(null)

  // Trigger the closing animation and store the next page to ref
  // So it can set the new page after closing animation finishes
  const switchPage = pageName => {
    setClosingPage(pageVisible)
    nextPage.current = pageName
  }

  const addWheelTracking = () => {
    window.addEventListener(
      "wheel",
      throttle(e => {
        setWheelTrack(e.deltaY > 0 ? wheelTrack + 1 : wheelTrack - 1)
        console.log(wheelTrack, e)
      }, 100)
    )
  }

  useEffect(() => {
    addWheelTracking()
  }, [])

  // Act as a listener for when a page finishes its closing animation
  // Will change the page when it knows the animation finishes (when closingPage goes to null)
  useEffect(() => {
    if (!closingPage && nextPage.current) {
      setPageVisible(nextPage.current)
      setWheelTrack(0)
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
          wheelTrack={wheelTrack}
        />
      )}
      {pageVisible === PAGE_NAMES.WORK_PAGE && (
        <PageTwo
          isClosing={closingPage === PAGE_NAMES.WORK_PAGE}
          setClosingPage={setClosingPage}
          wheelTrack={wheelTrack}
        />
      )}
      {pageVisible === PAGE_NAMES.SKILLS_PAGE && (
        <PageThree
          isClosing={closingPage === PAGE_NAMES.SKILLS_PAGE}
          setClosingPage={setClosingPage}
          wheelTrack={wheelTrack}
        />
      )}
      {pageVisible === PAGE_NAMES.ABOUT_PAGE && (
        <PageFour
          isClosing={closingPage === PAGE_NAMES.ABOUT_PAGE}
          setClosingPage={setClosingPage}
          wheelTrack={wheelTrack}
        />
      )}
    </div>
  )
}

export default App
