import React, { useRef, useState, useEffect } from "react"
import "./NavBar.css"

function NavBar({ pageVisible, switchPage }) {
  const itemHeights = useRef({})
  const previousPage = useRef(null)
  const [bottomBarStyles, setBottomBarStyles] = useState({})

  const clickHandler = pageName => {
    if (pageName !== pageVisible) switchPage(pageName)
  }

  // Animation when switching page
  useEffect(() => {
    // Expand the height to the side (right of left from previous) of the new page
    const expandedHeight = getExpandedHeightFromCurrentPage(
      pageVisible,
      previousPage.current,
      itemHeights.current
    )
    setBottomBarStyles({
      height: expandedHeight,
      transform: isNewPageOnRightSide(pageVisible, previousPage.current)
        ? `translateY(${getTopOffset(
            previousPage.current,
            itemHeights.current
          )})`
        : `translateY(${getTopOffset(pageVisible, itemHeights.current)})`,
    })

    // Then shrink it to side (right of left from previous) of the new page
    setTimeout(
      () =>
        setBottomBarStyles({
          height: itemHeights.current[pageVisible],
          transform: `translateY(${getTopOffset(
            pageVisible,
            itemHeights.current
          )})`,
        }),
      300
    )
    previousPage.current = pageVisible
  }, [pageVisible])

  return (
    <div className="nav-bar">
      <div className={"left-bar"} style={bottomBarStyles} />
      <div className="nav-names">
        {NAV_NAMES_ORDER.map(pageName => (
          <h5
            ref={ref => {
              if (ref) itemHeights.current[pageName] = ref.offsetHeight
            }}
            key={pageName}
            onClick={() => clickHandler(pageName)}
          >
            {pageName}
          </h5>
        ))}
      </div>
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

const getExpandedHeightFromCurrentPage = (
  newPage,
  previousPage,
  itemHeights
) => {
  if (!previousPage) return itemHeights[newPage]
  let height = []
  for (const page of NAV_NAMES_ORDER) {
    if (page === newPage || page === previousPage) {
      if (height.length) {
        height.push(`${itemHeights[page]}px`)
        return height.length > 0 ? `calc(${height.join(" + ")})` : height[0]
      }
      height.push(`${itemHeights[page]}px`, "20rem")
    } else if (height.length) {
      height.push(`${itemHeights[page]}px`, "20rem")
    }
  }
  return `calc(${height.join(" + ")})`
}

const getTopOffset = (pageName, itemHeights) => {
  let topOffset = []
  for (const currName of NAV_NAMES_ORDER) {
    if (pageName !== currName) {
      topOffset.push(`${itemHeights[currName]}px`, "20rem")
    } else {
      return topOffset.length ? `calc(${topOffset.join(" + ")})` : "0px"
    }
  }
}

export default NavBar
