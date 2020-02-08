import React from "react"
import "./PageOne.css"
import { ReactComponent as Illus } from "../assets/illu-right.svg"
import { ReactComponent as BubbleRight } from "assets/bubble-right.svg"
import { ReactComponent as BubbleLeft } from "assets/bubble-left.svg"
import { ReactComponent as CornerLeaves } from "assets/corner-leaves.svg"

function PageOne() {
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
