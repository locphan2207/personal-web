import React, { useEffect } from "react"
import "./PageOne.css"
import { ReactComponent as TopLeftSVG } from "../assets/top-left-svg.svg"
import { ReactComponent as Illus } from "../assets/illu-right.svg"
import { ReactComponent as BubbleRight } from "../assets/bubble-right.svg"
import { ReactComponent as BubbleLeft } from "../assets/bubble-left.svg"
import { ReactComponent as CornerLeaves } from "../assets/corner-leaves.svg"
import { addKeyFramesForBubbles } from "helpers/cssHelpers"

function PageOne() {
  useEffect(() => {
    addKeyFramesForBubbles()
  }, [])

  return (
    <div className="page page-one">
      <Illus className={"illu"} />
      {/* <TopLeftSVG className={"top-left-svg"} /> */}
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
