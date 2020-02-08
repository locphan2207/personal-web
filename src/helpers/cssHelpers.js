const BUBBLE_IDS = [
  "Ellipse_8",
  "Ellipse_9",
  "Ellipse_10",
  "Ellipse_11",
  "Ellipse_12",
  "Ellipse_13",
  "bubble-left",
  "bubble-right",
]

const insideParentheses = /\(([^()]*)\)/

export const addKeyFramesForBubbles = () => {
  const pageOneSS = _getPageOneStyleSheet()
  const elements = []
  BUBBLE_IDS.forEach(id => {
    const el = document.getElementById(id)
    if (el) elements.push(el)
  })
  for (const el of elements) {
    const transform = el.attributes.transform
    let currentXY = [0, 0]
    if (transform) {
      currentXY = transform.textContent.match(insideParentheses)[1].split(" ")
    }
    const nextXYStep1 = _randomPosition(currentXY)
    const nextXYStep2 = _randomPosition(nextXYStep1)
    const nextXYStep3 = _randomPosition(nextXYStep2)
    const nextXYStep4 = _randomPosition(nextXYStep3)
    pageOneSS.insertRule(`@keyframes float-bubble-${el.id} {
      from {
        transform: translate(${currentXY[0]}, ${currentXY[1]});
      }
      20% {
        transform: translate(${nextXYStep1[0]}px, ${nextXYStep1[1]}px);
      }
      40% {
        transform: translate(${nextXYStep2[0]}px, ${nextXYStep2[1]}px);
      }
      60% {
        transform: translate(${nextXYStep3[0]}px, ${nextXYStep3[1]}px);
      }
      80 {
        transform: translate(${nextXYStep4[0]}px, ${nextXYStep4[1]}px);
      }
      to {
        transform: translate(${currentXY[0]}, ${currentXY[1]});
      }
    }`)
    const radius = (el.r || el.rx).baseVal.value
    pageOneSS.insertRule(`#${el.id} {
      animation: ${_randomDuration(radius)}s float-bubble-${
      el.id
    } linear infinite;
    }`)
  }
}

const _getPageOneStyleSheet = () => {
  const styleSheetList = document.styleSheets
  for (const ss of styleSheetList) {
    if (ss.href && ss.href.includes("fonts.googleapis.com")) continue // skip crossed-domain styles (Chrome doesn't allow to read)
    for (const rule of ss.cssRules) {
      if (rule.selectorText === ".page-one") {
        return ss
      }
    }
  }
  return null
}

const _randomPosition = (currPos = [0, 0]) => {
  const x = currPos[0]
  const y = currPos[1]
  const randomNegative = () => (Math.random() < 0.5 ? -1 : 1)
  return [
    parseInt(x) + (Math.random() * 20 + 10) * randomNegative(),
    parseInt(y) + (Math.random() * 20 + 10) * randomNegative(),
  ]
}

const _randomDuration = radius => {
  return Math.random() * (100 / radius) + 10
}

export const convertRemToPixels = rem => {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
}
