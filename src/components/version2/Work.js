import React, { useEffect, useState, useRef } from "react"
import { useSpring, animated, config } from "react-spring"

import "./Work.css"

import Link from "./shared/Link"
import Image from "./shared/Image"

import food from "assets/food.png"
import dataBlock from "assets/data-block.png"
import emotion from "assets/emotion.png"

import { interpolateRange } from "helpers/animationHelpers2"
import { makeObserver } from "helpers/observer"

function Work() {
  const refBar = useRef(null)
  const refWork = useRef(null)

  const [isBarVisible, setIsBarVisible] = useState(false)
  const [isWorkVisible, setIsWorkVisible] = useState(false)
  const [propsBar, setBar] = useSpring(() => ({
    value: 0,
    config: config.default,
  }))
  const [propsWork, setWork] = useSpring(() => ({
    value: 0,
    config: config.default,
  }))

  useEffect(() => {
    makeObserver(refBar.current, () => setIsBarVisible(true))
    makeObserver(refWork.current, () => setIsWorkVisible(true), {
      triggerPosition: 0.8,
    })
  }, [])

  useEffect(() => {
    if (isBarVisible) setBar({ value: 1 })
  }, [isBarVisible, setBar])

  useEffect(() => {
    if (isWorkVisible) setWork({ value: 1 })
  }, [isWorkVisible, setWork])

  const barWidth = propsBar.value.interpolate([0, 1], ["0%", "100%"])
  const opacity = props => props.value.interpolate([0, 1], [0, 1])
  const translateY = (props, range) =>
    props.value.interpolate(value => {
      const dy = interpolateRange(value, [0, 1], range)
      return `translateY(${dy}vh)`
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
      <div id="project" className="sub-section">
        <p className="sub-section-title">PROJECTS</p>
        <div className="project-section">
          <div className="project-item">
            <Image src={food} />
            <h3>Food Stories</h3>
            <p className="project-year">2018</p>
            <p className="project-desc">
              Food Stories is a full-stack web application that is inspired by
              Kitchen Stories. The project is built entirely on{" "}
              <span>Ruby on Rails</span> backend and with{" "}
              <span>React-Redux</span> frontend
            </p>
          </div>
          <div className="project-item">
            <Image src={dataBlock} />
            <h3>Data Block</h3>
            <p className="project-year">2018</p>
            <p className="project-desc">
              A game built with <span>JavaScript</span>. Players protect a
              character from being hit by big blocks of data falling down from
              the sky by controlling the shield using the mouse
            </p>
          </div>
          <div className="project-item">
            <Image src={emotion} />
            <h3>Emotion Diary</h3>
            <p className="project-year">2018</p>
            <p className="project-desc">
              A cross-platform mobile app to keep track of users' emotions,
              built with <span>React Native</span> and <span>Firebase</span>
            </p>
          </div>
        </div>
      </div>
      )}
    </div>
  )
}

export default Work
