import { useCallback, useEffect, useState } from 'react'

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const onScroll = useCallback(() => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const windowScroll = document.documentElement.scrollTop

    const scrolled = (windowScroll / height) * 100

    setScrollPosition(scrolled)
  }, [])

  useEffect(() => {
    onScroll()
  }, [onScroll])

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })

  return scrollPosition
}
