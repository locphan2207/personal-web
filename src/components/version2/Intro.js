import React from "react"

import "./Intro.css"

import Link from "./shared/Link"

function Intro() {
  return (
    <div className="intro">
      <div className="name-greet">
        <p className="greeting">
          Hi there,
          <br />
          I'm a <span className="color-switch">software engineer</span> who
          loves building functional, beautiful and interactive web applications.
        </p>
        <Link text="Learn more" link="#expertise" delay={500} />
      </div>
      <div className="intro-lottie">
        <lottie-player
          src="https://assets6.lottiefiles.com/private_files/lf30_WdTEui.json"
          background="transparent"
          speed="0.5"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  )
}

export default Intro
