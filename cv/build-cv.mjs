import { writeFileSync } from 'node:fs'

/* One data object per language, same shape, so the two CVs cannot drift.
   Deliberately omitted: the photo (ATS parsers choke on images and a photo
   invites bias in US/EU screening) and the date of birth (age is on the site;
   a full DOB on a public PDF is an identity-theft vector). */

const SHARED = {
  name: 'Franco Daza',
  email: 'francodazav@gmail.com',
  linkedin: 'linkedin.com/in/francoelfranco',
  linkedinUrl: 'https://www.linkedin.com/in/francoelfranco',
}

const EN = {
  ...SHARED,
  lang: 'en',
  role: 'Junior Full-Stack Developer',
  meta: ['Colombian & Venezuelan', 'Remote', 'One month’s notice'],
  sections: {
    profile: 'Profile',
    experience: 'Experience',
    skills: 'Skills',
    education: 'Education',
    languages: 'Languages',
    interests: 'Interests',
  },
  profile:
    'Full-stack developer with two and a half years shipping production software across web, mobile and API. Currently at CoVet, an AI copilot that writes veterinary clinical records, working in all three codebases: the Flutter app clinics use, the TypeScript API behind it, and the internal admin console.',
  jobs: [
    {
      org: 'CoVet',
      title: 'Junior Full-Stack Developer',
      dates: '2025 – present',
      note: 'AI copilot that writes veterinary clinical records.',
      stack: 'Flutter · Dart · Nest.js · TypeScript · Google Cloud · Firestore · Algolia · Postmark',
      bullets: [
        'Led the output-pages redesign — the screens where a vet reads, edits, shares and exports a generated record — shipped in six increments behind a rollout flag.',
        'Built the dental chart end to end: the charting UI in Flutter, and a backend PDF generator that renders separate clinical and client-facing versions.',
        'Extended roles and permissions across API, app and admin console: support, enterprise, intern and veterinary-school accounts.',
        'Shipped practice-management integrations: a metrics dashboard with CSV export, and record export straight into the clinic’s own system.',
        'Joined while the product was built in FlutterFlow and was part of the team’s migration onto a hand-written Flutter codebase.',
      ],
    },
    {
      org: 'Digidea Apps',
      title: 'Full-Stack Developer',
      dates: '2024 – 2025',
      note: 'Atlas, an app used by teachers across Ecuador.',
      stack: '',
      bullets: [
        'Implemented the flow that generates student grades for Ecuador’s 2024–2025 national scholarship programme — a calculation a teacher runs once and cannot get wrong, because a scholarship depends on it.',
      ],
    },
  ],
  skills: [
    ['Client', 'React.ts · Flutter · FlutterFlow · HTML · CSS · JavaScript'],
    ['API', 'Nest.js · Express.ts · TypeScript'],
    ['Platform', 'Google Cloud · Firestore · Algolia · Postmark'],
    ['Tooling', 'Postman · Insomnia · Firefoo'],
  ],
  education: [
    ['Computer Engineering', 'UABC · Mexico', '6 semesters'],
    ['Computer Engineering', 'UNET · Venezuela', '3 semesters'],
    ['HTML, CSS & JavaScript', 'freeCodeCamp', 'Certificate'],
  ],
  languages: [['Spanish', 'Native'], ['English', 'B2']],
  interests:
    'Stand-up comedy — performed in Venezuela, Colombia and Mexico. CrossFit after work. Weekend-league football.',
}

