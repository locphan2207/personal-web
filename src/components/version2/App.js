import React from "react"
import "./App.css"
import Link from "./Link"

function App() {
  return (
    <>
      <div className="intro">
        <div className="name-greet">
          <h1 className="name">Tan Loc Phan</h1>
          <p className="greeting">
            Hi there,
            <br />
            I'm a <span className="color-switch">software engineer</span> who
            loves building functional, beautiful and interactive web
            applications.
          </p>
          <Link text="Learn more" />
        </div>
        <div className="intro-lottie">
          <lottie-player
            src="https://assets6.lottiefiles.com/private_files/lf30_WdTEui.json"
            background="transparent"
            speed="0.5"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
      <div className="expertise">
        <div className="expertise-text">
          <h3>Frontend</h3>
          <p>
            I love to see beautiful designs come to life by building it with
            cutting-edge technologies. When it comes to frontend, I tend to add
            dynamic animations to bring characteristics to the website, but I
            measure them to make sure they don't ruin the fast speed. I do make
            sure web apps are responsive across all screens, so whether on
            mobile or desktop, the website can still be functional, easy to use
            and pretty.
          </p>
          <div className="expertise-lottie" style={{ width: "70%" }}>
            <lottie-player
              src="https://assets4.lottiefiles.com/datafiles/BaVRvn779cBHwSV/data.json"
              background="transparent"
              speed="1"
              // loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div className="expertise-text">
          <h3>Backend</h3>
          <p>
            I love to see beautiful designs come to life by building it with
            cutting-edge technologies. When it comes to frontend, I tend to add
            dynamic animations to bring characteristics to the website, but I
            measure them to make sure they don't ruin the fast speed. I do make
            sure web apps are responsive across all screens, so whether on
            mobile or desktop, the website can still be functional, easy to use
            and pretty.
          </p>
          <div className="expertise-lottie" style={{ width: "70%" }}>
            <lottie-player
              src="https://assets1.lottiefiles.com/private_files/lf30_CkJZhd.json"
              background="transparent"
              speed="0.1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div className="expertise-text">
          <h3>CS Fundamental</h3>
          <p>
            I love to see beautiful designs come to life by building it with
            cutting-edge technologies. When it comes to frontend, I tend to add
            dynamic animations to bring characteristics to the website, but I
            measure them to make sure they don't ruin the fast speed. I do make
            sure web apps are responsive across all screens, so whether on
            mobile or desktop, the website can still be functional, easy to use
            and pretty.
          </p>
          <div className="expertise-lottie">
            <lottie-player
              src="https://assets1.lottiefiles.com/packages/lf20_z0zkyp.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
