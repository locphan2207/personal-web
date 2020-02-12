import React, { useEffect } from "react"

import "./PageFour.css"
import { useOnCloseWatcher } from "helpers/animationHelpers"

function PageFour({ isClosing, setClosingPage }) {
  const onOpen = () => {}

  const onClose = () => {}
  useOnCloseWatcher(isClosing, setClosingPage, onClose)

  useEffect(() => {
    onOpen()
  }, [])

  return <div className="page-four"></div>
}

export default PageFour
