import React, { useState } from "react"
import "./Image.css"

import Button from "./Button"

const imgGradient = "linear-gradient(#fcfcfc1e, #fcfcfc1e, #ad986f75)"
const imgUrl = url => ({
  backgroundImage: `${imgGradient}, url(${url})`,
})

function Image({ src }) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className="img-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="img" style={imgUrl(src)}></div>
      <div className="img-layer">
        {isHovered && <Button text="More" style={{ zIndex: 1 }} />}
      </div>
    </div>
  )
}

export default Image