const ES = {
  ...SHARED,
  lang: 'es',
  role: 'Desarrollador Full-Stack Junior',
  meta: ['Colombo-venezolano', 'Remoto', 'Un mes de preaviso'],
  sections: {
    profile: 'Perfil',
    experience: 'Experiencia',
    skills: 'Tecnologías',
    education: 'Formación',
    languages: 'Idiomas',
    interests: 'Intereses',
  },
  profile:
    'Desarrollador full-stack con dos años y medio entregando software en producción en web, móvil y API. Actualmente en CoVet, un copiloto de IA que escribe historias clínicas veterinarias, trabajando en los tres repositorios: la app en Flutter que usan las clínicas, la API en TypeScript detrás y la consola de administración interna.',
  jobs: [
    {
      org: 'CoVet',
      title: 'Desarrollador Full-Stack Junior',
      dates: '2025 – presente',
      note: 'Copiloto de IA que escribe historias clínicas veterinarias.',
      stack: 'Flutter · Dart · Nest.js · TypeScript · Google Cloud · Firestore · Algolia · Postmark',
      bullets: [
        'Lideré el rediseño de las páginas de salida —las pantallas donde el veterinario lee, edita, comparte y exporta una historia generada— entregado en seis incrementos detrás de un feature flag.',
        'Construí el odontograma de punta a punta: la interfaz en Flutter y, en el backend, un generador de PDF que produce una versión clínica y otra para el cliente.',
        'Extendí roles y permisos en API, app y consola de administración: cuentas de soporte, enterprise, pasantes y escuelas de veterinaria.',
        'Entregué integraciones con sistemas de gestión veterinaria: un tablero de métricas con exportación a CSV y exportación de historias directo al sistema de la clínica.',
        'Entré cuando el producto estaba hecho en FlutterFlow y fui parte del equipo que lo migró a un código Flutter escrito a mano.',
      ],
    },
    {
      org: 'Digidea Apps',
      title: 'Desarrollador Full-Stack',
      dates: '2024 – 2025',
      note: 'Atlas, una app que usan docentes en todo Ecuador.',
      stack: '',
      bullets: [
        'Implementé el flujo que genera las notas de los estudiantes para el programa nacional de becas 2024–2025 de Ecuador: un cálculo que un docente corre una sola vez y no puede equivocarse, porque de eso depende una beca.',
      ],
    },
  ],
  skills: [
    ['Cliente', 'React.ts · Flutter · FlutterFlow · HTML · CSS · JavaScript'],
    ['API', 'Nest.js · Express.ts · TypeScript'],
    ['Plataforma', 'Google Cloud · Firestore · Algolia · Postmark'],
    ['Herramientas', 'Postman · Insomnia · Firefoo'],
  ],
  education: [
    ['Ingeniería en Computación', 'UABC · México', '6 semestres'],
    ['Ingeniería en Computación', 'UNET · Venezuela', '3 semestres'],
    ['HTML, CSS y JavaScript', 'freeCodeCamp', 'Certificado'],
  ],
  languages: [['Español', 'Nativo'], ['Inglés', 'B2']],
  interests:
    'Stand-up: he hecho funciones en Venezuela, Colombia y México. CrossFit después del trabajo. Fútbol de fin de semana.',
}

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function render(d) {
  const S = d.sections
  return `<!doctype html>
<html lang="${d.lang}">
<head>
<meta charset="utf-8">
<title>${esc(d.name)} — CV</title>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  @page { size: A4; margin: 13mm 14mm 12mm; }
  * { box-sizing: border-box; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body {
    margin: 0; font-family: 'Space Grotesk', system-ui, sans-serif;
    font-size: 9.3pt; line-height: 1.42; color: #14180F;
  }
  a { color: #2F6B31; text-decoration: none; }
  .name { margin: 0; font-size: 23pt; font-weight: 700; letter-spacing: -0.02em; line-height: 1.05; }
  .role { margin: 2pt 0 0; font-family: 'JetBrains Mono', monospace; font-size: 9pt;
          letter-spacing: 0.1em; text-transform: uppercase; color: #2F6B31; }
  .contact { margin: 6pt 0 0; font-family: 'JetBrains Mono', monospace; font-size: 8.2pt; color: #4A4E44; }
  .contact span + span::before { content: ' · '; color: #9AA093; }
  h2 { margin: 11pt 0 4.5pt; padding-bottom: 2.5pt; border-bottom: 0.8pt solid #D7DCD0;
       font-family: 'JetBrains Mono', monospace; font-size: 8pt; font-weight: 700;
       letter-spacing: 0.18em; text-transform: uppercase; color: #2F6B31; }
  p { margin: 0; text-wrap: pretty; }
  .job { margin-top: 7pt; page-break-inside: avoid; }
  .job:first-of-type { margin-top: 0; }
  .jobhead { display: flex; justify-content: space-between; align-items: baseline; gap: 10pt; }
  .org { font-size: 11pt; font-weight: 700; }
  .title { font-weight: 500; color: #3C4136; }
  .dates { font-family: 'JetBrains Mono', monospace; font-size: 8.2pt; color: #4A4E44; white-space: nowrap; }
  .note { margin: 1.5pt 0 0; color: #4A4E44; }
  .stack { margin: 2pt 0 0; font-family: 'JetBrains Mono', monospace; font-size: 7.8pt; color: #5D6356; }
  ul { margin: 4pt 0 0; padding-left: 11pt; }
  li { margin: 0 0 2.5pt; text-wrap: pretty; }
  li::marker { color: #62BA61; }
  .row { display: flex; gap: 8pt; margin-bottom: 2.5pt; }
  .row .k { flex: 0 0 62pt; font-family: 'JetBrains Mono', monospace; font-size: 8pt;
            letter-spacing: 0.06em; text-transform: uppercase; color: #5D6356; padding-top: 0.5pt; }
  .row .v { flex: 1; }
  .edu { display: flex; justify-content: space-between; align-items: baseline; gap: 10pt; margin-bottom: 3pt; }
  .edu b { font-weight: 600; }
  .edu .where { font-family: 'JetBrains Mono', monospace; font-size: 8.2pt; color: #5D6356; }
  .edu .det { font-family: 'JetBrains Mono', monospace; font-size: 8.2pt; color: #2F6B31; white-space: nowrap; }
</style>
</head>
<body>
  <header>
    <h1 class="name">${esc(d.name)}</h1>
    <p class="role">${esc(d.role)}</p>
    <p class="contact"><span><a href="mailto:${d.email}">${esc(d.email)}</a></span><span><a href="${d.linkedinUrl}">${esc(d.linkedin)}</a></span>${d.meta.map((m) => `<span>${esc(m).replace(/ /g, '&nbsp;')}</span>`).join('')}</p>
  </header>

  <h2>${esc(S.profile)}</h2>
  <p>${esc(d.profile)}</p>

  <h2>${esc(S.experience)}</h2>
  ${d.jobs
    .map(
      (j) => `<div class="job">
    <div class="jobhead"><div><span class="org">${esc(j.org)}</span> — <span class="title">${esc(j.title)}</span></div><div class="dates">${esc(j.dates)}</div></div>
    <p class="note">${esc(j.note)}</p>
    ${j.stack ? `<p class="stack">${esc(j.stack)}</p>` : ''}
    <ul>${j.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
  </div>`,
    )
    .join('\n  ')}

  <h2>${esc(S.skills)}</h2>
  ${d.skills.map(([k, v]) => `<div class="row"><div class="k">${esc(k)}</div><div class="v">${esc(v)}</div></div>`).join('\n  ')}

  <h2>${esc(S.education)}</h2>
  ${d.education.map(([what, where, det]) => `<div class="edu"><div><b>${esc(what)}</b> <span class="where">— ${esc(where)}</span></div><div class="det">${esc(det)}</div></div>`).join('\n  ')}

  <h2>${esc(S.languages)}</h2>
  ${d.languages.map(([n, l]) => `<div class="row"><div class="k">${esc(n)}</div><div class="v">${esc(l)}</div></div>`).join('\n  ')}

  <h2>${esc(S.interests)}</h2>
  <p>${esc(d.interests)}</p>
</body>
</html>`
}

for (const d of [EN, ES]) {
  const out = `cv/cv-${d.lang}.html`
  writeFileSync(out, render(d))
  console.log('wrote', out)
}
