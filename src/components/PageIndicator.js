import React from "react"

import "./PageIndicator.css"
import { NAV_NAMES_ORDER } from "./NavBar"

function PageIndicator({ pageVisible }) {
  return (
    <div className="page-numbers">
      {NAV_NAMES_ORDER.map((pageName, index) => (
        <h5
          key={pageName}
          style={
            pageVisible === pageName
              ? { color: "#9e5d24", fontSize: "40rem" }
              : null
          }
        >{`0${index + 1}`}</h5>
      ))}
    </div>
  )
}

export default PageIndicator
