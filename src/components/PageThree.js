import React, { useEffect } from "react"

import "./PageThree.css"
import { useOnCloseWatcher } from "helpers/animationHelpers"

function PageThree({ isClosing, setClosingPage }) {
  const onOpen = () => {}

  const onClose = () => {}
  useOnCloseWatcher(isClosing, setClosingPage, onClose)

  useEffect(() => {
    onOpen()
  }, [])

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
          />
        ))}
      </div>
    </div>
  )
}

const SkillGroup = ({ groupName, skills }) => {
  return (
    <div className="skill-group">
      <div className="skill-column">
        {skills.map(skill => (
          <p key={skill}>{skill}</p>
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
