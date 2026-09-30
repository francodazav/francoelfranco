import { Icon, type IconName } from './Icon'
import { THEMES, useTheme, type Theme } from '../lib/theme'

const meta: Record<Theme, { icon: IconName; label: string }> = {
  light: { icon: 'sun', label: 'Light theme' },
  dark: { icon: 'moon', label: 'Dark theme' },
  system: { icon: 'monitor', label: 'Match system theme' },
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <div
      role="radiogroup"
      aria-label="Theme"
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
            aria-label={meta[t].label}
            onClick={() => setTheme(t)}
            className={[
              'flex h-11 w-11 items-center justify-center rounded-full transition-colors sm:h-8 sm:w-8',
              active ? 'bg-s3 text-ink' : 'text-ink-3 hover:text-ink',
            ].join(' ')}
          >
            <Icon name={meta[t].icon} size={16} />
          </button>
        )
      })}
    </div>
  )
}
