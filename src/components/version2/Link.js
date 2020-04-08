import React from "react"
import "./Link.css"

function Link({ text, className = "" }) {
  return (
    <div className={`link-container ${className}`}>
      <p className="link-text">{text}</p>
      {/* <p>Connect</p> */}
      <div className="underline"></div>
    </div>
  )
}

export default Link
