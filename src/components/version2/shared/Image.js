import React, { useState } from "react"
import "./Image.css"

import Button from "./Button"

const imgGradient = "linear-gradient(#fcfcfc1e, #fcfcfc1e, #ad986f75)"
const imgUrl = url => ({
  backgroundImage: `${imgGradient}, url(${url})`,
})

function Image({ src, link }) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className="img-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="img" style={imgUrl(src)}></div>
      <div className="img-layer">
        {isHovered && (
          <Button text="More" link={link} style={{ zIndex: 1 }} newTab />
        )}
      </div>
    </div>
  )
}

export default Image
