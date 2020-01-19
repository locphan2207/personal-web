import React, { useState, useEffect } from "react"
import "./App.css"
import { ReactComponent as DownArrow } from "../assets/down-arrow.svg"

function App() {
  const [pageTwoVisible, setPageTwoVisible] = useState(false)

  const onOpen = () => {
    setPageTwoVisible(true)
  }

  const onClose = () => {
    const panes = document.getElementsByClassName("pane")
    panes[panes.length - 1].addEventListener(
      "transitionend",
      () => setPageTwoVisible(false),
      false
    )
    for (const pane of panes) {
      const currClassName = pane.getAttribute("class")
      pane.setAttribute("class", currClassName + " pane-hidden")
    }
  }

  useEffect(() => {
    if (pageTwoVisible) {
      const panes = document.getElementsByClassName("pane")
      for (const pane of panes) {
        const currClassName = pane.getAttribute("class")
        pane.setAttribute("class", currClassName.replace("pane-hidden", ""))
      }
    }
  })

  return (
    <div className="App">
      <div className="page page-one">
        <div>
          <div className="avatar" />
          <div className="intro">
            <p>Hello,</p>
            <p>
              I'm <span>Tan Loc</span>,
            </p>
            <p>a software engineer.</p>
          </div>
        </div>
        <DownArrow className="down-arrow" onClick={onOpen} />
      </div>

      {pageTwoVisible && (
        <div className={"page page-two"}>
          <div className={"pane left-pane pane-hidden"}></div>
          <div className={"pane mid-pane pane-hidden"}></div>
          <div className={"pane right-pane pane-hidden"}>
            <div onClick={onClose}>
              <p className={"close"}>X</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
