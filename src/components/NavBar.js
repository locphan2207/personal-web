import React, { useRef, useState, useEffect } from "react"
import "./NavBar.css"

function NavBar({ pageVisible, switchPage }) {
  const itemWidths = useRef({})
  const previousPage = useRef(null)
  const [bottomBarStyles, setBottomBarStyles] = useState({})

  const clickHandler = pageName => {
    if (pageName !== pageVisible) switchPage(pageName)
  }

  // Animation when switching page
  useEffect(() => {
    // Expand the width to the side (right of left from previous) of the new page
    const expandedWidth = getExpandedWidthFromCurrentPage(
      pageVisible,
      previousPage.current,
      itemWidths.current
    )
    setBottomBarStyles({
      width: expandedWidth,
      transform: isNewPageOnRightSide(pageVisible, previousPage.current)
        ? `translateX(${getLeftOffset(
            previousPage.current,
            itemWidths.current
          )})`
        : `translateX(${getLeftOffset(pageVisible, itemWidths.current)})`,
    })

    // Then shrink it to side (right of left from previous) of the new page
    setTimeout(
      () =>
        setBottomBarStyles({
          width: itemWidths.current[pageVisible],
          transform: `translateX(${getLeftOffset(
            pageVisible,
            itemWidths.current
          )})`,
        }),
      100
    )
    previousPage.current = pageVisible
  }, [pageVisible])

  return (
    <div className="nav-bar">
      <div className="nav-names">
        {NAV_NAMES_ORDER.map(pageName => (
          <h5
            ref={ref => {
              if (ref) itemWidths.current[pageName] = ref.offsetWidth
            }}
            key={pageName}
            onClick={() => clickHandler(pageName)}
          >
            {pageName}
          </h5>
        ))}
      </div>
      <div className={"bottom-bar"} style={bottomBarStyles} />
    </div>
  )
}

export const PAGE_NAMES = {
  HOME_PAGE: "HOME",
  WORK_PAGE: "WORK",
  SKILLS_PAGE: "SKILLS",
  ABOUT_PAGE: "ABOUT",
}

export const NAV_NAMES_ORDER = [
  PAGE_NAMES.HOME_PAGE,
  PAGE_NAMES.WORK_PAGE,
  PAGE_NAMES.SKILLS_PAGE,
  PAGE_NAMES.ABOUT_PAGE,
]

const isNewPageOnRightSide = (newPage, previousPage) => {
  const newIdx = NAV_NAMES_ORDER.findIndex(name => name === newPage)
  const previousIdx = NAV_NAMES_ORDER.findIndex(name => name === previousPage)
  return newIdx > previousIdx
}

const getExpandedWidthFromCurrentPage = (newPage, previousPage, itemWidths) => {
  if (!previousPage) return itemWidths[newPage]
  let width = []
  for (const page of NAV_NAMES_ORDER) {
    if (page === newPage || page === previousPage) {
      if (width.length) {
        width.push(`${itemWidths[page]}px`)
        return width.length > 0 ? `calc(${width.join(" + ")})` : width[0]
      }
      width.push(`${itemWidths[page]}px`, "20rem")
    } else if (width.length) {
      width.push(`${itemWidths[page]}px`, "20rem")
    }
  }
  return `calc(${width.join(" + ")})`
}

const getLeftOffset = (pageName, itemWidths) => {
  let leftOffset = []
  for (const currName of NAV_NAMES_ORDER) {
    if (pageName !== currName) {
      leftOffset.push(`${itemWidths[currName]}px`, "20rem")
    } else {
      return leftOffset.length ? `calc(${leftOffset.join(" + ")})` : "0px"
    }
  }
}

export default NavBar
