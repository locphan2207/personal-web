import React, { useEffect } from "react"
import { useSpring, animated, config } from "react-spring"

import "./Header.css"

import {
  createNameToHeaderScene,
  interpolateRange,
} from "helpers/animationHelpers2"

function Header() {
  const [props, set] = useSpring(() => ({
    progress: 0,
    config: config.default,
  }))

  const transformName = props.progress.interpolate(progress => {
    const dx = interpolateRange(progress, [0, 1], [0, -25])
    const dy = interpolateRange(progress, [0, 1], [20, 0])
    const scale = interpolateRange(progress, [0, 1], [1, 0.5])
    return `translate(${dx}%, ${dy}vh) scale(${scale})`
  })

  const backgroundHeader = props.progress.interpolate(
    [0, 1],
    ["#fcfcfcff", "#f5f5f5aa"]
  )
  // Create scene after mounting
  useEffect(() => {
    createNameToHeaderScene(set)
  }, [set])
  return (
    <animated.div
      className="sticky-header"
      style={{
        backgroundColor: backgroundHeader,
      }}
    >
      <animated.h1 className="name" style={{ transform: transformName }}>
        Tan Loc Phan
      </animated.h1>
    </animated.div>
  )
}

export default Header
