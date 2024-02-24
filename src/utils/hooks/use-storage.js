'use client'

import { useCallback, useState, useEffect } from 'react'

const hasWindow = () => {
  return typeof window !== 'undefined'
}

const window = globalThis.window

export function useSessionStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    if (!hasWindow()) return

    const jsonValue = window.sessionStorage.getItem(key)
    if (jsonValue != null) return JSON.parse(jsonValue)
    if (typeof defaultValue === 'function') {
      return defaultValue()
    } else {
      return defaultValue
    }
  })

  useEffect(() => {
    if (!hasWindow()) return

    if (value === undefined) return window.sessionStorage.removeItem(key)
    window.sessionStorage.setItem(key, JSON.stringify(value))
  }, [key, value, window?.sessionStorage])

  const remove = useCallback(() => {
    setValue(undefined)
  }, [])

  return [value, setValue, remove]
}
