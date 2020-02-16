import React from "react"

import "./PageIndicator.css"
import { NAV_NAMES_ORDER } from "./NavBar"
import Clickable from "./Clickable"

function PageIndicator({ pageVisible, switchPage }) {
  const clickHandler = pageName => {
    if (pageName !== pageVisible) switchPage(pageName)
  }

  return (
    <div className="page-numbers">
      {NAV_NAMES_ORDER.map((pageName, index) => (
        <Clickable key={pageName}>
          <h5
            style={
              pageVisible === pageName
                ? { color: "#9e5d24", fontSize: "40rem" }
                : null
            }
            onClick={() => clickHandler(pageName)}
          >{`0${index + 1}`}</h5>
        </Clickable>
      ))}
    </div>
  )
}

export default PageIndicator
