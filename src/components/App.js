import React from "react"

import Menu from "./Menu"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Menu />
      <video
        className="VideoBackground"
        src={`${process.env.PUBLIC_URL}/beach.mp4`}
        autoplay="true"
        loop="true"
        muted="true"
        type="video/mp4"
      />
      <img
        className="SkillCloud"
        src={`${process.env.PUBLIC_URL}/skills.png`}
        alt="skills"
      />
    </div>
  )
}

export default App
