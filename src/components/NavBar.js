import React, { useRef, useState, useEffect } from "react"
import "./NavBar.css"

export const PAGE_NAMES = {
  HOME_PAGE: "HOME",
  WORK_PAGE: "WORK",
  SKILLS_PAGE: "SKILLS",
  ABOUT_PAGE: "ABOUT",
}

const NAV_NAMES_ORDER = [
  PAGE_NAMES.HOME_PAGE,
  PAGE_NAMES.WORK_PAGE,
  PAGE_NAMES.SKILLS_PAGE,
  PAGE_NAMES.ABOUT_PAGE,
]

function NavBar({ pageVisible, switchPage }) {
  const itemWidths = useRef({})
  const [shouldRenderBottomBar, setShouldRenderBottomBar] = useState(false)

  const getLeftOffset = pageName => {
    let leftOffset = []
    for (const currName of NAV_NAMES_ORDER) {
      if (pageName !== currName) {
        leftOffset.push(`${itemWidths.current[currName]}px`, "20rem")
      } else {
        return leftOffset.length ? `calc(${leftOffset.join(" + ")})` : 0
      }
    }
  }

  // Only render bottom bar after did mount (after first render to get the widths)
  useEffect(() => {
    setShouldRenderBottomBar(true)
  }, [])

  return (
    <div className="nav-bar">
      <div className="nav-names">
        {NAV_NAMES_ORDER.map(pageName => (
          <h5
            ref={ref => {
              if (ref) itemWidths.current[pageName] = ref.offsetWidth
            }}
            key={pageName}
            onClick={() => switchPage(pageName)}
          >
            {pageName}
          </h5>
        ))}
      </div>
      {!!setShouldRenderBottomBar && (
        <div
          className={"bottom-bar"}
          style={{
            width: itemWidths.current[pageVisible],
            marginLeft: getLeftOffset(pageVisible),
          }}
        />
      )}
    </div>
  )
}

export default NavBar
