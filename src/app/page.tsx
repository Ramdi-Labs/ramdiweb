import Image from "next/image";
import { SiteHeader } from "./site-header";

const services = [
  { number: "01", title: "Software para negocios", description: "Aplicaciones y sistemas a medida." },
  { number: "02", title: "Automatización con IA", description: "Integración de herramientas y procesos." },
  { number: "03", title: "Contenido digital", description: "Herramientas para crear y preparar contenido." },
];

const improvements = [
  { title: "Tu operación, más organizada", description: "Citas, pedidos o inventarios en un solo lugar, con información fácil de consultar." },
  { title: "Menos trabajo repetitivo", description: "Conectamos herramientas y automatizamos pasos para que no tengas que hacer lo mismo una y otra vez." },
  { title: "Tu contenido, más fácil de preparar", description: "Creamos flujos para preparar imágenes, videos y publicaciones que puedas revisar antes de compartir." },
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

const contactPreview = {
  email: "hola@ramdilabs.example",
  whatsapp: "+52 000 000 0000",
  isActive: false,
  notice: "Datos de muestra. Los canales de contacto estarán disponibles próximamente.",
} as const;

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 16 16"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" /></svg>;
}

function WaveVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="visual-halo" />
      <svg className="visual-geometry" viewBox="0 0 620 620" fill="none">
        <circle className="visual-orbit visual-orbit-outer" cx="310" cy="310" r="238" />
        <path className="visual-orbit visual-orbit-inner" d="M160 352a158 158 0 1 1 300-84" />
        <circle className="visual-node visual-node-turquoise" cx="116" cy="172" r="5" />
        <circle className="visual-node visual-node-soft" cx="460" cy="268" r="4" />
        <path className="visual-wave visual-wave-back" d="M36 366c84-48 158-49 231-6 77 45 153 46 226 2 36-22 68-30 91-27" />
        <path className="visual-wave visual-wave-front" d="M22 405c91-51 171-52 248-7 82 48 161 49 237 3 35-21 65-27 89-22" />
        <path className="visual-wave-accent" d="M22 405c91-51 171-52 248-7 82 48 161 49 237 3 35-21 65-27 89-22" />
      </svg>
      <div className="visual-brand-position">
        <div className="visual-brand-motion">
          <Image
            src="/images/ramdi-icon-transparent.png"
            alt=""
            width={1254}
            height={1254}
            sizes="(max-width: 680px) 56vw, 270px"
          />
        </div>
      </div>
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
                <a className="button button-primary" href="#contacto">Hablemos de tu idea <ArrowIcon /></a>
                <a className="button button-secondary" href="#servicios">Explorar soluciones</a>
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

        <section className="section improvements" id="mejoras">
          <div className="section-inner">
            <div className="improvements-heading">
              <div>
                <p className="eyebrow">Tu negocio, con más posibilidades</p>
                <h2>Lo que podemos mejorar en tu negocio.</h2>
              </div>
              <ul className="benefit-statement">
                <li>Más orden.</li>
                <li>Menos tareas repetidas.</li>
                <li className="benefit-emphasis">Más tiempo para tu negocio.</li>
              </ul>
            </div>
            <div className="improvement-list">
              {improvements.map((improvement) => (
                <article className="improvement-item" key={improvement.title}>
                  <h3>{improvement.title}</h3>
                  <p>{improvement.description}</p>
                </article>
              ))}
            </div>
            <p className="improvements-closing">Primero entendemos cómo trabajas. Después proponemos una solución a tu medida.</p>
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

        <section className="section contact" id="contacto">
          <div className="section-inner contact-layout">
            <div className="contact-intro">
              <p className="eyebrow">Contacto</p>
              <h2>Cuéntanos qué te gustaría mejorar.</h2>
              <p>¿Tienes una idea o un proceso que te quita demasiado tiempo? Podemos empezar por entender lo que necesitas.</p>
            </div>
            <div className="contact-details" aria-label="Vista previa de los canales de contacto">
              <div className="contact-row">
                <p className="contact-label">Email</p>
                <p className="contact-value">{contactPreview.email}</p>
              </div>
              <div className="contact-row">
                <p className="contact-label">WhatsApp</p>
                <p className="contact-value">{contactPreview.whatsapp}</p>
              </div>
              {!contactPreview.isActive && <p className="contact-notice">{contactPreview.notice}</p>}
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
