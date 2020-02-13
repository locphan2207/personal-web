import React, { useEffect, useState } from "react"

import "./PageThree.css"
import StrokeOutlineText from "./StrokeOutlineText"
import { useOnCloseWatcher } from "helpers/animationHelpers"

export const PAGE_THREE_WHEEL_RANGE = [0, 5]

function PageThree({ isClosing, setClosingPage }) {
  const [shouldShowStrokeText, setShouldShowStrokeText] = useState(true)
  const [selected, setSelected] = useState(SKILLS.languages[0])

  const onClose = () => {}
  useOnCloseWatcher(isClosing, setClosingPage, onClose)

  useEffect(() => {
    setShouldShowStrokeText(false)
    setTimeout(() => setShouldShowStrokeText(true), 100)
  }, [selected])

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
          <p
            key={skill}
            onClick={() => setSelected(skill)}
            style={selected === skill ? { color: "#f2f2f2" } : null}
          >
            {skill}
          </p>
        ))}
      </div>
      <div className="group-name">
        <p>{groupName}</p>
      </div>
    </div>
  )
}

export default PageThree

const SKILLS = {
  languages: ["JavaScript", "Python", "CSS3", "HTML5", "SQL", "Ruby"],
  frontend: ["React", "React Native", "Redux", "Redux Saga", "jQuery"],
  tools: ["AWS", "Git"],
  backend: ["Flask", "Rails", "Django", "Postgresql", "MongoDB"],
}
