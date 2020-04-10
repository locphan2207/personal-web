function makeCallback(callback) {
  return (entries, observer) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        console.log("calling")
        callback()
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
