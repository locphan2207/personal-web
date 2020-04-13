import React, { useEffect, useRef, useState } from "react"
import { useSpring, animated, config } from "react-spring"

import "./Contact.css"

import BigSection from "./shared/BigSection"
import Link from "./shared/Link"

import { makeObserver } from "helpers/observer"

function Contact() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  const [props, set] = useSpring(() => ({
    opacity: 0,
  }))

  useEffect(() => {
    makeObserver(ref.current, () => setVisible(true))
  }, [])

  useEffect(() => {
    if (visible) set({ opacity: 1 })
  }, [visible, set])

  return (
    <BigSection className="contact">
      <animated.p className="contact-greet" ref={ref} style={props}>
        I'm happy to connect!
      </animated.p>
      <div className="contact-links">
        {LINKS.map((item, idx) => (
          <Link
            hidden={!visible}
            key={item.text}
            text={item.text}
            link={item.link}
            fontSize={20}
            delay={idx * 200}
          />
        ))}
      </div>
    </BigSection>
  )
}

export default Contact

const LINKS = [
  {
    text: "Resume",
    link:
      "https://drive.google.com/file/d/1H_1wwGCeihMXe8bFbX51B36xL42ZrC45/view?usp=sharing",
  },
  { text: "Email", link: "mailto:locphan2207@gmail.com" },
  {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/tanloc-phan/",
  },
  { text: "GitHub", link: "https://github.com/locphan2207" },
]
