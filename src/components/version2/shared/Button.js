import React from "react"
import "./Button.css"

function Button({
  text,
  className = "",
  style,
  duration = 0.2,
  delay = 0,
  link,
  onClick,
}) {
  const styles = {
    ...style,
    animation: `${duration}s appear ${delay}s ease-out both`,
  }
  const openNewTab = () => window.open(link, "_blank")
  return (
    <div
      className={`button-container ${className}`}
      style={styles}
      onClick={link ? openNewTab : onClick}
    >
      <p className="button-text" onClick={onClick}>
        {text}
      </p>
    </div>
  )
}

export default Button
