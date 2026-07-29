import { type PropsWithChildren, useEffect, useRef } from 'react'

type MotionMediaProps = PropsWithChildren<{
  className?: string
  strength?: number
}>

export function MotionMedia({ children, className = '', strength = 34 }: MotionMediaProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    let active = false

    const update = () => {
      frame = 0
      if (!active) return
      const rect = node.getBoundingClientRect()
      const viewportCenter = window.innerHeight / 2
      const elementCenter = rect.top + rect.height / 2
      const normalized = Math.max(-1, Math.min(1, (elementCenter - viewportCenter) / window.innerHeight))
      node.style.setProperty('--parallax-y', `${normalized * strength}px`)
    }

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting
        if (active) requestUpdate()
      },
      { rootMargin: '20% 0px' },
    )

    observer.observe(node)
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [strength])

  return (
    <div ref={ref} className={`motion-media ${className}`}>
      {children}
    </div>
  )
}
