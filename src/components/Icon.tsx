type Props = { name: IconName; size?: number; className?: string }

export type IconName =
  | 'mic' | 'dumbbell' | 'football' | 'github' | 'linkedin'
  | 'download' | 'menu' | 'sun' | 'moon' | 'monitor'

const paths: Record<IconName, React.ReactNode> = {
  mic: <><rect x="9" y="2" width="6" height="11" rx="3" /><path d="M5 10v1a7 7 0 0 0 14 0v-1" /><path d="M12 18v4" /><path d="M8 22h8" /></>,
  dumbbell: <><path d="M4 9v6" /><path d="M7 5.5v13" /><path d="M17 5.5v13" /><path d="M20 9v6" /><path d="M7 12h10" /></>,
  football: <><circle cx="12" cy="12" r="9" /><path d="M12 7.6 8.2 10.4l1.45 4.5h4.7l1.45-4.5Z" /><path d="M12 3v4.6" /><path d="M3.5 9.7l4.7.7" /><path d="M20.5 9.7l-4.7.7" /><path d="M7 19.7l2.65-4.8" /><path d="M17 19.7l-2.65-4.8" /></>,
  github: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.7A5.2 5.2 0 0 0 20 4.8a4.9 4.9 0 0 0-.1-3.6s-1.1-.3-3.6 1.4a12.3 12.3 0 0 0-6.6 0C7.2.9 6.1 1.2 6.1 1.2A4.9 4.9 0 0 0 6 4.8a5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.2 6.4 6.2 6.7a3.4 3.4 0 0 0-.9 2.6V21" />,
  linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
  download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="M7 10l5 5 5-5" /><path d="M12 15V3" /></>,
  menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" /></>,
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />,
  monitor: <><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /></>,
}

export function Icon({ name, size = 24, className }: Props) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.7} strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true" className={className}
    >
      {paths[name]}
    </svg>
  )
}
