import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
// import App from "./components/version1/App"
import App from "./components/version2/App"
import * as serviceWorker from "./serviceWorker"

setTimeout(() => {
  document.getElementById("loading-screen").style.display = "none"
  ReactDOM.render(<App />, document.getElementById("root"))
}, 1500)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
