function makeCallback(callback, type = "appear") {
  return (entries, observer) => {
    for (const entry of entries) {
      console.log(entry)
      if (type === "appear") {
        if (entry.isIntersecting) {
          callback()
        }
      }
    }
  }
}
const observerOptions = {
  rootMargin: "0px 0px -50% 0px",
}

export const makeObserver = (target, callback) => {
  const observer = new IntersectionObserver(
    makeCallback(callback),
    observerOptions
  )
  observer.observe(target)
  return observer
}
