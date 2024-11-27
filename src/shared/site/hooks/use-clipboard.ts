import { useState, useCallback, useEffect } from 'react'

interface UseClipboardOptions {
  /**
   * Duração em milissegundos que o estado isCopied ficará como true
   * @default 2000
   */
  timeout?: number
}

export function useClipboard(options: UseClipboardOptions = {}) {
  const { timeout = 2000 } = options

  const [isCopied, setIsCopied] = useState(false)

  const copy = useCallback(async (text: string) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported')
      return false
    }

    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      return true
    } catch (error) {
      console.error('Failed to copy text:', error)
      setIsCopied(false)
      return false
    }
  }, [])

  useEffect(() => {
    if (isCopied) {
      const timeoutId = setTimeout(() => {
        setIsCopied(false)
      }, timeout)

      return () => clearTimeout(timeoutId)
    }
  }, [isCopied, timeout])

  return { isCopied, copy }
} 