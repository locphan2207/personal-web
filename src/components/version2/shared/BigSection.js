import React, { useState, useEffect, useRef } from "react"
import { useSpring, animated, config } from "react-spring"

import "./BigSection.css"

import { makeObserver } from "helpers/observer"

function BigSection({ id, className, children, observerOptions }) {
  const refBar = useRef(null)
  const [isBarVisible, setIsBarVisible] = useState(false)
  const [propsBar, setBar] = useSpring(() => ({
    value: 0,
    config: config.default,
  }))

  useEffect(() => {
    makeObserver(refBar.current, () => setIsBarVisible(true), observerOptions)
  }, [])

  useEffect(() => {
    if (isBarVisible) setBar({ value: 1 })
  }, [isBarVisible, setBar])

  const barWidth = propsBar.value.interpolate([0, 1], ["0%", "100%"])

  return (
    <div id={id} className={`big-section${className ? " " + className : ""}`}>
      <animated.div ref={refBar} className="bar" style={{ width: barWidth }} />
      {children}
    </div>
  )
}

export default BigSection
