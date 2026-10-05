import type { Content } from './types'

export const en: Content = {
  htmlLang: 'en',
  documentTitle: 'Franco Daza — Full-stack developer',
  metaDescription:
    'Franco Daza — junior full-stack developer. React, Flutter, Nest.js and Google Cloud. Currently at CoVet.',
  name: 'Franco Daza',
  role: 'Junior full-stack developer',
  location: 'Colombia / Venezuela',
  email: 'francodazav@gmail.com',
  nav: [
    { id: 'work', label: 'work' },
    { id: 'stack', label: 'stack' },
    { id: 'about', label: 'about' },
    { id: 'background', label: 'background' },
    { id: 'contact', label: 'contact' },
  ],
  menu: { open: 'Open menu', close: 'Close menu', theme: 'Theme', language: 'Language' },
  themeLabels: { light: 'Light theme', dark: 'Dark theme', system: 'Match system theme' },

  hero: {
    headline: 'I build the API, the app, and the thing that sends the email.',
    sub: 'TypeScript end to end. Right now at CoVet — an AI copilot that writes veterinary clinical records so vets can actually go home on time.',
    primary: 'See the work',
    secondary: 'Download CV',
  },

  whoami: {
    prompt: '$ whoami',
    line1: 'Franco Daza — {age}',
    line2: 'colombian-venezuelan',
    line3: 'junior full-stack · @covet',
  },
  terminal: [
    { prompt: '$ experience --years', value: '2.5  →  digidea apps (1.5) · covet (1.0)' },
    { prompt: '$ stack --core', value: 'react.ts · nest.js · express.ts · flutter', tone: 'accent' },
    { prompt: '$ stack --cloud', value: 'gcloud · firestore · algolia · postmark', tone: 'accent', hideOnMobile: true },
    { prompt: '$ lang', value: 'es native · en b2' },
  ],
  status: { prompt: '$ status', value: 'open to work →' },

  stackHead: { eyebrow: '// stack', heading: 'Three layers, one person.' },
  stackLayers: [
    {
      index: '01', label: 'Client',
      pills: [{ name: 'React.ts', core: true }, { name: 'Flutter', core: true }, { name: 'FlutterFlow' }, { name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' }],
    },
    {
      index: '02', label: 'API',
      pills: [{ name: 'Nest.js', core: true }, { name: 'Express.ts', core: true }],
    },
    {
      index: '03', label: 'Platform',
      pills: [{ name: 'Google Cloud' }, { name: 'Firestore' }, { name: 'Algolia' }, { name: 'Postmark' }],
    },
  ],
  stackTooling: { label: 'Tooling', pills: [{ name: 'Postman' }, { name: 'Insomnia' }, { name: 'Firefoo' }] },

  work: {
    eyebrow: '// work',
    heading: 'Two products, real users.',
    meta: '2.5 years · web, mobile & API',
    items: [
      {
        title: 'CoVet',
        role: 'Junior full-stack developer · 2025 — present',
        tag: 'Flutter · NestJS · GCP',
        body: 'An AI copilot for veterinarians — it listens to the consult and writes the clinical record, so vets spend their evening at home instead of on paperwork. I work across all three codebases: the Flutter app clinics use, the TypeScript API behind it, and the internal admin console. I joined while the product was built in FlutterFlow and was part of the team’s move onto a hand-written Flutter codebase.',
        bullets: [
          { before: 'Led the ', strong: 'output-pages redesign', after: ' — the screens where a vet reads, edits, shares and exports a generated record — shipped in six increments behind a rollout flag.' },
          { before: 'Built the ', strong: 'dental chart', after: ' end to end: the charting UI in Flutter, and a backend PDF generator that renders separate clinical and client-facing versions.' },
          { before: 'Extended ', strong: 'roles and permissions', after: ' across API, app and admin — support, enterprise, intern and veterinary-school accounts.' },
          { before: 'Shipped ', strong: 'practice-management integrations', after: ': a metrics dashboard with CSV export, and record export straight into the clinic’s own system.' },
        ],
        chips: ['Flutter', 'Dart', 'Nest.js', 'TypeScript', 'Firestore', 'Google Cloud', 'Algolia', 'Postmark'],
      },
      {
        title: 'Atlas — Digidea Apps',
        role: 'Full-stack developer · 2024 — 2025',
        tag: 'Ecuador · EdTech',
        body: 'An app used by teachers across Ecuador. I implemented the flow that generates student grades for the 2024–2025 national scholarship programme — the calculation a teacher runs once and cannot get wrong, because a scholarship depends on it.',
        bullets: [],
        chips: [],
      },
    ],
  },

  about: {
    eyebrow: '// about',
    heading: 'How I got here.',
    meta: 'Venezuela → Mexico → Colombia',
    paragraphs: [
      'I learned to solve a Rubik’s cube when I was sixteen. What caught me wasn’t the cube — it was finding out that a scrambled mess has a method behind it, and that once you know the method you can solve any scramble, not just the one in your hands. I didn’t have the word ALGORITHM yet, but that was the moment.',
      'What I’m good at is landing in code I’ve never seen and becoming useful quickly. At CoVet that meant three codebases inside a year — a Flutter app, a TypeScript API and an internal admin console — with work shipped in all three.',
      'I studied computer engineering at UNET in Venezuela and continued at UABC after moving to Mexico. By then I already knew what I wanted to do for a living, so I went and did it.',
      'I’m looking for my next role. I’ve built mobile, web and backend, and I’m glad to work anywhere across that range. What I care about is shipping something people actually use — vets who get their evening back, teachers who can file grades without worrying.',
    ],
    emphasis: 'algorithm',
    quote: 'I’ve done stand-up in Venezuela, Colombia and Mexico. Reading a room and explaining a technical decision turn out to be the same skill — you have to know what the other person already knows.',
  },

  background: {
    eyebrow: '// background',
    heading: 'The details.',
    meta: 'Profile, education & languages',
    factsLabel: 'Profile',
    facts: [
      { label: 'Born', value: 'Venezuela' },
      { label: 'Nationality', value: 'Colombian & Venezuelan' },
      { label: 'Age', value: '{age}' },
      { label: 'Availability', value: 'One month\u2019s notice' },
      { label: 'Work', value: 'Remote' },
    ],
    educationLabel: 'Education',
    education: [
      { what: 'Computer Engineering', where: 'UNET · Venezuela', detail: '3 semesters' },
      { what: 'Computer Engineering', where: 'UABC · Mexico', detail: '6 semesters' },
      { what: 'HTML, CSS & JavaScript', where: 'freeCodeCamp', detail: 'Certificate' },
    ],
    languagesLabel: 'Languages',
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'B2' },
    ],
    languagesNote: 'Colombian-Venezuelan, studied in Mexico and Venezuela. Building for veterinary clinics now, for Ecuadorian schools before that.',
    offTheClock: [
      { icon: 'mic', title: 'Stand-up comedy', body: 'Five minutes, no notes, a room that has to laugh. Best training I have had for standups of the other kind.' },
      { icon: 'dumbbell', title: 'CrossFit', body: 'After work, most weeks. Showing up when it is hard turns out to be a transferable skill.' },
      { icon: 'football', title: 'Football', body: 'Weekend league. Nobody scores alone, and nobody ships alone either.' },
    ],
  },

  contact: {
    eyebrow: '// contact',
    heading: 'Let’s talk.',
    sub: 'Open to full-stack roles, remote or on-site. Write in Spanish or English — whichever you prefer.',
    links: [
      { id: 'linkedin', label: 'LinkedIn' },
    ],
    cv: 'Download CV',
    copy: 'Copy email',
    copied: 'Copied',
    footerLeft: 'Franco Daza · Colombia / Venezuela',
    footerRight: 'es / en',
  },
}
