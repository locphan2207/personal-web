import React from "react"
import "./App.css"
import Link from "./Link"

function App() {
  return (
    <div className="intro">
      <div className="name-greet">
        <h1 className="name">Tan Loc Phan</h1>
        <p className="greeting">
          Hi there,
          <br />
          I'm a <span className="color-switch">software engineer</span> who
          loves building functional, beautiful and interactive web applications.
        </p>
        <Link text="Learn more" />
      </div>
      <div className="lottie">
        <lottie-player
          src="https://assets6.lottiefiles.com/packages/lf20_FvCZg7.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  )
}

export default App
