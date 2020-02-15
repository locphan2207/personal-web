import React from "react"

const Clickable = props => {
  const onHover = () => {
    const cursor = document.getElementById("cursor")
    cursor.style.animation = `cursor-shadow 5s linear ${
      window.screen.width > 767 ? "infinite" : ""
    }`
    cursor.style.width = "50rem"
    cursor.style.height = "50rem"
    cursor.style.borderRadius = "25rem"
  }
  const onLeave = () => {
    const cursor = document.getElementById("cursor")
    cursor.style.animation = ""
    cursor.style.width = ""
    cursor.style.height = ""
    cursor.style.borderRadius = ""
  }

  return React.Children.toArray(props.children).map(child => (
    <child.type
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      ref={child.ref}
      key={child.key}
      {...child.props}
    >
      {child.props.children}
    </child.type>
  ))
}

export default Clickable
