import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  let io = null
  onMounted(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach(e => e.classList.add('is-in'))
      return
    }
    io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('is-in')
          io.unobserve(en.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    els.forEach(e => io.observe(e))
  })
  onUnmounted(() => {
    if (io) io.disconnect()
  })
}
