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
import ProjViewIcon from "./shared/ProjViewIcon"
import BigSection from "./shared/BigSection"

import food from "assets/food.png"
import dataBlock from "assets/data-block.png"
import emotion from "assets/emotion.png"

import { interpolateRange } from "helpers/animationHelpers2"
import { makeObserver } from "helpers/observer"

const isMobile = window.innerWidth < 480

const BODY_WIDTH = document.getElementById("root").getBoundingClientRect().width
const getRotate = idx => {
  return (idx % 2 === 0 ? 1 : -1) * (idx + 1.5)
}
const getCardPosInCarousel = (projIdx, cardWidth, cardOrder) => {
  const margin =
    (BODY_WIDTH - cardWidth * PROJECTS.length) / (PROJECTS.length * 2)
  if (cardOrder) {
    const idx = cardOrder.indexOf(projIdx)
    return idx * (cardWidth + 2 * margin) + margin
  }
  return projIdx * (cardWidth + 2 * margin) + margin
}
const getCardPosInDeck = cardWidth => {
  return BODY_WIDTH / 2 - cardWidth / 2
}
const getCurrMoveIdx = (pos, cardWidth) => {
  const margin =
    (BODY_WIDTH - cardWidth * PROJECTS.length) / (PROJECTS.length * 2)
  const idx = Math.round((pos - margin) / (cardWidth + 2 * margin))
  return idx < 0 ? 0 : idx > PROJECTS.length - 1 ? PROJECTS.length - 1 : idx
}

const toDeck = (idx, cardWidth) => ({
  dx: getCardPosInDeck(cardWidth),
  dy: 0,
  rotate: getRotate(idx),
  delay: idx * 100,
  scale: 1,
  zIndex: 0,
})

const toCarousel = (idx, cardWidth, cardOrder) => {
  return {
    dx: getCardPosInCarousel(idx, cardWidth, cardOrder),
    dy: 0,
    rotate: 0,
    delay: idx * 100,
    scale: 1,
    zIndex: 0,
  }
}

