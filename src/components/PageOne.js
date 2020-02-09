import React, { useEffect } from "react"
import "./PageOne.css"
import { ReactComponent as Illus } from "../assets/illu-right.svg"
import { ReactComponent as BubbleRight } from "assets/bubble-right.svg"
import { ReactComponent as BubbleLeft } from "assets/bubble-left.svg"
import { ReactComponent as CornerLeaves } from "assets/corner-leaves.svg"
import { useOnCloseWatcher } from "helpers/animationHelpers"

function PageOne({ isClosing, setClosingPage }) {
  const onClose = () => {
    const bubbleRight = document.getElementsByClassName("bubble-right")[0]
    bubbleRight.setAttribute(
      "class",
      bubbleRight.getAttribute("class") + " hidden-above"
    )

    return new Promise(resolve => {
      setTimeout(() => resolve("done"), 200)
    })
  }
  useOnCloseWatcher(isClosing, setClosingPage, onClose)

  return (
    <div className="page page-one">
      <Illus className={"illu"} />
      <BubbleLeft className={"bubble-left"} />
      <BubbleRight className={"bubble-right"} />
      <CornerLeaves className={"corner-leaves"} />
      <div className="intro">
        <h1>{"Tan Loc Phan"}</h1>
        <h3>{"Software engineer"}</h3>
      </div>
    </div>
  )
}

export default PageOne
