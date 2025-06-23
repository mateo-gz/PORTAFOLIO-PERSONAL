import React from 'react'
import Terminal from '../components/terminal.jsx'

const Home = () => {
  return (
    <section className='home'>
      <div className="home-content">

        {/* === TERMINAL: IDENTIDAD === */}
        <Terminal>
          <div className="terminal-header">
            <h1 className="terminal-title">MATEO GZ</h1>
            <img
              className='profile-img'
              src="/perfil.jpg"
              alt="Foto de Mateo"
            />
            <p className="terminal-verse">HECHOS 20:24</p>
          </div>
        </Terminal>

        {/* === TERMINAL: MENSAJE DIRECTO === */}
        <Terminal>
          <div className="terminal-intro">
            <p className="impact-paragraph">
              Soy Mateo.<br />
              ¿Buscás a alguien que se rinda fácil? No soy yo. <br />
              ¿Querés acción real y proyectos con propósito? Entonces sí, estás donde tenés que estar.<br />

              <strong>Andá, explorá. El código habla por mí.</strong>
            </p>
          </div>
        </Terminal>

      </div>
    </section>
  )
}

export default Home
