import React, { useEffect } from "react"

import "./PageOne.css"
import avatar from "assets/avatar.png"
import { ReactComponent as Triangle } from "assets/triangle.svg"
import { useOnCloseWatcher } from "helpers/animationHelpers"

function PageOne({ isClosing, setClosingPage, explore }) {
  const onOpen = () => {}

  const onClose = () => {}
  useOnCloseWatcher(isClosing, setClosingPage, onClose)

  useEffect(() => {
    onOpen()
  }, [])

  return (
    <div className="page-one">
      <div className="name-container">
        <h1>Tan Loc</h1>
        <div className="last-name-img">
          <img src={avatar} alt={"face"} />
          <div className="gradient" />
          <h2 className="last-name">Phan</h2>
        </div>
        <p className="greeting">
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
