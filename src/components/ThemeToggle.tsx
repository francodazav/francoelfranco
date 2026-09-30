import { Icon, type IconName } from './Icon'
import { THEMES, useTheme, type Theme } from '../lib/theme'
import { useContent } from '../lib/lang'

const icons: Record<Theme, IconName> = { light: 'sun', dark: 'moon', system: 'monitor' }

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const content = useContent()
  const labels = content.themeLabels
  return (
    <div
      role="radiogroup"
      aria-label={content.menu.theme}
      className="flex items-center gap-0.5 rounded-full border border-border-btn p-0.5"
    >
      {THEMES.map((t) => {
        const active = theme === t
        return (
          <button
            key={t}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={labels[t]}
            onClick={() => setTheme(t)}
            className={[
              'flex h-11 w-11 items-center justify-center rounded-full transition-colors sm:h-8 sm:w-8',
              active ? 'bg-s3 text-ink' : 'text-ink-3 hover:text-ink',
            ].join(' ')}
          >
            <Icon name={icons[t]} size={16} />
          </button>
        )
      })}
    </div>
  )
}
