import React from "react"

const StrokeOutlineText = ({ text, className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className}>
      <text
        id="javascript"
        transform="translate(1 106)"
        fill="none"
        stroke="#f2f2f2"
        strokeWidth="1"
        fontFamily="PalatinoLinotype-Bold, Palatino Linotype"
        fontWeight="700"
        letterSpacing="0.035em"
      >
        <tspan x="0" y="0">
          {text}
        </tspan>
      </text>
    </svg>
  )
}

export default StrokeOutlineText
