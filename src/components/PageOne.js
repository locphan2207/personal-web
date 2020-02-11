import React, { useEffect } from "react"
import "./PageOne.css"
import { useOnCloseWatcher } from "helpers/animationHelpers"

function PageOne({ isClosing, setClosingPage }) {
  const onOpen = () => {}

  const onClose = () => {}
  useOnCloseWatcher(isClosing, setClosingPage, onClose)

  useEffect(() => {
    onOpen()
  }, [])

  return (
    <div className="page page-one">
      <div className="intro">
        <h1>{"Tan Loc Phan"}</h1>
        <h3>{"Software engineer"}</h3>
      </div>
    </div>
  )
}

export default PageOne
