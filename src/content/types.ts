import type { IconName } from '../components/Icon'

export type Lang = 'en' | 'es'

export type Pill = { name: string; core?: boolean }
export type StackGroup = { label: string; pills: Pill[] }
export type TerminalRow = { prompt: string; value: string; tone?: 'accent'; hideOnMobile?: boolean }
export type Bullet = { before: string; strong: string; after: string }
export type WorkItem = {
  title: string; role: string; tag: string; body: string
  bullets: Bullet[]; chips: string[]
}

/** One shape both languages must satisfy, so neither can drift from the other. */
export type Content = {
  htmlLang: string
  documentTitle: string
  metaDescription: string
  name: string
  role: string
  location: string
  email: string
  nav: { id: string; label: string }[]
  menu: { open: string; close: string; theme: string; language: string }
  themeLabels: { light: string; dark: string; system: string }
  hero: { headline: string; sub: string; primary: string; secondary: string }
  whoami: { prompt: string; line1: string; line2: string; line3: string }
  terminal: TerminalRow[]
  status: { prompt: string; value: string }
  stackHead: { eyebrow: string; heading: string }
  stack: StackGroup[]
  work: { eyebrow: string; heading: string; meta: string; items: WorkItem[] }
  about: {
    eyebrow: string; heading: string; meta: string
    paragraphs: string[]; emphasis: string; quote: string
  }
  background: {
    eyebrow: string; heading: string; meta: string
    educationLabel: string
    education: { what: string; where: string; detail: string }[]
    languagesLabel: string
    languages: { name: string; level: string }[]
    languagesNote: string
    offTheClock: { icon: IconName; title: string; body: string }[]
  }
  contact: {
    eyebrow: string; heading: string; sub: string
    links: { id: 'github' | 'linkedin'; label: string; href: string }[]
    cv: string; footerLeft: string; footerRight: string
  }
}
