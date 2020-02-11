import React, { useEffect } from "react"

import "./PageOne.css"
import avatar from "assets/avatar.png"
import { useOnCloseWatcher } from "helpers/animationHelpers"

function PageOne({ isClosing, setClosingPage }) {
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
          <img src={avatar} className={"image"} alt={"face"} />
          <h2 className="last-name">Phan</h2>
        </div>
      </div>
      <p>
        Hi there,
        <br />
        I'm a <span>software engineer</span> who loves building functional,
        beautiful and interactive websites.
      </p>
    </div>
  )
}

export default PageOne
