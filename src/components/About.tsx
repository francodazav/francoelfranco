import { useContent } from '../lib/lang'
import { Icon } from './Icon'
import { SectionHead } from './SectionHead'

/** The first paragraph carries one emphasised word, marked ALGORITHM in the copy. */
function Paragraph({ text, emphasis }: { text: string; emphasis: string }) {
  const [head, tail] = text.split('ALGORITHM')
  return (
    <p className="m-0 text-[15px] leading-[1.68] text-ink-prose text-pretty sm:text-[17px] 2xl:text-[19px]">
      {head}
      {tail === undefined ? null : <em className="italic text-ink">{emphasis}</em>}
      {tail}
    </p>
  )
}

export function About() {
  const { eyebrow, heading, meta, paragraphs, emphasis, quote } = useContent().about
  return (
    <section id="about" className="screen mx-auto max-w-[1280px] 2xl:max-w-[1536px] border-t border-line px-5 py-12 sm:px-16 sm:py-14 2xl:py-20">
      <SectionHead eyebrow={eyebrow} heading={heading} meta={meta} />
      <div className="mt-7 grid gap-5 sm:mt-8 md:grid-cols-2 md:gap-x-14 md:gap-y-6">
        {paragraphs.map((p) => <Paragraph key={p.slice(0, 24)} text={p} emphasis={emphasis} />)}
      </div>
      <div className="mt-8 flex items-start gap-4 rounded-2xl bg-s1 p-6 shadow-[var(--shadow-card)] sm:mt-9 sm:gap-5 sm:p-[30px] 2xl:p-9">
        <span className="mt-1 shrink-0 text-accent-ink">
          <Icon name="mic" size={26} />
        </span>
        <p className="m-0 text-[17px] font-medium leading-snug tracking-[-0.01em] text-ink text-pretty sm:text-[22px] 2xl:text-[27px]">
          {quote}
        </p>
      </div>
    </section>
  )
}
