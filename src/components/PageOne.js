import React, { useEffect } from "react"
import "./PageOne.css"
import { ReactComponent as Illus } from "../assets/illu-right.svg"
import { ReactComponent as BubbleRight } from "assets/bubble-right.svg"
import { ReactComponent as BubbleLeft } from "assets/bubble-left.svg"
import { ReactComponent as CornerLeaves } from "assets/corner-leaves.svg"
import { useOnCloseWatcher, addJiggleKeyFrames } from "helpers/animationHelpers"

function PageOne({ isClosing, setClosingPage }) {
  const onOpen = () => {
    const bubbleRight = document.getElementsByClassName("bubble-right")[0]
    const bubbleLeft = document.getElementsByClassName("bubble-left")[0]
    const cornerLeaves = document.getElementsByClassName("corner-leaves")[0]
    const illu = document.getElementsByClassName("illu")[0]
    bubbleRight.setAttribute("class", "bubble-right")
    bubbleLeft.setAttribute("class", "bubble-left")
    cornerLeaves.setAttribute("class", "corner-leaves")
    setTimeout(
      () => cornerLeaves.setAttribute("class", "corner-leaves jiggle"),
      600 // wait for "in" animation to finish then trigger jiggle animation
    )
    illu.setAttribute("class", "illu")
    addJiggleKeyFrames()
  }

  const onClose = () => {
    const bubbleRight = document.getElementsByClassName("bubble-right")[0]
    const bubbleLeft = document.getElementsByClassName("bubble-left")[0]
    const cornerLeaves = document.getElementsByClassName("corner-leaves")[0]
    const illu = document.getElementsByClassName("illu")[0]
    bubbleRight.setAttribute("class", "bubble-right hidden-right")
    bubbleLeft.setAttribute("class", "bubble-left hidden-left")
    cornerLeaves.setAttribute("class", "corner-leaves")
    setTimeout(
      () =>
        cornerLeaves.setAttribute("class", "corner-leaves hidden-rotate-left"),
      50 // wait to remove jiggle animation then do "out" animation
    )
    illu.setAttribute("class", "illu hidden-below")
    return new Promise(resolve => {
      setTimeout(() => resolve("done"), 500)
    })
  }
  useOnCloseWatcher(isClosing, setClosingPage, onClose)

  useEffect(() => {
    onOpen()
  }, [])

  return (
    <div className="page page-one">
      <Illus className={"illu hidden-below"} />
      <BubbleLeft className={"bubble-left hidden-left"} />
      <BubbleRight className={"bubble-right hidden-right"} />
      <CornerLeaves className={"corner-leaves hidden-rotate-left"} />
      <div className="intro">
        <h1>{"Tan Loc Phan"}</h1>
        <h3>{"Software engineer"}</h3>
      </div>
    </div>
  )
}

export default PageOne
