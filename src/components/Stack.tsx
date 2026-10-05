import { Fragment } from 'react'
import { useContent } from '../lib/lang'
import { Pill } from './Pill'
import { SectionHead } from './SectionHead'

/* A list of tools says what he has touched. Laid out as the three layers of a
   running system, it says he works at all of them - which is the actual claim. */
export function Stack() {
  const content = useContent()
  const layers = content.stackLayers
  const tooling = content.stackTooling
  return (
    <section
      id="stack"
      className="screen mx-auto max-w-[1280px] 2xl:max-w-[1536px] border-t border-line px-5 py-10 sm:px-16 sm:py-12 2xl:py-16"
    >
      <SectionHead eyebrow={content.stackHead.eyebrow} heading={content.stackHead.heading} />

      <div className="mt-7 flex flex-col sm:mt-9 lg:mt-10">
        {layers.map((layer, i) => (
          <Fragment key={layer.label}>
            <div className="flex flex-col gap-4 rounded-2xl bg-s1 p-5 shadow-[var(--shadow-card)] sm:flex-row sm:items-center sm:gap-8 sm:p-6 lg:gap-10 lg:px-8 lg:py-10 2xl:px-10 2xl:py-14">
              <div className="flex items-baseline gap-3 sm:w-[136px] sm:shrink-0">
                <span className="font-mono text-[11px] tabular-nums text-ink-4">{layer.index}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-ink">
                  {layer.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {layer.pills.map((p) => (
                  <Pill key={p.name} name={p.name} core={p.core} onCard />
                ))}
              </div>
            </div>
            {i < layers.length - 1 ? (
              <div className="ml-7 h-5 w-px bg-border sm:ml-9 sm:h-7 lg:h-10" aria-hidden="true" />
            ) : null}
          </Fragment>
        ))}
      </div>

      <div className="mt-7 flex flex-col gap-3 border-t border-line pt-6 sm:mt-8 lg:mt-10 lg:pt-8 sm:flex-row sm:items-center sm:gap-8">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-3 sm:w-[136px] sm:shrink-0 sm:pl-[26px]">
          {tooling.label}
        </div>
        <div className="flex flex-wrap gap-2">
          {tooling.pills.map((p) => <Pill key={p.name} name={p.name} />)}
        </div>
      </div>
    </section>
  )
}
