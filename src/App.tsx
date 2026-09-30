import { About } from './components/About'
import { Background } from './components/Background'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Stack } from './components/Stack'
import { Work } from './components/Work'

export default function App() {
  return (
    <main className="min-h-dvh bg-ground">
      <Hero />
      <Stack />
      <Work />
      <About />
      <Background />
      <Contact />
    </main>
  )
}
