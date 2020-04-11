import React, { useEffect, useState, useRef } from "react"
import {
  useSpring,
  useSprings,
  animated,
  interpolate,
  config,
} from "react-spring"
import { useDrag } from "react-use-gesture"

import "./Work.css"

import Link from "./shared/Link"
import Image from "./shared/Image"

import food from "assets/food.png"
import dataBlock from "assets/data-block.png"
import emotion from "assets/emotion.png"

import { interpolateRange } from "helpers/animationHelpers2"
import { makeObserver } from "helpers/observer"

const getRotate = idx => {
  return (idx % 2 === 0 ? 1 : -1) * (idx + 1.5)
}
const toDeck = idx => ({
  dx: 0,
  dy: 10,
  rotate: getRotate(idx),
  delay: idx * 100,
})

function Work() {
  const refBar = useRef(null)
  const refWork = useRef(null)
  const refProj = useRef(null)

  const [isBarVisible, setIsBarVisible] = useState(false)
  const [isWorkVisible, setIsWorkVisible] = useState(false)
  const [isProjVisible, setIsProjVisible] = useState(false)
  const [goneProj] = useState(() => new Set())

  const [propsBar, setBar] = useSpring(() => ({
    value: 0,
    config: config.default,
  }))
  const [propsWork, setWork] = useSpring(() => ({
    value: 0,
    config: config.default,
  }))

  const [propsProjects, setProjs] = useSprings(PROJECTS.length, idx => ({
    dx: (window.innerWidth + 500) * (idx % 2 === 0 ? 1 : -1),
    dy: 10,
    scale: 1,
    rotate: getRotate(idx),
    rotateX: 2,
    // configs
    config: { mass: 1, tension: 500, friction: 50 },
  }))

  useEffect(() => {
    makeObserver(refBar.current, () => setIsBarVisible(true))
    makeObserver(refWork.current, () => setIsWorkVisible(true))
    makeObserver(refProj.current, () => setIsProjVisible(true))
  }, [])

  useEffect(() => {
    if (isBarVisible) setBar({ value: 1 })
  }, [isBarVisible, setBar])

  useEffect(() => {
    if (isWorkVisible) setWork({ value: 1 })
  }, [isWorkVisible, setWork])

  useEffect(() => {
    if (isProjVisible) {
      setProjs(toDeck)
    }
  }, [isProjVisible, setProjs])

  const barWidth = propsBar.value.interpolate([0, 1], ["0%", "100%"])
  const opacity = props => props.value.interpolate([0, 1], [0, 1])
  const translateY = (props, range) =>
    props.value.interpolate(value => {
      const dy = interpolateRange(value, [0, 1], range)
      return `translateY(${dy}vh)`
    })

  const projectTransform = ({ dx, dy, rotate, rotateX, scale }) =>
    interpolate(
      [dx, dy, rotate, rotateX, scale],
      (dx, dy, rotate, rotateX, scale) => {
        const interpolatedDy = interpolateRange(dy, [-50, 50], [-5, 5])
        return `perspective(800rem) translate(${dx}rem, ${interpolatedDy}rem) rotateZ(${rotate}deg) rotateX(${rotateX}deg) scale(${scale})`
      }
    )

  const bindGestureHandler = useDrag(state => {
    const {
      args: [currIdx],
      down,
      movement: [dx, dy],
      velocity,
      direction: [dirX, dirY],
    } = state
    setProjs(idx => {
      // Only update card of given index
      if (currIdx !== idx) return

      if (goneProj.has(currIdx)) {
        return {
          dx: (window.innerWidth + 500) * (dirX > 0 ? 1 : dirX < 0 ? -1 : 0),
        }
      }

      // When mouse is pressing: Lift and straight up card
      if (down) {
        return {
          dx,
          dy,
          scale: 1.05,
          rotateX: 0,
          rotate: 0,
        }
      }

      // When mouse is released: if velocity is strong -> a flick -> throw card out of screen with the direction
      if (velocity > 2 && Math.abs(dirX) > Math.abs(dirY)) {
        goneProj.add(currIdx)
        return {
          dx: (window.innerWidth + 500) * (dirX > 0 ? 1 : dirX < 0 ? -1 : 0),
        }
      }

      // When mouse is released: if velocity is small, let card go back to deck
      return {
        dx: 0,
        dy: 10,
        scale: 1,
        rotateX: 2,
        rorate: getRotate(idx),
      }
    })

    if (!down && goneProj.size === PROJECTS.length) {
      goneProj.clear()
      setTimeout(() => setProjs(toDeck), 1000)
    }
  })

  return (
    <div className="big-section">
      <animated.div ref={refBar} className="bar" style={{ width: barWidth }} />
      <animated.div
        ref={refWork}
        className="sub-section"
        style={{
          opacity: opacity(propsWork),
          transform: translateY(propsWork, [30, 0]),
        }}
      >
        <p className="sub-section-title">WORK</p>
        <div className="work-section">
          <p className="work-year">2018 - 2020</p>
          <div className="work-info">
            <h3>Smarkets</h3>
            <p className="work-role">Software Engineer</p>
          </div>
          <p className="work-tags">Fullstack · Mobile dev</p>
          <Link className="work-link" text="More" />
          <p className="work-desc">
            <br />● Contributed directly to building a cross-platform mobile
            application using React Native from the early stages to the app
            store launch with the increase in user numbers from 0 to 9000
            <br />● Constructed Redux Saga for API and websocket data flow
            management to meet the requirements of every key feature
            <br />● Integrated animated libraries and necessary styles to the
            components to deliver the top-notch UI/UX from the mocked designs
            <br />● Reduced the number of re-renderings and load times by
            designing granular components with efficient time complexity
            selectors
            <br />● Designed a geofencing micro-service which enforces users’
            locations with GPS and IP addresses using Flask in the backend and
            React in the frontend
            <br />● Implemented Django with Redis cache to build essential
            database models and fast API endpoints for the social features such
            as profiles, posts and comments
            <br />● Applied unit and automation tests together with crashlytic
            reports to avoid bugs and crashes
          </p>
        </div>
      </animated.div>
      )}
      <div ref={refProj} className="sub-section">
        <p className="sub-section-title">PROJECTS</p>
        <div className="project-section">
          {PROJECTS.map((item, idx) => {
            return (
              <animated.div
                {...bindGestureHandler(idx)}
                // ref={refProjects[idx]}
                className="project-item"
                key={item.title}
                style={{ transform: projectTransform(propsProjects[idx]) }}
              >
                <Image src={item.img} />
                <h3>{item.title}</h3>
                <p className="project-year">{item.year}</p>
                <p className="project-desc">{item.desc}</p>
              </animated.div>
            )
          })}
        </div>
        )} )}
      </div>
      )}
    </div>
  )
}

const PROJECTS = [
  {
    img: food,
    title: "Food Stories",
    year: "2018",
    desc: (
      <>
        Food Stories is a full-stack web application that is inspired by Kitchen
        Stories. The project is built entirely on <span>Ruby on Rails</span>{" "}
        backend and with <span>React-Redux</span> frontend
      </>
    ),
  },
  {
    img: dataBlock,
    title: "Data Block",
    year: "2018",
    desc: (
      <>
        A game built with <span>JavaScript</span>. Players protect a character
        from being hit by big blocks of data falling down from the sky by
        controlling the shield using the mouse
      </>
    ),
  },
  {
    img: emotion,
    title: "Emotion Diary",
    year: "2018",
    desc: (
      <>
        A cross-platform mobile app to keep track of users' emotions, built with{" "}
        <span>React Native</span> and <span>Firebase</span>
      </>
    ),
  },
]

export default Work
