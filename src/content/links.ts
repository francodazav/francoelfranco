/** URLs are not translatable copy, so they live here once rather than in both
    dictionaries where they could drift apart. */
export const links = {
  // TODO: francoelfrancoo is the CoVet work account with no public repos.
  // Point this at a personal account once it has something on it.
  github: '#github',
  linkedin: 'https://www.linkedin.com/in/francoelfranco',
  cv: '#cv',
} as const

export function isExternal(href: string) {
  return /^https?:\/\//.test(href)
}
