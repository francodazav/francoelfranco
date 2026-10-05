import { useEffect, useRef, useState } from 'react'
import { Icon } from './Icon'

/** execCommand is deprecated but it is the only path that works when the async
    Clipboard API refuses - unfocused document, denied permission, or a page
    served over plain http. Both are tried before the button gives up. */
function writeToClipboard(value: string): Promise<boolean> {
  return (navigator.clipboard?.writeText(value) ?? Promise.reject(new Error('no api')))
    .then(() => true)
    .catch(() => {
      try {
        const field = document.createElement('textarea')
        field.value = value
        field.setAttribute('readonly', '')
        field.style.cssText = 'position:fixed;top:0;left:0;opacity:0;pointer-events:none'
        document.body.appendChild(field)
        field.select()
        const ok = document.execCommand('copy')
        field.remove()
        return ok
      } catch {
        return false
      }
    })
}

export function CopyEmail({
  value, copyLabel, copiedLabel,
}: { value: string; copyLabel: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => () => clearTimeout(timer.current), [])

  async function copy() {
    const ok = await writeToClipboard(value)
    if (import.meta.env.DEV && !ok) console.warn('[CopyEmail] clipboard refused')
    if (!ok) return // the mailto link beside this is still there
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-11 items-center gap-2 rounded-md border border-border-btn px-4 font-mono text-[13px] font-medium text-ink-2 transition-colors hover:border-border hover:bg-s2 hover:text-ink"
    >
      <Icon name={copied ? 'check' : 'copy'} size={16} className={copied ? 'text-accent-ink' : undefined} />
      {/* aria-live so the swap is announced, not just seen */}
      <span aria-live="polite">{copied ? copiedLabel : copyLabel}</span>
    </button>
  )
}
