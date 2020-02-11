import React, { useState, useEffect, useRef } from "react"
import "./PageTwo.css"
import { useOnCloseWatcher } from "helpers/animationHelpers"
import { ReactComponent as Triangle } from "assets/triangle.svg"

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

  return (
    <div className={"page-two"}>
      <div className={"project-titles"}>
        {PROJECTS.map((project, idx) => (
          <p
            key={project.name}
            onMouseDown={() => onProjectSelect(idx)}
            className={"project-title hidden-below"}
            style={idx === selectedProjectIdx ? { color: "#EEB669" } : null}
          >
            {project.name}
          </p>
        ))}
      </div>

      <div className={"desc-body"}>
        {isDescriptionVisible && (
          <>
            <div className={"project-year-container"}>
              {PROJECTS[selectedProjectIdx].years.map((year, idx) => (
                <div key={idx}>
                  <div className={"year-wrapper"}>
                    <p
                      className={`project-year ${
                        idx % 2 === 0 ? "even" : "odd"
                      }`}
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
            <a
              className="more-container"
              href={PROJECTS[selectedProjectIdx].link}
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
            >
              <p>more</p>
              <Triangle className="triangle" />
            </a>
          </>
        )}
      </div>
    </div>
  )
}

const PROJECTS = [
  {
    name: "SBK",
    color: "#187b57",
    link: "https://getsbk.com",
    years: ["2018", "2020"],
    description: (
      <p>
        Contributed directly to building a cross-platform mobile application
        using <span>React Native</span> from the early stages to the app store
        launch with the increase in user numbers from <span>0 to 9000</span>
      </p>
    ),
    tags: "Fullstack · Mobile dev",
  },
  {
    name: "Food Stories",
    color: "#4184a0",
    link: "http://food-stories.herokuapp.com/#/",
    years: ["2018"],
    description: (
      <p>
        Food Stories is a full-stack web application that is inspired by Kitchen
        Stories. The project is built entirely on <span>Ruby on Rails</span>{" "}
        backend and with <span>React-Redux</span> frontend
      </p>
    ),
    tags: "Fullstack · Web app",
  },
  {
    name: "Data Block",
    color: "#3C887E",
    link: "https://locphan2207.github.io/Data-block/",
    years: ["2018"],
    description: (
      <p>
        A cross-platform mobile app to keep track of users' emotions, built with{" "}
        <span>React Native</span> and <span>Firebase</span>
      </p>
    ),
    tags: "Fullstack · Mobile dev",
  },
  {
    name: "Emotion Diary",
    color: "#ad5050",
    link: "https://github.com/locphan2207/Emotion-Diary",
    years: ["2018"],
    description: (
      <p>
        A game built with <span>JavaScript</span>. Players protect a character
        from being hit by big blocks of data falling down from the sky by
        controlling the shield using the mouse
      </p>
    ),
    tags: "Frontend · Web game",
  },
]

export default PageTwo
