import React, { useEffect } from "react"

import "./PageOne.css"
import avatar from "assets/avatar.png"
import { ReactComponent as Triangle } from "assets/triangle.svg"
import { useOnCloseWatcher } from "helpers/animationHelpers"

export const PAGE_ONE_WHEEL_RANGE = [0, 5]

const inWheelRange = wheelTrack =>
  wheelTrack >= PAGE_ONE_WHEEL_RANGE[0] && wheelTrack <= PAGE_ONE_WHEEL_RANGE[1]

function PageOne({ isClosing, setClosingPage, explore, wheelTrack }) {
  const onClose = () => {}
  useOnCloseWatcher(isClosing, setClosingPage, onClose)

  return (
    <div className="page-one">
      <div className="intro-container">
        <div className="name-container">
          <h1>Tan Loc</h1>
          <h1 className="last-name">Phan</h1>
        </div>
        <div className="img">
          <img src={avatar} alt={"face"} />
          <div className="gradient" />
        </div>
        <p
          className="greeting"
          style={
            inWheelRange(wheelTrack)
              ? { transform: `translateY(${wheelTrack * -10}rem)` }
              : null
          }
        >
          Hi there,
          <br />
          I'm a <span>software engineer</span> who loves building functional,
          <br />
          beautiful and interactive websites.
        </p>
        <div className="explore-container" onClick={explore}>
          <p>EXPLORE ME</p>
          <Triangle className="triangle" />
        </div>
      </div>
    </div>
  )
}

export default PageOne
