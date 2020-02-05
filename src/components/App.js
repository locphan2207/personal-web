import React, { useState } from "react"
import "./App.css"
import NavBar from "./NavBar"
import PageOne from "./PageOne"
import PageTwo from "./PageTwo"

// TODO:
// - CREATE A HELPER TO GENERATE KEYFRAMES BASED ON SPRING CONFIG

function App() {
  const [pageVisible, setPageVisible] = useState("HOME")
  const [hoverProjectIdx, setHoverProjectIdx] = useState(0)

  const onWorkOpen = () => {
    setPageVisible("WORK")
  }

  return (
    <div className="App">
      <NavBar onWorkOpen={onWorkOpen} />
      {pageVisible === "HOME" && <PageOne />}

      {pageVisible === "WORK" && (
        <PageTwo
          setPageVisible={setPageVisible}
          hoverProjectIdx={hoverProjectIdx}
          setHoverProjectIdx={setHoverProjectIdx}
        />
      )}
    </div>
  )
}

export default App
