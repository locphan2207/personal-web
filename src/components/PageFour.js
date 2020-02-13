import React, { useEffect } from "react"

import "./PageFour.css"
import { useOnCloseWatcher } from "helpers/animationHelpers"

export const PAGE_FOUR_WHEEL_RANGE = [0, 0]

function PageFour({ isClosing, setClosingPage, wheelTrack }) {
  const onOpen = () => {}

  const onClose = () => {}
  useOnCloseWatcher(isClosing, setClosingPage, onClose)

  useEffect(() => {
    onOpen()
  }, [])

  return (
    <div className="page-four">
      <p>I'm excited to connect!</p>
      <div className="links">
        {Object.keys(LINKS).map(key => (
          <a key={key} href={LINKS[key].link} target="_blank">
            {LINKS[key].text}
          </a>
        ))}
      </div>
    </div>
  )
}

export default PageFour

const LINKS = {
  resume: {
    text: "Resume",
    link:
      "https://drive.google.com/file/d/1H_1wwGCeihMXe8bFbX51B36xL42ZrC45/view?usp=sharing",
  },
  email: { text: "Email", link: "mailto:locphan2207@gmail.com" },
  linkedin: {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/tanloc-phan/",
  },
  github: { text: "GitHub", link: "https://github.com/locphan2207" },
}
