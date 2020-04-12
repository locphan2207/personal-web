import React, { useEffect } from "react"
import { useSprings, animated, interpolate } from "react-spring"

import "./ProjViewIcon.css"

function ProjViewIcon({ isDeck, onClick }) {
  const [props, set] = useSprings(3, idx => ({
    dx: 0,
    rotate: 0,
  }))

  useEffect(() => {
    const itemWidth =
      document
        .getElementsByClassName("proj-view-icon")[0]
        .getBoundingClientRect().width / 3
    if (!isDeck) {
      set(idx => ({
        dx: 0,
        rotate: idx * 10,
      }))
    } else {
      set(idx => ({
        dx: idx * itemWidth,
        rotate: 0,
      }))
    }
  }, [isDeck, set])

  const transform = ({ dx, rotate }) =>
    interpolate([dx, rotate], (dx, rotate) => {
      return `translateX(${dx}rem) rotate(${rotate}deg)`
    })

  return (
    <div className="proj-view-icon" onClick={onClick}>
      {props.map(prop => (
        <animated.div style={{ transform: transform(prop) }} />
      ))}
    </div>
  )
}
export default ProjViewIcon
