import React, { useEffect, useState } from "react"

import "./PageThree.css"
import Clickable from "./Clickable"
import StrokeOutlineText from "./StrokeOutlineText"
import { useOnCloseWatcher } from "helpers/animationHelpers"

const SKILLS = {
  languages: ["JavaScript", "Python", "CSS3", "HTML5", "SQL", "Ruby"],
  frontend: ["React", "React Native", "Redux", "Redux Saga", "jQuery"],
  tools: ["AWS", "Git"],
  backend: ["Flask", "Rails", "Django", "Postgresql", "MongoDB"],
}
const SKILLS_LIST = Object.values(SKILLS).reduce((i, e) => [...i, ...e], [])
export const PAGE_THREE_WHEEL_RANGE = [0, SKILLS_LIST.length - 1]

function PageThree({ isClosing, setClosingPage, wheelTrack, setWheelTrack }) {
  const [shouldShowStrokeText, setShouldShowStrokeText] = useState(true)
  const [selected, setSelected] = useState(SKILLS.languages[0])

  const onClose = () => {}
  useOnCloseWatcher(isClosing, setClosingPage, onClose)

  useEffect(() => {
    // Update wheelTrack based on the current selected
    if (selected !== SKILLS_LIST[wheelTrack]) {
      setWheelTrack(SKILLS_LIST.findIndex(item => item === selected))
    }
    setShouldShowStrokeText(false)
    setTimeout(() => setShouldShowStrokeText(true), 100)
  }, [selected, setWheelTrack, wheelTrack])

  useEffect(() => {
    if (wheelTrack >= 0 && wheelTrack <= 18)
      setSelected(SKILLS_LIST[wheelTrack])
  }, [wheelTrack])

  return (
    <div className="page-three">
      <div className="skill-group-container">
        {Object.keys(SKILLS).map((groupKey, idx) => (
          <SkillGroup
            key={groupKey}
            groupName={groupKey}
            skills={SKILLS[groupKey]}
            style={{
              gridColumn: `${idx + 1} / span 1`,
              gridRow: `${(idx % 2) + 1} / span 1`,
            }}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
      {shouldShowStrokeText && (
        <StrokeOutlineText className="skill-svg-container" text={selected} />
      )}
    </div>
  )
}

const SkillGroup = ({ groupName, skills, setSelected, selected }) => {
  return (
    <div className="skill-group">
      <div className="skill-column">
        {skills.map(skill => (
          <Clickable key={skill}>
            <p
              onClick={() => setSelected(skill)}
              style={selected === skill ? { color: "#f2f2f2" } : null}
            >
              {skill}
            </p>
          </Clickable>
        ))}
      </div>
      <div className="vertical-bar" />
      <div className="group-name">
        <p>{groupName}</p>
      </div>
    </div>
  )
}

export default PageThree
