import React from "react"
import "./NavBar.css"

function NavBar({ onWorkOpen, onHomeOpen }) {
  return (
    <div className="nav-bar">
      <h5 onClick={onHomeOpen}>{"HOME"}</h5>
      <h5 onClick={onWorkOpen}>{"WORK"}</h5>
      <h5>{"SKILLS"}</h5>
      <h5>{"ABOUT"}</h5>
    </div>
  )
}

export default NavBar