function Work() {
  const refWork = useRef(null)
  const refProj = useRef(null)
  const refProjects = useRef([])
  const cardWidth = useRef(0)
  const cardOrder = useRef(PROJECTS.map((_, i) => i))

  const [isDeckView, setIsDeckView] = useState(true)

  const [isWorkVisible, setIsWorkVisible] = useState(false)
  const [isProjVisible, setIsProjVisible] = useState(false)
  const [goneProj] = useState(() => new Set())

  const [propsWork, setWork] = useSpring(() => ({
    value: 0,
    config: config.default,
  }))

  const [propsProj, setProj] = useSpring(() => ({
    value: 0,
    config: config.default,
  }))

  const [propsProjects, setProjs] = useSprings(PROJECTS.length, idx => ({
    dx: (window.innerWidth + 500) * (idx % 2 === 0 ? 1 : -1),
    dy: 0,
    scale: 1,
    rotate: getRotate(idx),
    zIndex: 0,
    // configs
    config: { mass: 1, tension: 500, friction: 40 },
  }))

  useEffect(() => {
    makeObserver(refWork.current, () => setIsWorkVisible(true), {
      threshold: 0.1,
    })
    makeObserver(refProj.current, () => setIsProjVisible(true))
    cardWidth.current = refProjects.current[0].getBoundingClientRect().width
  }, [])

  useEffect(() => {
    if (isWorkVisible) setWork({ value: 1 })
  }, [isWorkVisible, setWork])

  useEffect(() => {
    if (isProjVisible) {
      setProj({ value: 1 })
      if (isDeckView) {
        setProjs(idx => toDeck(idx, cardWidth.current))
      } else {
        goneProj.clear()
        setProjs(idx => toCarousel(idx, cardWidth.current, cardOrder.current))
      }
    }
  }, [isProjVisible, setProj, isDeckView, setProjs, goneProj])

  const opacity = props => props.value.interpolate([0, 1], [0, 1])
  const translateY = (props, range) =>
    props.value.interpolate(value => {
      const dy = interpolateRange(value, [0, 1], range)
      return `translateY(${dy}vh)`
    })

  const projectTransform = ({ dx, dy, rotate, scale }, idx) =>
    interpolate([dx, dy, rotate, scale], (dx, dy, rotate, scale) => {
      const interpolatedDy = interpolateRange(dy, [-50, 50], [-5, 5])
      return `translate(${dx}rem, ${interpolatedDy}rem) rotate(${rotate}deg) scale(${scale})`
    })

  const bindGestureHandler = useDrag(state => {
    const {
      args: [projIdx],
      down,
      movement: [dx, dy],
      velocity,
      direction: [dirX, dirY],
    } = state
    if (isDeckView) {
      // Deck
      setProjs(idx => {
        // Only update card of given index
        if (projIdx !== idx) return

        if (goneProj.has(projIdx)) {
          return {
            dx: (window.innerWidth + 500) * (dirX > 0 ? 1 : dirX < 0 ? -1 : 0),
            immediate: key => key === "zIndex",
          }
        }

        // When mouse is pressing: Lift and straight up card
        if (down) {
          return {
            dx: getCardPosInDeck(cardWidth.current) + dx,
            dy,
            scale: 1.05,
            rotate: 0,
            zIndex: 1,
            immediate: key => key === "zIndex",
          }
        }

        // When mouse is released: if velocity is strong -> a flick -> throw card out of screen with the direction
        if (velocity > 2 && Math.abs(dirX) > Math.abs(dirY)) {
          goneProj.add(projIdx)
          return {
            dx: (window.innerWidth + 500) * (dirX > 0 ? 1 : dirX < 0 ? -1 : 0),
            immediate: key => key === "zIndex",
          }
        }

        // When mouse is released: if velocity is small, let card go back to deck
        return {
          dx: getCardPosInDeck(cardWidth.current),
          dy: 0,
          scale: 1,
          rorate: getRotate(idx),
          zIndex: 0,
          immediate: key => key === "zIndex",
        }
      })

      if (!down && goneProj.size === PROJECTS.length) {
        goneProj.clear()
        setTimeout(() => setProjs(idx => toDeck(idx, cardWidth.current)), 1000)
      }
    } else {
      // Carousel
      const currIdx = cardOrder.current.indexOf(projIdx)
      const currMovePos = getCardPosInCarousel(currIdx, cardWidth.current) + dx
      const newIdx = getCurrMoveIdx(currMovePos, cardWidth.current)
      const newOrder = [...cardOrder.current]
      newOrder.splice(currIdx, 1)
      newOrder.splice(newIdx, 0, projIdx)

      setProjs(idx => {
        if (projIdx === idx && down) {
          return {
            dx: getCardPosInCarousel(currIdx, cardWidth.current) + dx,
            dy,
            scale: 1.05,
            zIndex: 1,
            immediate: key => key === "zIndex",
          }
        }

        return {
          dx: getCardPosInCarousel(idx, cardWidth.current, newOrder),
          dy: 0,
          scale: 1,
          zIndex: 0,
          immediate: key => key === "zIndex",
        }
      })
      if (!down) {
        cardOrder.current = newOrder
      }
    }
  })

  return (
    <BigSection>
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
          <Link
            className="work-link"
            link="http://getsbk.com/"
            text="More"
            delay={500}
            hidden={!isWorkVisible}
            newTab
          />
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
        <animated.p
          className="sub-section-title"
          style={{
            opacity: opacity(propsProj),
            transform: translateY(propsProj, [-10, 0]),
          }}
        >
          PROJECTS
        </animated.p>
        <div className="project-section">
          {PROJECTS.map((item, idx) => {
            return (
              <animated.div
                {...bindGestureHandler(idx)}
                ref={ref => refProjects.current.push(ref)}
                className="project-item"
                key={item.title}
                style={{
                  left: 0,
                  transform: projectTransform(propsProjects[idx], idx),
                  zIndex: propsProjects[idx].zIndex,
                }}
              >
                <Image src={item.img} link={item.link} />
                <h3>{item.title}</h3>
                <p className="project-year">{item.year}</p>
                <p className="project-desc">{item.desc}</p>
              </animated.div>
            )
          })}
        </div>
        {!isMobile && (
          <ProjViewIcon
            onClick={() => setIsDeckView(!isDeckView)}
            isDeck={isDeckView}
            visible={isProjVisible}
          />
        )}
        )} )}
      </div>
      )}
    </BigSection>
  )
}

const PROJECTS = [
  {
    img: food,
    title: "Food Stories",
    link: "http://food-stories.herokuapp.com/#/",
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
    link: "https://locphan2207.github.io/Data-block/",
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
    link: "https://github.com/locphan2207/Emotion-Diary",
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
