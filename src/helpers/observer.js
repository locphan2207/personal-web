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
const makeOptions = ({ threshold, triggerPosition }) => ({
  rootMargin: `0px 0px -${triggerPosition || 0.5 * 100}% 0px`,
  threshold: threshold || 0.1,
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
