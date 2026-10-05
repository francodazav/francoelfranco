import type { Content } from './types'

/* NOTE: la voz de las frases con humor es una primera versión, no la de Franco.
   El titular y las tres líneas de "Fuera del trabajo" son las que conviene
   reescribir: el chiste vive en el ritmo, no en la traducción literal. */

export const es: Content = {
  htmlLang: 'es',
  documentTitle: 'Franco Daza — Desarrollador full-stack',
  metaDescription:
    'Franco Daza — desarrollador full-stack junior. React, Flutter, Nest.js y Google Cloud. Actualmente en CoVet.',
  name: 'Franco Daza',
  role: 'Desarrollador full-stack junior',
  location: 'Colombia / Venezuela',
  email: 'francodazav@gmail.com',
  nav: [
    { id: 'work', label: 'trabajo' },
    { id: 'stack', label: 'stack' },
    { id: 'about', label: 'sobre mí' },
    { id: 'background', label: 'perfil' },
    { id: 'contact', label: 'contacto' },
  ],
  menu: { open: 'Abrir menú', close: 'Cerrar menú', theme: 'Tema', language: 'Idioma' },
  themeLabels: { light: 'Tema claro', dark: 'Tema oscuro', system: 'Seguir al sistema' },

  hero: {
    headline: 'Construyo la API, la app, y la cosa que manda el correo.',
    sub: 'TypeScript de punta a punta. Ahora en CoVet — un copiloto de IA que escribe las historias clínicas veterinarias para que los veterinarios puedan irse a casa a tiempo.',
    primary: 'Ver el trabajo',
    secondary: 'Descargar CV',
  },

  whoami: {
    prompt: '$ whoami',
    line1: 'Franco Daza — {age}',
    line2: 'colombo-venezolano',
    line3: 'full-stack junior · @covet',
  },
  terminal: [
    { prompt: '$ experiencia --años', value: '2.5  →  digidea apps (1.5) · covet (1.0)' },
    { prompt: '$ stack --core', value: 'react.ts · nest.js · express.ts · flutter', tone: 'accent' },
    { prompt: '$ stack --cloud', value: 'gcloud · firestore · algolia · postmark', tone: 'accent', hideOnMobile: true },
    { prompt: '$ idiomas', value: 'es nativo · en b2' },
  ],
  status: { prompt: '$ estado', value: 'disponible para trabajar →' },

  stackHead: { eyebrow: '// stack', heading: 'Tres capas, una persona.' },
  stackLayers: [
    {
      index: '01', label: 'Cliente',
      pills: [{ name: 'React.ts', core: true }, { name: 'Flutter', core: true }, { name: 'FlutterFlow' }, { name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' }],
    },
    {
      index: '02', label: 'API',
      pills: [{ name: 'Nest.js', core: true }, { name: 'Express.ts', core: true }],
    },
    {
      index: '03', label: 'Plataforma',
      pills: [{ name: 'Google Cloud' }, { name: 'Firestore' }, { name: 'Algolia' }, { name: 'Postmark' }],
    },
  ],
  stackTooling: { label: 'Herramientas', pills: [{ name: 'Postman' }, { name: 'Insomnia' }, { name: 'Firefoo' }] },

  work: {
    eyebrow: '// trabajo',
    heading: 'Dos productos, usuarios reales.',
    meta: '2.5 años · web, móvil y API',
    items: [
      {
        title: 'CoVet',
        role: 'Desarrollador full-stack junior · 2025 — presente',
        tag: 'Flutter · NestJS · GCP',
        body: 'Un copiloto de IA para veterinarios: escucha la consulta y escribe la historia clínica, para que el veterinario pase la tarde en su casa y no llenando papeles. Trabajo en los tres repositorios: la app en Flutter que usan las clínicas, la API en TypeScript detrás, y la consola de administración interna. Entré cuando el producto estaba hecho en FlutterFlow y fui parte del equipo que lo movió a un código Flutter escrito a mano.',
        bullets: [
          { before: 'Lideré el ', strong: 'rediseño de las páginas de salida', after: ' — las pantallas donde el veterinario lee, edita, comparte y exporta una historia generada — entregado en seis incrementos detrás de un flag.' },
          { before: 'Construí el ', strong: 'odontograma', after: ' de punta a punta: la interfaz en Flutter y, en el backend, un generador de PDF que produce una versión clínica y otra para el cliente.' },
          { before: 'Extendí ', strong: 'roles y permisos', after: ' en API, app y administración — cuentas de soporte, enterprise, pasantes y escuelas de veterinaria.' },
          { before: 'Entregué ', strong: 'integraciones con sistemas de gestión', after: ': un tablero de métricas con exportación a CSV y exportación de historias directo al sistema de la clínica.' },
        ],
        chips: ['Flutter', 'Dart', 'Nest.js', 'TypeScript', 'Firestore', 'Google Cloud', 'Algolia', 'Postmark'],
      },
      {
        title: 'Atlas — Digidea Apps',
        role: 'Desarrollador full-stack · 2024 — 2025',
        tag: 'Ecuador · EdTech',
        body: 'Una app que usan docentes en todo Ecuador. Implementé el flujo que genera las notas de los estudiantes para el programa nacional de becas 2024–2025 — el cálculo que un docente corre una sola vez y no puede equivocarse, porque de eso depende una beca.',
        bullets: [],
        chips: [],
      },
    ],
  },

  about: {
    eyebrow: '// sobre mí',
    heading: 'Cómo llegué hasta acá.',
    meta: 'Venezuela → México → Colombia',
    paragraphs: [
      'Aprendí a resolver un cubo de Rubik a los dieciséis. Lo que me atrapó no fue el cubo — fue descubrir que un desorden tiene un método detrás, y que una vez que conoces el método puedes resolver cualquier combinación, no solo la que tienes en las manos. Todavía no tenía la palabra ALGORITHM, pero ese fue el momento.',
      'En lo que soy bueno es en caer en código que nunca había visto y volverme útil rápido. En CoVet eso fueron tres repositorios en un año — una app en Flutter, una API en TypeScript y una consola de administración interna — con trabajo entregado en los tres.',
      'Estudié ingeniería en computación en la UNET en Venezuela y seguí en la UABC después de mudarme a México. A esa altura ya sabía a qué me quería dedicar, así que me fui a hacerlo.',
      'Estoy buscando mi próximo rol. He construido móvil, web y backend, y me acomodo en cualquier punto de ese rango. Lo que me importa es entregar algo que la gente use de verdad — veterinarios que recuperan su tarde, docentes que cargan notas sin miedo.',
    ],
    emphasis: 'algoritmo',
    quote: 'He hecho stand-up en Venezuela, Colombia y México. Leer a un público y explicar una decisión técnica resultan ser la misma habilidad: hay que saber qué sabe ya la otra persona.',
  },

  background: {
    eyebrow: '// perfil',
    heading: 'Los detalles.',
    meta: 'Perfil, formación e idiomas',
    factsLabel: 'Perfil',
    facts: [
      { label: 'Nacimiento', value: 'Venezuela' },
      { label: 'Nacionalidad', value: 'Colombiana y venezolana' },
      { label: 'Edad', value: '{age}' },
      { label: 'Disponibilidad', value: 'Un mes de preaviso' },
      { label: 'Modalidad', value: 'Remoto' },
    ],
    educationLabel: 'Formación',
    education: [
      { what: 'Ingeniería en Computación', where: 'UNET · Venezuela', detail: '3 semestres' },
      { what: 'Ingeniería en Computación', where: 'UABC · México', detail: '6 semestres' },
      { what: 'HTML, CSS y JavaScript', where: 'freeCodeCamp', detail: 'Certificado' },
    ],
    languagesLabel: 'Idiomas',
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'B2' },
    ],
    languagesNote: 'Colombo-venezolano, estudié en México y Venezuela. Hoy construyo para clínicas veterinarias; antes, para escuelas en Ecuador.',
    offTheClock: [
      { icon: 'mic', title: 'Stand-up', body: 'Cinco minutos, sin apuntes, y una sala que tiene que reírse. El mejor entrenamiento que he tenido para las dailies.' },
      { icon: 'dumbbell', title: 'CrossFit', body: 'Antes del trabajo, casi todas las semanas. Aparecer cuando cuesta resulta ser una habilidad transferible.' },
      { icon: 'football', title: 'Fútbol', body: 'Liga de fin de semana. Nadie marca solo, y nadie entrega solo tampoco.' },
    ],
  },

  contact: {
    eyebrow: '// contacto',
    heading: 'Hablemos.',
    sub: 'Disponible para roles full-stack, remoto o presencial. Escríbeme en español o en inglés — como prefieras.',
    links: [
      { id: 'linkedin', label: 'LinkedIn' },
    ],
    cv: 'Descargar CV',
    footerLeft: 'Franco Daza · Colombia / Venezuela',
    footerRight: 'es / en',
  },
}
