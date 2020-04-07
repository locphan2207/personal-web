import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
// import App from "./components/version1/App"
import App from "./components/version2/App"
import * as serviceWorker from "./serviceWorker"

const showLoadingTime = 1000
setTimeout(() => {
  const loadingScreen = document.getElementById("loading-screen")
  loadingScreen.style.opacity = "0"
  loadingScreen.style.zIndex = "-100"
  ReactDOM.render(<App />, document.getElementById("root"))
}, showLoadingTime)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
