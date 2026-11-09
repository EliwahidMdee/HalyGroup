import { useEffect, useRef } from 'react'

export function usePointerGlow<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const onPointerMove = (event: PointerEvent) => {
      const bounds = element.getBoundingClientRect()
      const x = ((event.clientX - bounds.left) / bounds.width) * 100
      const y = ((event.clientY - bounds.top) / bounds.height) * 100

      element.style.setProperty('--pointer-x', `${x.toFixed(2)}%`)
      element.style.setProperty('--pointer-y', `${y.toFixed(2)}%`)
    }

    const onPointerEnter = () => element.classList.add('has-pointer')
    const onPointerLeave = () => element.classList.remove('has-pointer')

    element.addEventListener('pointermove', onPointerMove, { passive: true })
    element.addEventListener('pointerenter', onPointerEnter, { passive: true })
    element.addEventListener('pointerleave', onPointerLeave, { passive: true })

    return () => {
      element.removeEventListener('pointermove', onPointerMove)
      element.removeEventListener('pointerenter', onPointerEnter)
      element.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [])

  return ref
}
