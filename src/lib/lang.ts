import { useSyncExternalStore } from 'react'
import { en } from '../content/en'
import { es } from '../content/es'
import type { Content, Lang } from '../content/types'

export const LANGS: Lang[] = ['en', 'es']
export const dictionaries: Record<Lang, Content> = { en, es }

const KEY = 'lang'

/** Mirrors the blocking script in index.html - keep the two in step. */
function apply(lang: Lang) {
  const c = dictionaries[lang]
  document.documentElement.lang = c.htmlLang
  document.title = c.documentTitle
  document.querySelector('meta[name="description"]')?.setAttribute('content', c.metaDescription)
}

function read(): Lang {
  try {
    const v = localStorage.getItem(KEY)
    if (v === 'en' || v === 'es') return v
  } catch {
    /* private mode */
  }
  // No stored choice: follow the browser, since Franco's readers are split.
  try {
    if (navigator.language?.toLowerCase().startsWith('es')) return 'es'
  } catch {
    /* no navigator */
  }
  return 'en'
}

let current: Lang = read()
const listeners = new Set<() => void>()

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function setLang(next: Lang) {
  current = next
  apply(next)
  try {
    localStorage.setItem(KEY, next)
  } catch {
    /* private mode - the choice just will not persist */
  }
  listeners.forEach((l) => l())
}

if (typeof window !== 'undefined') {
  apply(current)
  window.addEventListener('storage', (e) => {
    if (e.key !== KEY) return
    current = read()
    apply(current)
    listeners.forEach((l) => l())
  })
}

export function useLang() {
  const lang = useSyncExternalStore(subscribe, () => current, () => current)
  return { lang, setLang }
}

export function useContent(): Content {
  return dictionaries[useLang().lang]
}
