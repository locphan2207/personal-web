import React, { useEffect } from "react"

import "./PageOne.css"
import avatar from "assets/avatar.png"
import { ReactComponent as Triangle } from "assets/triangle.svg"
import { useOnCloseWatcher } from "helpers/animationHelpers"

export const PAGE_ONE_WHEEL_RANGE = [0, 5]

function PageOne({ isClosing, setClosingPage, explore, wheelTrack }) {
  const onClose = () => {}
  useOnCloseWatcher(isClosing, setClosingPage, onClose)

  const highlight1Styles =
    wheelTrack >= 1 ? { color: "#eeb669", fontSize: "22rem" } : null

  const highlight2Styles =
    wheelTrack >= 2 ? { backgroundSize: "100% 2rem" } : null

  const exploreTextStyles =
    wheelTrack === 3
      ? { transform: "translateY(200%)" }
      : wheelTrack >= 4
      ? { transform: "translateY(400%)" }
      : null

  console.log(wheelTrack)
  return (
    <div className="page-one">
      <div className="intro-container">
        <div className="name-container">
          <h1>Tan Loc</h1>
          <h1 className="last-name">Phan</h1>
        </div>
        <div className="img">
          <div className="gradient" />
          <img src={avatar} alt={"face"} />
        </div>
        <p className="greeting">
          Hi there,
          <br />
          I'm a{" "}
          <span className="color-switch" style={highlight1Styles}>
            software engineer
          </span>{" "}
          who loves building{" "}
          <span className="underline" style={highlight2Styles}>
            functional
          </span>
          ,
          <br />
          <span className="underline" style={highlight2Styles}>
            beautiful
          </span>{" "}
          and{" "}
          <span className="underline" style={highlight2Styles}>
            interactive
          </span>{" "}
          websites.
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
