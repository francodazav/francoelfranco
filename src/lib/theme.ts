import { useSyncExternalStore } from 'react'

export type Theme = 'light' | 'dark' | 'system'
export const THEMES: Theme[] = ['light', 'dark', 'system']

const KEY = 'theme'

/** Mirrors the blocking script in index.html - keep the two in step. */
function apply(theme: Theme) {
  const root = document.documentElement
  if (theme === 'system') root.removeAttribute('data-theme')
  else root.setAttribute('data-theme', theme)
}

function read(): Theme {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'light' || v === 'dark' ? v : 'system'
  } catch {
    return 'system'
  }
}

/* One store, so every ThemeToggle on the page agrees - the header renders one
   for desktop and one inside the mobile menu, and per-hook state would desync. */
let current: Theme = read()
const listeners = new Set<() => void>()

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function setTheme(next: Theme) {
  current = next
  apply(next)
  try {
    if (next === 'system') localStorage.removeItem(KEY)
    else localStorage.setItem(KEY, next)
  } catch {
    /* private mode - the choice just will not persist */
  }
  listeners.forEach((l) => l())
}

// Another tab changing the preference should not leave this one stale.
if (typeof window !== 'undefined') {
  window.addEventListener('storage', (e) => {
    if (e.key !== KEY) return
    current = read()
    apply(current)
    listeners.forEach((l) => l())
  })
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, () => current, () => current)
  return { theme, setTheme }
}
