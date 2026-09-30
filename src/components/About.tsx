import { content } from '../content/en'
import { Icon } from './Icon'
import { SectionHead } from './SectionHead'

/** The first paragraph carries one emphasised word, marked ALGORITHM in the copy. */
function Paragraph({ text }: { text: string }) {
  const parts = text.split('ALGORITHM')
  return (
    <p className="m-0 text-[15px] leading-[1.68] text-ink-prose text-pretty sm:text-[17px]">
      {parts[0]}
      {parts.length > 1 ? <em className="italic text-ink">algorithm</em> : null}
      {parts[1]}
    </p>
  )
}

export function About() {
  const { eyebrow, heading, meta, paragraphs, quote } = content.about
  return (
    <section id="about" className="mx-auto max-w-[1280px] border-t border-line px-5 py-12 sm:px-16 sm:py-14">
      <SectionHead eyebrow={eyebrow} heading={heading} meta={meta} />
      <div className="mt-7 grid gap-5 sm:mt-8 md:grid-cols-2 md:gap-x-14 md:gap-y-6">
        {paragraphs.map((p) => <Paragraph key={p.slice(0, 24)} text={p} />)}
      </div>
      <div className="mt-8 flex items-start gap-4 rounded-2xl bg-s1 p-6 shadow-[var(--shadow-card)] sm:mt-9 sm:gap-5 sm:p-[30px]">
        <span className="mt-1 shrink-0 text-accent-ink">
          <Icon name="mic" size={26} />
        </span>
        <p className="m-0 text-[17px] font-medium leading-snug tracking-[-0.01em] text-ink text-pretty sm:text-[22px]">
          {quote}
        </p>
      </div>
    </section>
  )
}
