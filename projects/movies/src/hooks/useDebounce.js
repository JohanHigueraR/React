import { useState, useEffect } from 'react'

// Custom Hook useDebounce
export function useDebounce (value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    // Set a timeout to update the debounced value after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Clear the timeout if value or delay changes
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
