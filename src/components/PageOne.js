import React, { useEffect } from "react"

import "./PageOne.css"
import avatar from "assets/avatar.png"
import { ReactComponent as Triangle } from "assets/triangle.svg"
import { useOnCloseWatcher } from "helpers/animationHelpers"

export const PAGE_ONE_WHEEL_RANGE = [0, 3]

function PageOne({ isClosing, setClosingPage, explore, wheelTrack }) {
  const onClose = () => {}
  useOnCloseWatcher(isClosing, setClosingPage, onClose)

  const exploreTextStyles =
    wheelTrack === 2
      ? { transform: "translateY(200%)" }
      : wheelTrack >= 3
      ? { transform: "translateY(400%)" }
      : null

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
        <p className="greeting">
          Hi there,
          <br />
          I'm a <span>software engineer</span> who loves building functional,
          <br />
          beautiful and interactive websites.
        </p>
        <div className="explore-container" onClick={explore}>
          <div className="explore-text">
            <p style={exploreTextStyles}>SCROLL</p>
            <p style={exploreTextStyles}>EXPLORE</p>
            <p style={exploreTextStyles}>CONNECT</p>
          </div>
          <Triangle className="triangle" />
        </div>
      </div>
    </div>
  )
}

export default PageOne
