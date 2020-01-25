import React, { useState, useEffect, useLayoutEffect } from "react"
import "./PageTwo.css"

const PANE_OPEN_DURATION = 1000
const TITLE_SHOW_DELAY = PANE_OPEN_DURATION / 3
const TITLE_SHOW_DURATION = PANE_OPEN_DURATION / 2

function PageTwo({ setPageTwoVisible, hoverProjectIdx, setHoverProjectIdx }) {
  const [isCloseHover, setCloseHover] = useState(false)

  const onProjectHover = index => {
    if (index !== hoverProjectIdx) {
      const leftPane = document.getElementsByClassName("left-pane-body")[0]
      leftPane.setAttribute("class", "left-pane-body hidden")

      setTimeout(() => setHoverProjectIdx(index), 100)

      const number = document.getElementsByClassName("project-number")[0]
      setTimeout(() => {
        number.setAttribute("class", "project-number slide-right")
      }, 100)
      setTimeout(() => {
        leftPane.setAttribute("class", "left-pane-body")
      }, 200)
      setTimeout(() => number.setAttribute("class", "project-number", 50))
    }
  }

  const onCloseHover = () => {
    setCloseHover(true)
  }

  const onCloseExit = () => {
    setCloseHover(false)
  }

  const onClose = () => {
    const title = document.getElementsByClassName("projects-title")[0]
    title.setAttribute("class", title.getAttribute("class") + " project-hidden")

    // Animate project titles
    // Start from the top down
    const projects = document.getElementsByClassName("project")
    for (let i = 0; i < PROJECTS.length; i++) {
      const project = projects[i]
      setTimeout(() => {
        const currClassName = project.getAttribute("class")
        project.setAttribute("class", currClassName + " project-hidden")
      }, TITLE_SHOW_DELAY + (TITLE_SHOW_DURATION / projects.length) * i)
    }

    const panes = document.getElementsByClassName("pane")
    setTimeout(() => {
      for (const pane of panes) {
        const currClassName = pane.getAttribute("class")
        pane.setAttribute("class", currClassName + " pane-hidden")
      }
    }, TITLE_SHOW_DURATION)

    setTimeout(
      () => setPageTwoVisible(false),
      TITLE_SHOW_DURATION + PANE_OPEN_DURATION
    )
  }

  useEffect(() => {
    // Animate panes
    const panes = document.getElementsByClassName("pane")
    for (const pane of panes) {
      const currClassName = pane.getAttribute("class")
      pane.setAttribute("class", currClassName.replace("pane-hidden", ""))
    }

    const title = document.getElementsByClassName("projects-title")[0]
    setTimeout(() => {
      title.setAttribute(
        "class",
        title.getAttribute("class").replace("project-hidden", "")
      )
    }, PANE_OPEN_DURATION)

    // Animate project titles
    // Starts 0.5s after pane animation
    // Start from the bottom up
    const projects = document.getElementsByClassName("project")
    for (let i = projects.length - 1; i >= 0; i--) {
      const project = projects[i]
      setTimeout(() => {
        const currClassName = project.getAttribute("class")
        project.setAttribute(
          "class",
          currClassName.replace("project-hidden", "")
        )
      }, TITLE_SHOW_DELAY + (TITLE_SHOW_DURATION / projects.length) * (projects.length - i))
    }
  }, [])

  return (
    <>
      <div className={"page page-two"}>
        <div
          className={"pane left-pane pane-hidden"}
          style={
            hoverProjectIdx >= 0
              ? {
                  backgroundColor: PROJECTS[hoverProjectIdx].color,
                }
              : null
          }
        >
          <div className={"left-pane-body"}>
            <p className={"project-number"}>{`${hoverProjectIdx + 1 < 10 &&
              "0"}${hoverProjectIdx + 1}`}</p>
            <div className={"row project-body"}>
              <div className={"project-desc-container"}>
                <p className={"project-header"}>
                  {PROJECTS[hoverProjectIdx].name}
                </p>
                <p className={"project-description"}>
                  {PROJECTS[hoverProjectIdx].description}
                </p>
                <div className={"project-point-container"}>
                  {PROJECTS[hoverProjectIdx].bulletPoints.map(point => (
                    <p className={"project-point"} key={point}>
                      {point}
                    </p>
                  ))}
                </div>
              </div>
              <div className={"project-year-container"}>
                {PROJECTS[hoverProjectIdx].years.map((year, idx) => (
                  <>
                    {!!idx && <div className={"project-year-dash"} />}
                    <p className={"project-year"} key={year}>
                      {year}
                    </p>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={"pane mid-pane pane-hidden"}></div>
        <div className={"pane right-pane pane-hidden"}>
          <p
            onClick={onClose}
            className={"close"}
            onMouseOver={onCloseHover}
            onMouseLeave={onCloseExit}
            style={
              isCloseHover
                ? { color: "#ffffffe5" }
                : hoverProjectIdx >= 0
                ? { color: PROJECTS[hoverProjectIdx].color }
                : null
            }
          >
            X
          </p>
          <p className={"projects-title project-hidden"}>{"PROJECTS"}</p>
          {PROJECTS.map((project, idx) => (
            <div
              key={project.name}
              className={"project-container"}
              onMouseOver={() => onProjectHover(idx)}
              style={
                idx === hoverProjectIdx
                  ? { backgroundColor: "#aeafaf41" }
                  : null
              }
            >
              <div
                className={"dash"}
                style={
                  idx === hoverProjectIdx
                    ? { backgroundColor: PROJECTS[idx].color, width: "3%" }
                    : null
                }
              ></div>
              <p
                className={"project project-hidden"}
                style={
                  idx === hoverProjectIdx
                    ? { color: PROJECTS[idx].color }
                    : null
                }
              >
                {project.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const PROJECTS = [
  {
    name: "SBK",
    color: "#04794e",
    link: "getsbk.com",
    years: ["2018", "2020"],
    description:
      "Smarkets is a betting exchange that offers the best odds with lowest commision. At Smarkets, I contributed directly to building a competitive online sportsbook application from its early stages to having thousands of users.",
    bulletPoints: [
      "Use React Native to build a cross-platform mobile application to deliver key features with top-notch animations for a perfect UI/UX.",
      "Use Django to implement necessary database models and corresponding API endpoints for the app.",
      "Setup a backend app using Flask for the geofence microservice.",
      "Maintain the good performance by writing efficient functions and components.",
      "Write unit and automation tests on all platforms to avoid crashes. Apply fast bug fixing based on the crashlytic report.",
    ],
  },
  {
    name: "Food Stories",
    color: "#4184a0",
    link: "food-stories.com",
    years: ["2018"],
    description:
      "A CRUD full stack web to share cooking recipes, built with Ruby on Rails and React/Redux.",
    bulletPoints: [
      "Implemented user authentication using BCrypt to create login session without storing actual passwords.",
      "Designed project as a single-page web app to only re-render components when making API calls to the backend.",
      "Launched AWS as a cloud image storage and Heroku for web hosting.",
      "Utilized JQuery and vanilla JavaScript to improve interactive UX/UI.",
    ],
  },
  {
    name: "Data Block",
    color: "#3C887E",
    link: "food-stories.com",
    years: ["2018"],
    description: "A data game built solely on Javascript with D3.js",
    bulletPoints: [
      "Utilized D3.js to create falling circles with sizes based on actual data numbers.",
      "Applied Physics Laws to make collision, gravity, spring force and built methods for vector math and force calculation.",
      "Implemented basic game knowledge with frame loop, position update, player control input, sound, instruction and score.",
      "Designed a behavior for the in-game character to have it always move into the closest falling circle.",
    ],
  },
  {
    name: "Emotion Diary",
    color: "#ad5050",
    link: "food-stories.com",
    years: ["2018"],
    description:
      "A cross-platform mobile app which keeps track of users’ emotions everyday, built with React Native and Firebase.",
    bulletPoints: [
      "Implemented authentication and real-time database using Google’s Firebase cloud services.",
      "Utilized React Native components to design a friendly and smooth UI/UX.",
      "Implemented data visualization by creating interactive graphs with transitioning effects and touchable tooltips.",
    ],
  },
]

export default PageTwo
