import { content } from '../content/en'
import { Icon } from './Icon'
import { SectionHead } from './SectionHead'

const card = 'flex flex-col gap-4 rounded-2xl bg-s1 p-6 shadow-[var(--shadow-card)] sm:gap-[18px] sm:px-[30px] sm:py-7'
const cardLabel = 'font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3'

export function Background() {
  const b = content.background
  return (
    <section className="mx-auto max-w-[1280px] border-t border-line px-5 py-12 sm:px-16 sm:py-14">
      <SectionHead eyebrow={b.eyebrow} heading={b.heading} meta={b.meta} />

      <div className="mt-7 flex flex-col gap-6 sm:mt-8 lg:flex-row lg:items-stretch">
        <div className={`${card} lg:flex-1`}>
          <div className={cardLabel}>{b.educationLabel}</div>
          {b.education.map((e, i) => (
            <div
              key={e.where}
              className={[
                'flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-5',
                i < b.education.length - 1 ? 'border-b border-line-card pb-4' : '',
              ].join(' ')}
            >
              <div className="flex items-baseline gap-3">
                <span className="h-[7px] w-[7px] shrink-0 bg-accent" />
                <div className="flex flex-col gap-1">
                  <div className="text-[15px] font-semibold text-ink sm:text-[17px]">{e.what}</div>
                  <div className="font-mono text-[12.5px] text-ink-3">{e.where}</div>
                </div>
              </div>
              <div className="whitespace-nowrap pl-[19px] font-mono text-[12.5px] text-accent-ink sm:pl-0">
                {e.detail}
              </div>
            </div>
          ))}
        </div>

        <div className={`${card} lg:w-[330px] lg:shrink-0`}>
          <div className={cardLabel}>{b.languagesLabel}</div>
          {b.languages.map((l) => (
            <div key={l.name} className="flex items-baseline justify-between gap-4 border-b border-line-card pb-4">
              <span className="text-[15px] font-semibold text-ink sm:text-[17px]">{l.name}</span>
              <span className="font-mono text-[12.5px] text-accent-ink">{l.level}</span>
            </div>
          ))}
          <p className="m-0 text-[14.5px] leading-relaxed text-ink-2 text-pretty">{b.languagesNote}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-7 border-t border-line pt-7 sm:mt-9 md:grid-cols-3 md:gap-10">
        {b.offTheClock.map((o) => (
          <div key={o.title} className="flex flex-col gap-2.5">
            <span className="text-accent-ink"><Icon name={o.icon} size={24} /></span>
            <h3 className="m-0 font-mono text-xs font-bold uppercase tracking-[0.14em] text-ink">
              {o.title}
            </h3>
            <p className="m-0 text-[15px] leading-relaxed text-ink-2 text-pretty">{o.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
