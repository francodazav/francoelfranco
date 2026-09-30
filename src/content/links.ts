/** URLs are not translatable copy, so they live here once rather than in both
    dictionaries where they could drift apart. */
export const links = {
  // No GitHub link: the work account lives in covet-org and the personal one
  // has no public repos, so the button would land on an empty profile.
  // Restore by adding `github: '<url>'` here and the entry in en/es contact.links.
  linkedin: 'https://www.linkedin.com/in/francoelfranco',
  cv: '#cv',
} as const

export function isExternal(href: string) {
  return /^https?:\/\//.test(href)
}

/** Ids a contact button may use - derived, so content cannot name a link that
    does not exist here. */
export type LinkId = Exclude<keyof typeof links, 'cv'>
