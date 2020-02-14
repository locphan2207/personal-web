import React, { useState, useEffect, useRef } from "react"

import "./App.css"
import NavBar, { PAGE_NAMES, NAV_NAMES_ORDER } from "./NavBar"
import PageIndicator from "./PageIndicator"
import PageOne, { PAGE_ONE_WHEEL_RANGE } from "./PageOne"
import PageTwo, { PAGE_TWO_WHEEL_RANGE } from "./PageTwo"
import PageThree, { PAGE_THREE_WHEEL_RANGE } from "./PageThree"
import PageFour, { PAGE_FOUR_WHEEL_RANGE } from "./PageFour"

// TODO:
// - CREATE A HELPER TO GENERATE KEYFRAMES BASED ON SPRING CONFIG
// - SWITCH TO NEW DESIGN

const PAGE_WHEEL_RANGES = {
  [PAGE_NAMES.HOME_PAGE]: PAGE_ONE_WHEEL_RANGE,
  [PAGE_NAMES.WORK_PAGE]: PAGE_TWO_WHEEL_RANGE,
  [PAGE_NAMES.SKILLS_PAGE]: PAGE_THREE_WHEEL_RANGE,
  [PAGE_NAMES.ABOUT_PAGE]: PAGE_FOUR_WHEEL_RANGE,
}
console.log(window.navigator)

const THROTTLE_TIME = window.navigator.platform === "MacIntel" ? 1300 : 500

function App() {
  const [pageVisible, setPageVisible] = useState(PAGE_NAMES.HOME_PAGE)
  const [closingPage, setClosingPage] = useState(null)
  const [wheelTrack, setWheelTrack] = useState(0)
  const [scrollTextRotateDeg, setScrollTextRotateDeg] = useState(0)
  const nextPage = useRef(null)
  const isInThrottle = useRef(false)

  // Trigger the closing animation and store the next page to ref
  // So it can set the new page after closing animation finishes
  const switchPage = pageName => {
    setClosingPage(pageVisible)
    nextPage.current = pageName
  }

  const handleOnWheel = e => {
    if (closingPage || isInThrottle.current) {
      console.log("in throt")
      return
    }

    console.log(wheelTrack)
    setScrollTextRotateDeg(
      e.deltaY > 0 ? scrollTextRotateDeg + 100 : scrollTextRotateDeg - 100
    )

    const nextWheelTrack = e.deltaY > 0 ? wheelTrack + 1 : wheelTrack - 1
    const currPageIdx = NAV_NAMES_ORDER.findIndex(item => item === pageVisible)
    const nextPage = NAV_NAMES_ORDER[currPageIdx + 1]
    const prevPage = NAV_NAMES_ORDER[currPageIdx - 1]
    if (nextWheelTrack > PAGE_WHEEL_RANGES[pageVisible][1]) {
      if (nextPage) switchPage(nextPage)
    } else if (nextWheelTrack < PAGE_WHEEL_RANGES[pageVisible][0]) {
      if (prevPage) switchPage(prevPage)
    } else {
      setWheelTrack(nextWheelTrack)
    }

    isInThrottle.current = true
    setTimeout(() => (isInThrottle.current = false), THROTTLE_TIME)
  }

  // Act as a listener for when a page finishes its closing animation
  // when it knows the animation finishes (when closingPage goes to null)
  useEffect(() => {
    if (!closingPage && nextPage.current) {
      setPageVisible(nextPage.current)
      setWheelTrack(PAGE_WHEEL_RANGES[nextPage.current][0])
    }
  }, [closingPage])

  const scrollPercent = (wheelTrack / PAGE_WHEEL_RANGES[pageVisible][1]) * 100

  return (
    <div
      className="scroll-catch"
      // Event listeners should be inline instead of using window.addEventListeners
      // In-line will send the correct function handler with correct state and props of the component
      // Otherwise, window.addEventListeners will only send in 1 version of the handler with only init state values
      onWheel={handleOnWheel}
    >
      <div className="App">
        <div className="left-vertical-bar">
          <p style={{ transform: `rotateZ(${scrollTextRotateDeg}deg)` }}>
            {"scroll"}
          </p>
        </div>
        <div className="right-vertical-bar">
          <div
            className="scroll-indicator"
            style={{
              height: `${scrollPercent}%`,
            }}
          />
        </div>
        <NavBar pageVisible={pageVisible} switchPage={switchPage} />
        <PageIndicator pageVisible={pageVisible} />
        {pageVisible === PAGE_NAMES.HOME_PAGE && (
          <PageOne
            isClosing={closingPage === PAGE_NAMES.HOME_PAGE}
            setClosingPage={setClosingPage}
            explore={() => switchPage(PAGE_NAMES.WORK_PAGE)}
            wheelTrack={wheelTrack}
            switchPage={switchPage}
          />
        )}
        {pageVisible === PAGE_NAMES.WORK_PAGE && (
          <PageTwo
            isClosing={closingPage === PAGE_NAMES.WORK_PAGE}
            setClosingPage={setClosingPage}
            wheelTrack={wheelTrack}
            setWheelTrack={setWheelTrack}
          />
        )}
        {pageVisible === PAGE_NAMES.SKILLS_PAGE && (
          <PageThree
            isClosing={closingPage === PAGE_NAMES.SKILLS_PAGE}
            setClosingPage={setClosingPage}
            wheelTrack={wheelTrack}
            setWheelTrack={setWheelTrack}
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
    </div>
  )
}

export default App
