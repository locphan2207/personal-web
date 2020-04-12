import React, { useEffect } from "react"
import { useSpring, useSprings, animated, interpolate } from "react-spring"

import "./ProjViewIcon.css"

import { interpolateRange } from "helpers/animationHelpers2"

function ProjViewIcon({ isDeck, onClick, visible }) {
  const [boxProps, setBox] = useSpring(() => ({
    value: 0,
    config: { mass: 1, friction: 10, tension: 170 },
  }))

  const [props, set] = useSprings(3, idx => ({
    dx: 0,
    rotate: idx * 15,
  }))

  useEffect(() => {
    const itemWidth =
      document
        .getElementsByClassName("proj-view-icon")[0]
        .getBoundingClientRect().width * 0.25
    if (!isDeck) {
      set(idx => ({
        dx: 0,
        rotate: idx * 15,
      }))
    } else {
      const offset = itemWidth + 2
      set(idx => ({
        dx: idx < 1 ? -offset : idx > 1 ? 1 * offset : 0,
        rotate: 0,
      }))
    }
  }, [isDeck, set])

  useEffect(() => {
    if (visible) {
      setBox(() => ({
        value: 1,
      }))
    }
  }, [visible, setBox])

  const boxTransform = props =>
    props.value.interpolate(value => {
      const dy = interpolateRange(value, [0, 1], [50, 0])
      return `translateY(${dy}rem)`
    })
  const transform = ({ dx, rotate }) =>
    interpolate([dx, rotate], (dx, rotate) => {
      return `translateX(${dx}rem) rotate(${rotate}deg)`
    })

  return (
    <>
      <animated.div
        className="proj-view-icon"
        onClick={onClick}
        style={{
          opacity: boxProps.value,
          transform: boxTransform(boxProps),
        }}
      >
        {props.map((prop, idx) => (
          <animated.div key={idx} style={{ transform: transform(prop) }} />
        ))}
      </animated.div>
      <animated.p
        className="proj-view-icon-sub-text"
        style={{
          opacity: boxProps.value,
          transform: boxTransform(boxProps),
        }}
      >
        {isDeck ? "(You can throw the cards)" : "(You can reorder the cards)"}
      </animated.p>
    </>
  )
}
export default ProjViewIcon
