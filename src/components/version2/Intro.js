import React, { useEffect } from "react"
import { useSpring, animated, config } from "react-spring"

import "./Intro.css"

import Link from "./shared/Link"

import { interpolateRange } from "helpers/animationHelpers2"

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
        <Link text="Learn more" delay={0.5} />
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
