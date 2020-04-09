import ScrollMagic from "scrollmagic"
const controller = new ScrollMagic.Controller()

export const interpolateRange = (input, inRange, outRange) => {
  const inRangeLength = inRange[1] - inRange[0]
  const outRangeLength = outRange[1] - outRange[0]
  const inOffset = inRange[0]
  const outOffset = outRange[0]
  const inPercent = (input - inOffset) / inRangeLength
  const output = inPercent * outRangeLength + outOffset
  return output
}

export const createNameToHeaderScene = callback =>
  new ScrollMagic.Scene({
    triggerHook: 0, // position of view port to trigger
    triggerElement: ".intro",
    duration: "30%",
  })
    .on("progress", ({ progress, scrollDirection }) => {
      callback({ progress })
    })
    .addTo(controller)

export default controller
