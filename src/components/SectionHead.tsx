import { bindShortWords } from '../lib/typography'
import { useLang } from '../lib/lang'

export function SectionHead({
  eyebrow, heading, meta,
}: { eyebrow: string; heading: string; meta?: string }) {
  const { lang } = useLang()
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
      <div className="flex flex-col gap-2.5">
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-ink">
          {eyebrow}
        </div>
        <h2 className="m-0 text-[28px] font-bold leading-tight tracking-[-0.03em] text-ink sm:text-[34px] lg:text-[40px]">
          {bindShortWords(heading, lang)}
        </h2>
      </div>
      {meta ? <div className="font-mono text-[12.5px] text-ink-3">{meta}</div> : null}
    </div>
  )
}
