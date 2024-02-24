'use client'

import AOS from 'aos'
import 'aos/dist/aos.css' // DON'T FORGET IMPORTING "aos.css"
import { useLayoutEffect } from 'react'

export function AOSInit() {
  useLayoutEffect(() => {
    AOS.init({ once: true, offset: 0 })
  }, [])

  return null
}
