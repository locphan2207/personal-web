import React from "react"
import "./Link.css"

function Link({ text }) {
  return (
    <div className="link-container">
      <p className="link-text">{text}</p>
      {/* <p>Connect</p> */}
      <div className="underline"></div>
    </div>
  )
}

export default Link
