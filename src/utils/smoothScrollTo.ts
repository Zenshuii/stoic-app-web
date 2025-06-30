export const smoothScrollTo = (targetY: number, baseDuration = 1000) => {
  const startY = window.scrollY
  const diff = targetY - startY
  const duration = Math.min(Math.abs(diff) / 2, baseDuration)
  let start: number | null = null

  const easeInOutQuad = (t: number) =>
    t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2

  const step = (timestamp: number) => {
    if (!start) start = timestamp
    const elapsed = timestamp - start
    const progress = Math.min(elapsed / duration, 1)
    const ease = easeInOutQuad(progress)
    window.scrollTo(0, startY + diff * ease)

    if (elapsed < duration) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}
