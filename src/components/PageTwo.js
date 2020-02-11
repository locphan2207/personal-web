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
      <div className={"left"}>
        {isDescriptionVisible && (
          <div className={"desc-body"}>
            <p className={"project-number"}>{`${selectedProjectIdx + 1 < 10 &&
              "0"}${selectedProjectIdx + 1}`}</p>
            <div className={"row project-body"}>
              <div className={"project-desc-container"}>
                <div className={"project-header"}>
                  {PROJECTS[selectedProjectIdx].name
                    .split("")
                    .map((char, idx) => {
                      if (char === " ")
                        return <span key={idx}>&nbsp;&nbsp;</span>
                      return (
                        <span
                          key={idx}
                          className={"project-header-char"}
                          style={{
                            animationDelay: `${TITLE_LEFT_PANE_DELAY +
                              idx * 0.03}s`,
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
            </div>
          </div>
        )}
      </div>
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
    bulletPoints: [
      "Use React Native to build a cross-platform mobile application to deliver key features with top-notch animations for a perfect UI/UX.",
      "Use Django to implement necessary database models and corresponding API endpoints for the app.",
      "Setup a backend app using Flask for the geofence microservice.",
      "Maintain the good performance by writing efficient functions and components. Write unit and automation tests on all platforms to avoid crashes. Apply fast bug fixing based on the crashlytic report.",
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
