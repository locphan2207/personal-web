import React, { useState, useEffect, useRef } from "react"
import "./PageTwo.css"
import { useOnCloseWatcher } from "helpers/animationHelpers"

// Animation timeout delay (in millisecond)
const PANE_OPEN_DURATION = 500 // NOTE: PANE BECOME BUBBLE MOVE DURATION
const TITLE_SHOW_DELAY = PANE_OPEN_DURATION / 3
const TITLE_SHOW_DURATION = PANE_OPEN_DURATION / 2
const LEFT_PANE_SHOW_DELAY = PANE_OPEN_DURATION / 3

// Animation CSS delay (in second)
const TITLE_LEFT_PANE_DELAY = 0.3

function PageTwo({ isClosing, setClosingPage }) {
  const [selectedProjectIdx, setSelectedProjectIdx] = useState(0)
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false)
  const titleHeights = useRef({})
  const previousIdx = useRef(null)

  const animateDescription = () => {
    setIsDescriptionVisible(true)
  }

  const onProjectSelect = index => {
    if (index !== selectedProjectIdx) {
      setSelectedProjectIdx(index)
      setIsDescriptionVisible(false)
      setTimeout(animateDescription, LEFT_PANE_SHOW_DELAY)
    }
  }

  const onOpen = () => {
    // Animate project titles
    // Starts 0.5s after pane animation
    // Start from the bottom up
    const projects = document.getElementsByClassName("project-title")
    for (let i = projects.length - 1; i >= 0; i--) {
      const project = projects[i]
      setTimeout(() => {
        const currClassName = project.getAttribute("class")
        project.setAttribute("class", currClassName.replace("hidden-below", ""))
      }, TITLE_SHOW_DELAY + (TITLE_SHOW_DURATION / projects.length) * (projects.length - i))
    }

    setTimeout(animateDescription, LEFT_PANE_SHOW_DELAY)
  }

  const onClose = () => {
    // Animate project titles
    // Start from the top down
    const projects = document.getElementsByClassName("project-title")
    for (let i = 0; i < PROJECTS.length; i++) {
      const project = projects[i]
      setTimeout(() => {
        const currClassName = project.getAttribute("class")
        project.setAttribute("class", currClassName + " hidden-below")
      }, TITLE_SHOW_DELAY + (TITLE_SHOW_DURATION / projects.length) * i)
    }

    return new Promise(resolve => {
      setTimeout(
        () => resolve("done"),
        TITLE_SHOW_DURATION + PANE_OPEN_DURATION
      )
    })
  }
  useOnCloseWatcher(isClosing, setClosingPage, onClose)

  useEffect(() => {
    onOpen()
  }, []) // eslint-disable-line

  useEffect(() => {
    previousIdx.current = selectedProjectIdx
  }, [selectedProjectIdx])

  return (
    <div className={"page-two"}>
      <div className={"project-titles"}>
        {PROJECTS.map((project, idx) => (
          <p
            ref={ref => {
              if (ref) titleHeights.current[project.name] = ref.offsetHeight
            }}
            key={project.name}
            onMouseDown={() => onProjectSelect(idx)}
            className={"project-title hidden-below"}
            style={
              idx === selectedProjectIdx ? { color: PROJECTS[idx].color } : null
            }
          >
            {project.name}
          </p>
        ))}
      </div>
      {isDescriptionVisible && (
        <div className={"desc-body"}>
          <div className={"project-year-container"}>
            {PROJECTS[selectedProjectIdx].years.map((year, idx) => (
              <div key={idx}>
                <div className={"year-wrapper"}>
                  <p
                    className={`project-year ${idx % 2 === 0 ? "even" : "odd"}`}
                    key={year}
                  >
                    {year}
                  </p>
                </div>
                {idx === 0 && <div className={"project-year-dash"} />}
              </div>
            ))}
          </div>
          <div className={"project-tags"}>
            {PROJECTS[selectedProjectIdx].tags.split("").map((char, idx) => {
              return (
                <span
                  key={idx}
                  className={"project-tag-char"}
                  style={{
                    animationDelay: `${TITLE_LEFT_PANE_DELAY + idx * 0.03}s`,
                  }}
                >
                  {char}
                </span>
              )
            })}
          </div>
          <p className={"project-description"}>
            {PROJECTS[selectedProjectIdx].description}
          </p>
        </div>
      )}
    </div>
  )
}

const PROJECTS = [
  {
    name: "SBK",
    color: "#187b57",
    link: "getsbk.com",
    years: ["2018", "2020"],
    description:
      "Smarkets is a betting exchange that offers the best odds with lowest commision. At Smarkets, I contributed directly to building a competitive online sportsbook application from its early stages to having thousands of users.",
    tags: "Fullstack · Mobile dev",
  },
  {
    name: "Food Stories",
    color: "#4184a0",
    link: "food-stories.com",
    years: ["2018"],
    description:
      "A CRUD full stack web to share cooking recipes, built with Ruby on Rails and React/Redux.",
    tags: "Fullstack · Mobile dev",
  },
  {
    name: "Data Block",
    color: "#3C887E",
    link: "food-stories.com",
    years: ["2018"],
    description: "A data game built solely on Javascript with D3.js",
    tags: "Fullstack · Mobile dev",
  },
  {
    name: "Emotion Diary",
    color: "#ad5050",
    link: "food-stories.com",
    years: ["2018"],
    description:
      "A cross-platform mobile app which keeps track of users’ emotions everyday, built with React Native and Firebase.",
    tags: "Fullstack · Mobile dev",
  },
]

export default PageTwo
