export function Pill({ name, core = false, onCard = false }:
  { name: string; core?: boolean; onCard?: boolean }) {
  if (core) {
    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-s3 px-4 py-2 font-mono text-[12.5px] font-medium text-ink">
        <span className="h-[5px] w-[5px] rounded-full bg-accent" />
        {name}
      </span>
    )
  }
  return (
    <span className={`inline-flex items-center rounded-full ${onCard ? 'bg-s2' : 'bg-s1'} px-[15px] py-2 font-mono text-xs text-ink-2`}>
      {name}
    </span>
  )
}

/** Chips sit on a card, so they need the next surface up to stay visible. */
export function Chip({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center rounded-md bg-s2 px-3 py-[7px] font-mono text-[11.5px] text-ink-2">
      {name}
    </span>
  )
}
