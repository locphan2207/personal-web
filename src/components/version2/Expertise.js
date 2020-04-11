import React, { useEffect, useState, useRef } from "react"
import { useSpring, animated, config } from "react-spring"

import "./Expertise.css"

import { interpolateRange } from "helpers/animationHelpers2"
import { makeObserver } from "helpers/observer"

function Expertise() {
  const refBar = useRef(null)
  const refFE = useRef(null)
  const refBE = useRef(null)
  const refCS = useRef(null)

  const [isBarVisible, setIsBarVisible] = useState(false)
  const [isFEVisible, setIsFEVisible] = useState(false)
  const [isBEVisible, setIsBEVisible] = useState(false)
  const [isCSVisible, setIsCSVisible] = useState(false)
  const [propsBar, setBar] = useSpring(() => ({
    value: 0,
    config: config.default,
  }))
  const [propsFE, setFE] = useSpring(() => ({
    value: 0,
    config: config.default,
  }))
  const [propsBE, setBE] = useSpring(() => ({
    value: 0,
    config: config.default,
  }))
  const [propsCS, setCS] = useSpring(() => ({
    value: 0,
    config: config.default,
  }))

  useEffect(() => {
    makeObserver(refBar.current, () => setIsBarVisible(true))
    makeObserver(refFE.current, () => setIsFEVisible(true))
    makeObserver(refBE.current, () => setIsBEVisible(true))
    makeObserver(refCS.current, () => setIsCSVisible(true))
  }, [])

  useEffect(() => {
    if (isBarVisible) setBar({ value: 1 })
  }, [isBarVisible, setBar])

  useEffect(() => {
    if (isFEVisible) setFE({ value: 1 })
  }, [isFEVisible, setFE])

  useEffect(() => {
    if (isBEVisible) setBE({ value: 1 })
  }, [isBEVisible, setBE])

  useEffect(() => {
    if (isCSVisible) setCS({ value: 1 })
  }, [isCSVisible, setCS])

  const opacity = props => props.value.interpolate([0, 1], [0, 1])
  const translateX = (props, range) =>
    props.value.interpolate(value => {
      const dx = interpolateRange(value, [0, 1], range)
      return `translateX(${dx}vh)`
    })
  const barWidth = propsBar.value.interpolate([0, 1], ["0%", "100%"])

  return (
    <div id="expertise" className=" big-section expertise">
      <animated.div ref={refBar} className="bar" style={{ width: barWidth }} />
      <animated.div
        ref={refFE}
        className="expertise-section frontend"
        style={{
          opacity: opacity(propsFE),
          transform: translateX(propsFE, [-20, 0]),
        }}
      >
        <h3>Frontend</h3>
        <p className="expertise-text">
          I love to see beautiful designs come to life by building it with
          cutting-edge technologies. When it comes to frontend, I tend to add
          dynamic animations to bring characteristics to the website, but I
          measure them to make sure they don't ruin the fast speed. I do make
          sure web apps are responsive across all screens, so whether on mobile
          or desktop, the website can still be functional, easy to use and
          pretty.
        </p>
        <p className="expertise-skills">
          <span>Skills</span>: React, React Native, Redux, Redux Saga, HTML5,
          CSS3, jQuery
        </p>
        <div className="expertise-lottie" style={{ width: "50%" }}>
          <lottie-player
            src="https://assets4.lottiefiles.com/datafiles/BaVRvn779cBHwSV/data.json"
            background="transparent"
            speed="1"
            autoplay
            // hover
            // loop
          ></lottie-player>
        </div>
      </animated.div>
      <animated.div
        ref={refBE}
        className="expertise-section backend"
        style={{
          opacity: opacity(propsBE),
          transform: translateX(propsBE, [20, 0]),
        }}
      >
        <h3>Backend</h3>
        <p className="expertise-text">
          A good web app needs stable a backend. I have used different MVC
          frameworks to build databases and RESTful API routes for many
          features. I always keep in mind that the backend knowledge is huge, so
          I never stop learning. Especially, a system with good scale is
          essential for services that million users access to.
        </p>
        <p className="expertise-skills">
          <span>Skills</span>: Django, Flask, Rails, SQL, NoSQL
        </p>
        <div className="expertise-lottie" style={{ width: "50%" }}>
          <lottie-player
            src="https://assets1.lottiefiles.com/private_files/lf30_CkJZhd.json"
            background="transparent"
            speed="0.3"
            loop
            // hover
            autoplay
          ></lottie-player>
        </div>
      </animated.div>
      <animated.div
        ref={refCS}
        className="expertise-section cs"
        style={{
          opacity: opacity(propsCS),
          transform: translateX(propsCS, [-20, 0]),
        }}
      >
        <h3>CS Fundamental</h3>
        <p className="expertise-text">
          Applying computer science fundamental knowledge helps me building
          efficient applications. Using the right algorithms and data structures
          makes the code fast and clean. Every time I write a new function, I
          make sure that the time and space complexity are on point. Knowing
          different languages helps me adapt fast to different frameworks.
        </p>
        <p className="expertise-skills">
          <span>Skills</span>: JavaScript, Python, Ruby, C#
        </p>
        <div className="expertise-lottie">
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_z0zkyp.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            // hover
          ></lottie-player>
        </div>
      </animated.div>
    </div>
  )
}

export default Expertise
