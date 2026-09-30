import { useState } from 'react'
import { useContent } from '../lib/lang'
import { Icon } from './Icon'
import { LangToggle } from './LangToggle'
import { Pill } from './Pill'
import { SectionHead } from './SectionHead'
import { ThemeToggle } from './ThemeToggle'
import avatar from '../assets/franco.png'

function Terminal() {
  const content = useContent()
  return (
    <div className="overflow-hidden rounded-[10px] border border-border bg-terminal lg:w-[476px] lg:shrink-0">
      <div className="flex h-10 items-center gap-[7px] border-b border-line px-4">
        <span className="h-[9px] w-[9px] rounded-sm bg-dots" />
        <span className="h-[9px] w-[9px] rounded-sm bg-dots" />
        <span className="h-[9px] w-[9px] rounded-sm bg-dots" />
        <span className="ml-2.5 font-mono text-[11.5px] text-ink-3">~/franco</span>
      </div>
      <div className="flex flex-col gap-[13px] p-4 font-mono text-[11.5px] leading-relaxed sm:gap-[15px] sm:p-5 sm:text-[13px]">
        <div className="flex items-center gap-[13px] sm:gap-[15px]">
          <img
            src={avatar} alt={content.name} width={88} height={88}
            className="block h-[72px] w-[72px] shrink-0 object-contain sm:h-[88px] sm:w-[88px]"
          />
          <div className="flex min-w-0 flex-col gap-1">
            <div className="text-ink-4">{content.whoami.prompt}</div>
            <div className="text-ink-term">{content.whoami.line1}</div>
            <div className="text-ink-term">{content.whoami.line2}</div>
            <div className="text-[11px] text-ink-3 sm:text-xs">{content.whoami.line3}</div>
          </div>
        </div>
        {content.terminal.map((row) => (
          <div key={row.prompt} className={row.hideOnMobile ? 'hidden sm:block' : undefined}>
            <div className="text-ink-4">{row.prompt}</div>
            <div className={row.tone === 'accent' ? 'text-accent-ink' : 'text-ink-term'}>
              {row.value}
            </div>
          </div>
        ))}
        <div>
          <div className="text-ink-4">{content.status.prompt}</div>
          <div className="break-all text-warm">
            {content.status.value} {content.email}
            <span className="ml-1.5 inline-block h-[15px] w-2 translate-y-[2px] bg-accent" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  const [open, setOpen] = useState(false)
  const content = useContent()
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line bg-ground/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between px-5 sm:h-[72px] sm:px-16">
          <a href="#top" className="flex shrink-0 items-center gap-2.5 whitespace-nowrap font-mono text-sm font-medium tracking-tight text-ink sm:text-[15px]">
            <span>franco daza</span>
            <span className="inline-block h-4 w-[9px] bg-accent" />
          </a>
          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-8 font-mono text-[13px] md:flex">
              {content.nav.map((n) => (
                <a key={n.id} href={`#${n.id}`} className="text-ink-2 transition-colors hover:text-ink">
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="hidden items-center gap-2 lg:flex">
              <LangToggle />
              <ThemeToggle />
            </div>
            <button
              type="button"
              aria-label={open ? content.menu.close : content.menu.open}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center text-ink-prose lg:hidden"
            >
              <Icon name="menu" size={22} />
            </button>
          </div>
        </div>
        {open ? (
          <nav id="mobile-nav" className="flex flex-col border-t border-line px-5 pb-3 lg:hidden">
            {content.nav.map((n) => (
              <a
                key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}
                className="flex h-12 items-center font-mono text-sm text-ink-2 md:hidden"
              >
                {n.label}
              </a>
            ))}
            <div className="mt-1 flex items-center justify-between gap-4 border-t border-line pt-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
                {content.menu.language}
              </span>
              <LangToggle />
            </div>
            <div className="mt-2 flex items-center justify-between gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
                {content.menu.theme}
              </span>
              <ThemeToggle />
            </div>
          </nav>
        ) : null}
      </header>

      <section id="top" className="screen mx-auto max-w-[1280px] px-5 py-8 sm:px-16 sm:py-12">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-14">
          <div className="flex flex-col gap-4 sm:gap-6 lg:flex-1">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-accent-ink sm:text-xs">
              {content.role} · {content.location}
            </div>
            <h1 className="m-0 max-w-[580px] text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-ink text-pretty sm:text-[44px] lg:text-[58px] lg:leading-[1.04] lg:tracking-[-0.03em]">
              {content.hero.headline}
            </h1>
            <p className="m-0 max-w-[500px] text-base leading-relaxed text-ink-2 text-pretty sm:text-lg">
              {content.hero.sub}
            </p>
            <div className="flex flex-col gap-2.5 pt-1.5 sm:flex-row sm:gap-3.5">
              <a href="#work" className="flex h-[50px] items-center justify-center rounded-lg bg-accent px-6 text-[15px] font-semibold text-on-accent sm:h-12 sm:rounded-md">
                {content.hero.primary}
              </a>
              <a href="#cv" className="flex h-[50px] items-center justify-center gap-2 rounded-lg border border-border-btn px-6 text-[15px] font-medium text-ink sm:h-12 sm:rounded-md">
                <Icon name="download" size={17} />
                {content.hero.secondary}
              </a>
            </div>
          </div>
          <Terminal />
        </div>
      </section>

      <section id="stack" className="screen mx-auto max-w-[1280px] border-t border-line px-5 py-10 sm:px-16 sm:py-12">
        <SectionHead eyebrow={content.stackHead.eyebrow} heading={content.stackHead.heading} />
        <div className="mt-7 flex flex-col gap-6 sm:mt-9 sm:gap-5">
          {content.stack.map((g) => (
            <div key={g.label} className="flex flex-col gap-2.5 sm:flex-row sm:items-start sm:gap-[18px]">
              <div className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-accent-ink sm:w-[124px] sm:shrink-0 sm:pt-2.5 sm:text-[10px]">
                {g.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {g.pills.map((p) => <Pill key={p.name} name={p.name} core={p.core} />)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
