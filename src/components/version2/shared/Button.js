import React from "react"
import "./Button.css"

function Button({ text, className = "", style, duration = 0.2, delay = 0 }) {
  const styles = {
    ...style,
    animation: `${duration}s appear ${delay}s ease-out both`,
  }
  return (
    <div className={`button-container ${className}`} style={styles}>
      <p>{text}</p>
    </div>
  )
}

export default Button
