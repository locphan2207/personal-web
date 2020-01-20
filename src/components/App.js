import React, { useState, useEffect } from "react"
import "./App.css"
import { ReactComponent as DownArrow } from "../assets/down-arrow.svg"

function App() {
  const [pageTwoVisible, setPageTwoVisible] = useState(false)
  const [hoverProjectIdx, setHoverProjectIdx] = useState(0)

  const onOpen = () => {
    setPageTwoVisible(true)
  }

  const onProjectHover = index => {
    setHoverProjectIdx(index)
  }

  const onClose = () => {
    const panes = document.getElementsByClassName("pane")
    for (const pane of panes) {
      const currClassName = pane.getAttribute("class")
      pane.setAttribute("class", currClassName + " pane-hidden")
    }
    setTimeout(() => setPageTwoVisible(false), 1000)
  }

  useEffect(() => {
    if (pageTwoVisible) {
      const panes = document.getElementsByClassName("pane")
      for (const pane of panes) {
        const currClassName = pane.getAttribute("class")
        pane.setAttribute("class", currClassName.replace("pane-hidden", ""))
      }
    }
  }, [pageTwoVisible])

  return (
    <div className="App">
      <div className="page page-one">
        <div>
          <div className="avatar" />
          <div className="intro">
            <p>Hello,</p>
            <p>
              I'm <span>Tan Loc</span>,
            </p>
            <p>a software engineer.</p>
          </div>
        </div>
        <DownArrow className="down-arrow" onClick={onOpen} />
      </div>

      {pageTwoVisible && (
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
          ></div>
          <div className={"pane mid-pane pane-hidden"}></div>
          <div className={"pane right-pane pane-hidden"}>
            <p onClick={onClose} className={"close"}>
              X
            </p>
            <p className={"projects-title"}>PROJECTS</p>
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
                  className={"project"}
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
      )}
    </div>
  )
}

const PROJECTS = [
  { name: "SBK", color: "green", link: "getsbk.com" },
  { name: "Food Stories", color: "yellow", link: "food-stories.com" },
  { name: "Data Block", color: "cyan", link: "food-stories.com" },
  { name: "Emotion Diary", color: "#65ac86", link: "food-stories.com" },
]

export default App
