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

const getLeftSidePage = pageName =>
  NAV_NAMES_ORDER[NAV_NAMES_ORDER.findIndex(name => name === pageName) - 1]

const isNewPageOnRightSide = (newPage, previousPage) => {
  const newIdx = NAV_NAMES_ORDER.findIndex(name => name === newPage)
  const previousIdx = NAV_NAMES_ORDER.findIndex(name => name === previousPage)
  console.log(newPage, previousPage, newIdx, previousIdx)
  return newIdx > previousIdx
}

const getExpandedWidthFromCurrentPage = (newPage, previousPage, itemWidths) => {
  if (!previousPage) return itemWidths[newPage]
  let width = 0
  for (const page of NAV_NAMES_ORDER) {
    if (page === newPage || page === previousPage) {
      if (width) {
        width += itemWidths[page]
        return width
      }
      width += itemWidths[page]
    } else if (width) {
      width += itemWidths[page]
    }
  }
  return 0
}

function NavBar({ pageVisible, switchPage }) {
  const itemWidths = useRef({})
  const previousPage = useRef(null)
  const [bottomBarStyles, setBottomBarStyles] = useState({})

  const getLeftOffset = pageName => {
    let leftOffset = []
    for (const currName of NAV_NAMES_ORDER) {
      if (pageName !== currName) {
        leftOffset.push(`${itemWidths.current[currName]}px`, "20rem")
      } else {
        return leftOffset.length ? `calc(${leftOffset.join(" + ")})` : "0px"
      }
    }
  }

  useEffect(() => {
    console.log(
      previousPage.current,
      pageVisible,
      isNewPageOnRightSide(pageVisible, previousPage.current)
    )
    const newWidth = getExpandedWidthFromCurrentPage(
      pageVisible,
      previousPage.current,
      itemWidths.current
    )
    setBottomBarStyles({
      width: newWidth,
      transform: isNewPageOnRightSide(pageVisible, previousPage.current)
        ? `translateX(${getLeftOffset(previousPage.current)})`
        : `translateX(${getLeftOffset(pageVisible)})`,
    })

    setTimeout(
      () =>
        setBottomBarStyles({
          width: itemWidths.current[pageVisible],
          transform: `translateX(${getLeftOffset(pageVisible)})`,
        }),
      100
    )
    previousPage.current = pageVisible
  }, [pageVisible])

  console.log(bottomBarStyles)

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
      {/* {!!shouldRenderBottomBar && ( */}
      <div className={"bottom-bar"} style={bottomBarStyles} />
      {/* )} */}
    </div>
  )
}

export default NavBar
