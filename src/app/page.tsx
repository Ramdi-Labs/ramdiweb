import { SiteHeader } from "./site-header";

const services = [
  { number: "01", title: "Software para negocios", description: "Sistemas a medida para organizar citas, inventarios y procesos de operación." },
  { number: "02", title: "Automatización con IA", description: "Flujos de trabajo para reducir tareas repetitivas y facilitar el manejo de información." },
  { number: "03", title: "Contenido digital", description: "Herramientas y procesos para facilitar la creación de imágenes, videos y publicaciones." },
];

const processSteps = [
  { number: "01", title: "Entendemos tu negocio", description: "Escuchamos lo que necesitas, cómo trabajas hoy y qué tareas te gustaría mejorar." },
  { number: "02", title: "Definimos el alcance", description: "Acordamos una primera solución, sus prioridades y lo que incluirá el proyecto." },
  { number: "03", title: "Construimos y revisamos", description: "Desarrollamos por etapas y compartimos avances para recibir tus comentarios." },
  { number: "04", title: "Entregamos y acompañamos", description: "Te mostramos cómo utilizar la solución y acordamos el seguimiento que necesite." },
];

const founders = [
  { initials: "AR", name: "Alan Ramirez" },
  { initials: "ID", name: "Israel Dillanes" },
];

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 16 16"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" /></svg>;
}

function WaveVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <svg viewBox="0 0 620 620" fill="none">
        <circle className="visual-orbit visual-orbit-outer" cx="310" cy="310" r="252" />
        <circle className="visual-orbit visual-orbit-inner" cx="310" cy="310" r="170" />
        <path className="visual-wave visual-wave-back" d="M-5 349C76 277 150 273 226 325c76 52 142 55 208 4 66-52 126-55 191-7" />
        <path className="visual-wave visual-wave-front" d="M-18 414c90-79 172-82 255-25 83 58 160 58 230 0 70-57 123-62 175-29" />
        <path className="visual-flow" d="M101 259c91-91 189-130 292-107 67 15 118 50 153 105" />
        <circle className="visual-node" cx="101" cy="259" r="7" />
        <circle className="visual-node" cx="393" cy="152" r="7" />
        <circle className="visual-node" cx="546" cy="257" r="7" />
        <circle className="visual-core" cx="310" cy="310" r="14" />
      </svg>
      <span className="visual-label visual-label-top">Ideas</span>
      <span className="visual-label visual-label-bottom">Soluciones</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <SiteHeader />

      <main id="contenido">
        <section className="hero" id="inicio">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow hero-reveal">Tecnología desde Acapulco</p>
              <h1 className="hero-reveal hero-reveal-delay-one">Convertimos ideas en <span>soluciones digitales.</span></h1>
              <p className="hero-description hero-reveal hero-reveal-delay-two">Somos Alan e Israel. Creamos Ramdi Labs para desarrollar software, automatizar procesos con inteligencia artificial y ayudar a negocios a dar su siguiente paso digital.</p>
              <div className="hero-actions hero-reveal hero-reveal-delay-three">
                <a className="button button-primary" href="#servicios">Explorar soluciones <ArrowIcon /></a>
                <a className="button button-secondary" href="#equipo">Conoce al equipo</a>
              </div>
            </div>
            <WaveVisual />
          </div>
          <div className="hero-coastline" aria-hidden="true" />
        </section>

        <section className="section services" id="servicios">
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">Áreas de enfoque</p>
              <h2>Tecnología con un propósito claro.</h2>
              <p>Nuestro enfoque es encontrar tareas que pueden funcionar mejor y construir soluciones útiles para quienes las realizan.</p>
            </div>
            <div className="service-list">
              {services.map((service) => (
                <article className="service-item" key={service.number}>
                  <span className="service-number" aria-hidden="true">{service.number}</span>
                  <h3>{service.title}</h3><p>{service.description}</p><span className="service-line" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process" id="proceso">
          <div className="section-inner process-layout">
            <div className="process-intro">
              <p className="eyebrow">Cómo trabajamos</p>
              <h2>De una necesidad a una solución.</h2>
              <p>Cada negocio tiene su propia forma de trabajar. Nuestro punto de partida es entenderla y definir juntos qué vale la pena construir.</p>
            </div>
            <ol className="process-list">
              {processSteps.map((step) => (
                <li className="process-step" key={step.number}>
                  <span className="process-number" aria-hidden="true">{step.number}</span>
                  <div><h3>{step.title}</h3><p>{step.description}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section founders" id="equipo">
          <div className="section-inner founders-layout">
            <div className="section-heading founders-heading">
              <p className="eyebrow">El equipo</p><h2>Dos amigos. Una visión compartida.</h2>
              <p>Ramdi Labs nace de nuestra amistad y de las ganas de construir algo que aporte a nuestra ciudad. Queremos acercar la tecnología a los negocios de Acapulco y convertir buenas ideas en herramientas que se puedan usar.</p>
            </div>
            <div className="founder-list">
              {founders.map((founder) => (
                <article className="founder" key={founder.name}>
                  <div className="founder-initials" aria-hidden="true"><span>{founder.initials}</span></div>
                  <div><h3>{founder.name}</h3><p>Cofundador · Ingeniero en Sistemas</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <div><p className="footer-brand">Ramdi Labs.</p><p>Acapulco, México.</p></div>
          <a href="https://github.com/Ramdi-Labs">GitHub <ArrowIcon /></a>
        </div>
      </footer>
    </>
  );
}
