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
  return (
    <div className={`button-container ${className}`} style={styles}>
      {link && (
        <a
          className="button-text"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      )}
      {onClick && (
        <p className="button-text" onClick={onClick}>
          {text}
        </p>
      )}
    </div>
  )
}

export default Button
