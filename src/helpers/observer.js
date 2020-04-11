function makeCallback(callback, type = "appear") {
  return (entries, observer) => {
    for (const entry of entries) {
      if (type === "appear") {
        if (entry.isIntersecting) {
          callback()
        }
      }
    }
  }
}
const makeOptions = ({ threshold, triggerPosition }) => ({
  rootMargin: `0px 0px -${triggerPosition || 0.6 * 100}% 0px`,
  threshold: threshold || 0.5,
})

export const makeObserver = (
  target,
  callback,
  { threshold, triggerPosition } = {}
) => {
  const observer = new IntersectionObserver(
    makeCallback(callback),
    makeOptions({ threshold, triggerPosition })
  )
  observer.observe(target)
  return observer
}
