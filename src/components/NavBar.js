import React from "react"
import "./NavBar.css"

export const PAGE_NAMES = {
  HOME_PAGE: "HOME",
  WORK_PAGE: "WORK",
  SKILLS_PAGE: "SKILLS",
  ABOUT_PAGE: "ABOUT",
}

function NavBar({ pageVisible, switchPage }) {
  return (
    <div className="nav-bar">
      {Object.values(PAGE_NAMES).map(pageName => (
        <h5
          onClick={() => switchPage(pageName)}
          style={
            pageVisible === pageName
              ? { borderBottom: "#0c1d4a 2px solid" }
              : null
          }
        >
          {pageName}
        </h5>
      ))}
    </div>
  )
}

export default NavBar
