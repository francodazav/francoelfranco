import { LANGS, useContent, useLang } from '../lib/lang'

const names: Record<string, string> = { en: 'EN', es: 'ES' }
const full: Record<string, string> = { en: 'English', es: 'Español' }

export function LangToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLang()
  const content = useContent()
  return (
    <div
      role="radiogroup"
      aria-label={content.menu.language}
      className="flex items-center gap-0.5 rounded-full border border-border-btn p-0.5"
    >
      {LANGS.map((l) => {
        const active = lang === l
        return (
          <button
            key={l}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={full[l]}
            lang={l}
            onClick={() => setLang(l)}
            className={[
              'flex items-center justify-center rounded-full px-3 font-mono text-[11px] font-medium tracking-wider transition-colors',
              compact ? 'h-8' : 'h-11',
              active ? 'bg-s3 text-ink' : 'text-ink-3 hover:text-ink',
            ].join(' ')}
          >
            {names[l]}
          </button>
        )
      })}
    </div>
  )
}
