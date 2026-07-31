
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Tour } from './components/sections/Tour'
import { Info } from './components/sections/Info'
import { Action } from './components/sections/Action'
import { Footer } from './components/Footer'
import { HeroGradient } from './components/HeroGradient'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <HeroGradient />
      <Tour />
      <Info />
      <Action />
      <Footer />
    </>
  )
}

export default App
