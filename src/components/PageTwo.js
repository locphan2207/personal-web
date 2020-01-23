import React, { useState, useEffect } from "react"
import "./PageTwo.css"

const PANE_OPEN_DURATION = 1000
const TITLE_SHOW_DELAY = PANE_OPEN_DURATION / 3
const TITLE_SHOW_DURATION = PANE_OPEN_DURATION / 2

function PageTwo({ setPageTwoVisible, hoverProjectIdx, setHoverProjectIdx }) {
  const [isCloseHover, setCloseHover] = useState(false)

  const onProjectHover = index => {
    setHoverProjectIdx(index)
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
          <p>{`${hoverProjectIdx + 1 < 10 && "0"} ${hoverProjectIdx + 1}`}</p>
          <p>{PROJECTS[hoverProjectIdx].name}</p>
          <p>{PROJECTS[hoverProjectIdx].year}</p>
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
          <p className={"projects-title project-hidden"}>PROJECTS</p>
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
                    ? { backgroundColor: PROJECTS[idx].color }
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
  { name: "SBK", color: "green", link: "getsbk.com", year: "2018-2020" },
  {
    name: "Food Stories",
    color: "yellow",
    link: "food-stories.com",
    year: "2018",
  },
  { name: "Data Block", color: "cyan", link: "food-stories.com", year: "2018" },
  {
    name: "Emotion Diary",
    color: "#65ac86",
    link: "food-stories.com",
    year: "2018",
  },
]

export default PageTwo
