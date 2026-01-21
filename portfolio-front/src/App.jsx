import { useState } from 'react'
import './App.css'
import Particles from './Particles.jsx'
import Header from './Header.jsx'
import AboutMe from './AboutMe.jsx'
import Cards from './Cards.jsx'
import conversorImg from './assets/Conversor.png'
import visiaImg from './assets/Visia.jpeg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}>

        <Particles
          particleColors={["#77767b"]}
          particleCount={300}
          particleSpread={20}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      <AboutMe />
      <h1 id="projetos-title">Projetos</h1>
      <div id="projetos">
        <Cards
          img_path={conversorImg}
          title="Conversor de Moedas"
          description="Projeto feito com Python e Tkinter"
          link="https://github.com/yago-almeida-melo/Conversor-de-Moedas"
        />
        <Cards 
          img_path={visiaImg} 
          title="Visia" 
          description="App Mobile para auxiliar deficientes visuais com a leitura de bulas" 
          link="https://github.com/yago-almeida-melo/LDDM_2025-1_G1" />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>

    </>

  )
}

export default App
