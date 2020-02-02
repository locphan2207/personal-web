import React, { useState } from "react"
import "./App.css"
import PageOne from "./PageOne"
import PageTwo from "./PageTwo"

// TODO:
// - CREATE A HELPER TO GENERATE KEYFRAMES BASED ON SPRING CONFIG

function App() {
  const [pageTwoVisible, setPageTwoVisible] = useState(false)
  const [hoverProjectIdx, setHoverProjectIdx] = useState(0)

  const onOpen = () => {
    setPageTwoVisible(true)
  }

  return (
    <div className="App">
      <PageOne />

      {pageTwoVisible && (
        <PageTwo
          setPageTwoVisible={setPageTwoVisible}
          hoverProjectIdx={hoverProjectIdx}
          setHoverProjectIdx={setHoverProjectIdx}
        />
      )}
    </div>
  )
}

export default App
