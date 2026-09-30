import { content } from '../content/en'
import { Chip } from './Pill'
import { SectionHead } from './SectionHead'

export function Work() {
  const { eyebrow, heading, meta, items } = content.work
  return (
    <section id="work" className="mx-auto max-w-[1280px] border-t border-line px-5 py-12 sm:px-16 sm:py-14">
      <SectionHead eyebrow={eyebrow} heading={heading} meta={meta} />
      <div className="mt-7 flex flex-col gap-6 sm:mt-8">
        {items.map((item) => (
          <article
            key={item.title}
            className="flex flex-col gap-5 rounded-2xl bg-s1 p-6 shadow-[var(--shadow-card)] sm:gap-[22px] sm:p-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="m-0 text-[22px] font-bold tracking-[-0.02em] text-ink sm:text-[28px]">
                  {item.title}
                </h3>
                <div className="font-mono text-[12.5px] text-accent-ink">{item.role}</div>
              </div>
              <div className="font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-3 sm:pt-1.5 sm:text-right">
                {item.tag}
              </div>
            </div>

            <p className="m-0 max-w-[780px] text-[15px] leading-relaxed text-ink-2 text-pretty sm:text-[17px]">
              {item.body}
            </p>

            {item.bullets.length > 0 ? (
              <>
                <div className="h-px bg-line-card" />
                <div className="grid gap-4 md:grid-cols-2 md:gap-x-9 md:gap-y-[18px]">
                  {item.bullets.map((b) => (
                    <div key={b.strong} className="flex items-start gap-3">
                      <span className="mt-[7px] h-[7px] w-[7px] shrink-0 bg-accent" />
                      <p className="m-0 text-[15px] leading-relaxed text-ink-prose">
                        {b.before}
                        <strong className="font-semibold text-ink">{b.strong}</strong>
                        {b.after}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            ) : null}

            {item.chips.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {item.chips.map((c) => <Chip key={c} name={c} />)}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}
