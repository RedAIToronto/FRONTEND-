import { useEffect } from 'react'

interface ShortcutConfig {
  key: string
  ctrlKey?: boolean
  metaKey?: boolean
  action: () => void
}

export function useShortcuts(shortcuts: ShortcutConfig[]) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      shortcuts.forEach(({ key, ctrlKey, metaKey, action }) => {
        if (
          e.key.toLowerCase() === key.toLowerCase() &&
          (!ctrlKey || e.ctrlKey) &&
          (!metaKey || e.metaKey)
        ) {
          e.preventDefault()
          action()
        }
      })
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [shortcuts])
} 