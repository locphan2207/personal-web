import React, { useState } from "react"
import "./PageOne.css"
import { ReactComponent as TopLeftSVG } from "../assets/top-left-svg.svg"
import { ReactComponent as Illus } from "../assets/illu-right.svg"
import { ReactComponent as BubbleRight } from "../assets/bubble-right.svg"
import { ReactComponent as BubbleLeft } from "../assets/bubble-left.svg"

function PageOne() {
  return (
    <div className="page page-one">
      <Illus />
      <TopLeftSVG />
      <BubbleLeft />
      <BubbleRight />
    </div>
  )
}

export default PageOne
