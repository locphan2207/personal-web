import React from "react"
import "./Link.css"

function Link({
  text,
  className = "",
  darkStyle = false,
  delay = 0,
  duration = 0.5,
  fontSize = 15,
  style,
}) {
  return (
    <div className={`link-container ${className}`} style={style}>
      <p
        className={`link-text${darkStyle ? " link-text-dark" : ""}`}
        style={{ fontSize: `${fontSize}rem` }}
      >
        {text}
      </p>
      {/* <p>Connect</p> */}
      <div
        className="underline"
        style={{
          animation: `${duration}s line ${delay}s ease-out backwards`,
        }}
      ></div>
    </div>
  )
}

export default Link
