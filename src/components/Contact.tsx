import { isExternal, links } from '../content/links'
import { useContent } from '../lib/lang'
import { Icon } from './Icon'

export function Contact() {
  const content = useContent()
  const c = content.contact
  return (
    <section id="contact" className="screen mx-auto max-w-[1280px] border-t border-line px-5 py-12 sm:px-16 sm:py-14">
      <div className="flex flex-col gap-2.5">
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-ink">
          {c.eyebrow}
        </div>
        <h2 className="m-0 text-[32px] font-bold tracking-[-0.03em] text-ink sm:text-[44px]">
          {c.heading}
        </h2>
      </div>

      <p className="m-0 mt-4 max-w-[560px] text-base leading-relaxed text-ink-2 text-pretty sm:text-lg">
        {c.sub}
      </p>

      <a
        href={`mailto:${content.email}`}
        className="mt-7 inline-flex min-h-11 max-w-full items-center self-start break-all border-b-2 border-border pb-2 font-mono text-[19px] font-medium tracking-[-0.02em] text-accent-ink sm:mt-8 sm:text-[26px] lg:text-[34px]"
      >
        {content.email}
        <span className="ml-3 inline-block h-[22px] w-3 shrink-0 bg-accent sm:h-[30px] sm:w-4" />
      </a>

      <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
        {c.links.map((l) => (
          <a
            key={l.id}
            href={links[l.id]}
            {...(isExternal(links[l.id])
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            className="flex h-[50px] items-center justify-center gap-2.5 rounded-lg border border-border-btn px-[22px] text-[15px] font-medium text-ink sm:h-12 sm:justify-start sm:rounded-md"
          >
            <Icon name={l.id} size={18} />
            {l.label}
          </a>
        ))}
        <a
          href={links.cv}
          className="flex h-[50px] items-center justify-center gap-2.5 rounded-lg bg-accent px-[22px] text-[15px] font-semibold text-on-accent sm:h-12 sm:justify-start sm:rounded-md"
        >
          <Icon name="download" size={18} />
          {c.cv}
        </a>
      </div>

      <div className="mt-12 flex flex-col gap-1.5 border-t border-line pt-5 font-mono text-[11.5px] text-ink-3 sm:flex-row sm:items-center sm:justify-between">
        <span>{c.footerLeft}</span>
        <span>{c.footerRight}</span>
      </div>
    </section>
  )
}
