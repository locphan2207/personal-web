import React from "react"

const StrokeOutlineText = ({ text, className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className}>
      <text
        id="javascript"
        transform="translate(1 106)"
        fill="none"
        stroke="#f2f2f2"
        stroke-width="1"
        font-family="PalatinoLinotype-Bold, Palatino Linotype"
        font-weight="700"
        letter-spacing="0.035em"
      >
        <tspan x="0" y="0">
          {text}
        </tspan>
      </text>
    </svg>
  )
}

export default StrokeOutlineText
