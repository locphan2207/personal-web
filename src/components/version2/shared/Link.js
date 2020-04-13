import React, { useEffect } from "react"
import { useSpring, animated, config } from "react-spring"

import "./Link.css"

function Link({
  text,
  link,
  className = "",
  darkStyle = false,
  delay = 0,
  fontSize = 15,
  hidden,
  onClick,
}) {
  const [props, set] = useSpring(() => ({
    dy: -30,
    opacity: 0,
  }))
  const [barProps, setBar] = useSpring(() => ({
    width: "0%",
    backgroundColor: "#ad986f",
    config: config.stiff,
  }))

  useEffect(() => {
    if (!hidden) {
      setBar({ width: "130%", delay })
      set({ dy: 0, opacity: 1, delay: delay + 500 })
    }
  }, [hidden, set, setBar, delay])

  const transform = props.dy.interpolate(value => `translateY(${value}rem)`)
  const opacity = props.opacity.interpolate([0, 0.5, 1], [0, 1, 1])
  const openNewTab = () => window.open(link, "_blank")

  return (
    <div
      className={`link-container ${className}`}
      onMouseEnter={() =>
        setBar({
          width: "100%",
          backgroundColor: darkStyle ? "#ffffff" : "#0a0a0a",
        })
      }
      onMouseLeave={() => setBar({ width: "130%", backgroundColor: "#ad986f" })}
      onClick={link ? openNewTab : onClick}
    >
      <animated.div
        style={{
          opacity,
          transform,
        }}
      >
        <p
          className={`link-text${darkStyle ? " link-text-dark" : ""}`}
          style={{
            fontSize: `${fontSize}rem`,
            textAlign: "center",
          }}
        >
          {text}
        </p>
      </animated.div>
      <animated.div className="underline" style={barProps}></animated.div>
    </div>
  )
}

export default Link
