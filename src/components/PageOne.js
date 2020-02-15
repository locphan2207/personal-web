import React, { useEffect } from "react"

import "./PageOne.css"
import avatar from "assets/avatar.png"
import { ReactComponent as Triangle } from "assets/triangle.svg"
import { useOnCloseWatcher } from "helpers/animationHelpers"
import Clickable from "./Clickable"
import { PAGE_NAMES } from "./NavBar"

export const PAGE_ONE_WHEEL_RANGE = [0, 4]

function PageOne({
  isClosing,
  setClosingPage,
  wheelTrack,
  setWheelTrack,
  switchPage,
}) {
  const onClose = () => {
    const layerOne = document.getElementsByClassName("layer-1")[0]
    const layerTwo = document.getElementsByClassName("layer-2")[0]
    layerTwo.setAttribute("class", "layer-2")
    setTimeout(() => layerOne.setAttribute("class", "layer-1"), 100)

    return new Promise(resolve => {
      setTimeout(() => resolve("done"), 500)
    })
  }
  useOnCloseWatcher(isClosing, setClosingPage, onClose)

  const onClick = () => {
    if (wheelTrack < 3) {
      setWheelTrack(3)
    } else if (wheelTrack < 4) {
      setWheelTrack(4)
    } else {
      switchPage(PAGE_NAMES.WORK_PAGE)
    }
  }

  const onOpen = () => {
    const layerOne = document.getElementsByClassName("layer-1")[0]
    const layerTwo = document.getElementsByClassName("layer-2")[0]
    const textButton = document.getElementsByClassName("explore-text")[0]
    const triangle = document.getElementsByClassName("triangle")[0]
    layerTwo.setAttribute("class", "layer-2 right")
    setTimeout(() => layerOne.setAttribute("class", "layer-1 right"), 100)
    setTimeout(() => {
      textButton.setAttribute("class", "explore-text")
    }, 500)
    setTimeout(() => {
      triangle.setAttribute("class", "triangle")
    }, 700)
  }

  useEffect(() => {
    onOpen()
  }, [])

  const highlight1Styles = wheelTrack >= 1 ? { color: "#eeb669" } : null

  const highlight2Styles =
    wheelTrack >= 2 ? { backgroundSize: "100% 2rem" } : null

  const exploreTextStyles =
    wheelTrack === 3
      ? { transform: "translateY(200%)" }
      : wheelTrack >= 4
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
          <div className="gradient" />
          <div className="layer-1" />
          <div className="layer-2" />
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
          ,{" "}
          <span className="underline" style={highlight2Styles}>
            beautiful
          </span>{" "}
          and{" "}
          <span className="underline" style={highlight2Styles}>
            interactive
          </span>{" "}
          websites.
        </p>
        <Clickable>
          <div className="explore-container" onClick={onClick}>
            <div className="explore-text hidden-above">
              <p style={exploreTextStyles}>SCROLL</p>
              <p style={exploreTextStyles}>EXPLORE</p>
              <p style={exploreTextStyles}>CONNECT</p>
            </div>
            <Triangle className="triangle hidden-below" />
          </div>
        </Clickable>
      </div>
    </div>
  )
}

export default PageOne
