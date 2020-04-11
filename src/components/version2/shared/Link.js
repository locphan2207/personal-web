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
  style,
  hidden,
  newTab,
}) {
  const [props, set] = useSpring(() => ({
    width: "0%",
    backgroundColor: "#ad986f",
    config: config.stiff,
  }))

  useEffect(() => {
    if (!hidden) set({ width: "130%", delay })
  }, [hidden, set, delay])

  return (
    <div
      className={`link-container ${className}`}
      style={style}
      onMouseEnter={() =>
        set({
          width: "100%",
          backgroundColor: darkStyle ? "#ffffff" : "#0a0a0a",
        })
      }
      onMouseLeave={() => set({ width: "130%", backgroundColor: "#ad986f" })}
    >
      <a
        href={link}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        className={`link-text${darkStyle ? " link-text-dark" : ""}`}
        style={{ fontSize: `${fontSize}rem` }}
      >
        {text}
      </a>
      <animated.div className="underline" style={props}></animated.div>
    </div>
  )
}

export default Link
