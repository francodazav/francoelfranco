/** Three-letter function words worth binding. Kept deliberately short: each
    entry fuses two words into one unbreakable unit, and a long unit can
    overflow a narrow heading, so conjunctions that would start a chain
    ("and", "que", "para") are left out. Anything 1-2 letters is bound anyway. */
const SHORT: Record<string, string[]> = {
  en: ['the', 'and'],
  es: ['los', 'las', 'una', 'del'],
}

/**
 * Stops a line ending on an article or preposition - "Construyo la / API"
 * reads as a mistake. Binds each such word to the one after it with a
 * non-breaking space, so the break moves to before the pair.
 * For headings; body copy is handled by text-wrap: pretty and hyphens.
 */
export function bindShortWords(text: string, lang: string): string {
  const extra = new Set(SHORT[lang] ?? SHORT.en)
  return text.replace(/(\S+)(\s+)(?=\S)/gu, (whole, word: string) => {
    // a word carrying punctuation already ends a clause - a break there is fine
    if (/[,;:.!?)\]—–]$/u.test(word)) return whole
    const bare = word.replace(/[^\p{L}\p{N}]/gu, '').toLowerCase()
    if (bare.length === 0) return whole
    return bare.length <= 2 || extra.has(bare) ? `${word} ` : whole
  })
}
