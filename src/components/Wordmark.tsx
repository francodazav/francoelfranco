/**
 * The name, revealed a character at a time on load. The spans are hidden from
 * assistive tech and the whole thing carries one label, so a screen reader
 * announces "Franco Daza" rather than eleven separate letters.
 */
export function Wordmark({ name }: { name: string }) {
  return (
    <span aria-label={name} className="inline-flex">
      {[...name].map((char, i) => (
        <span
          key={`${char}-${i}`}
          aria-hidden="true"
          className="wordmark-char"
          style={{ animationDelay: `${120 + i * 40}ms` }}
        >
          {char === ' ' ? ' ' : char}
        </span>
      ))}
    </span>
  )
}
