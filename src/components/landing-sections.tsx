import type { CSSProperties, ReactNode } from "react";
import {
  ArrowRight,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  ShieldCheck,
} from "lucide-react";
import {
  contact,
  ecosystem,
  faqs,
  fieldGallery,
  footerLinks,
  media,
  navItems,
  projects,
  proofPoints,
  services,
  socialProof,
} from "../content/conectaPintores";
import {
  AuroraBackdrop,
  ColorBendsBand,
  Highlighter,
  SparklesEffect,
  SpotlightCard,
  ThreeDCard,
  WhiteSectionBackdrop,
} from "./visual-effects";

function SectionIntro({
  kicker,
  title,
  copy,
  align = "left",
}: {
  kicker: string;
  title: ReactNode;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-intro ${align === "center" ? "section-intro--center" : ""}`}>
      <span className="section-kicker">{kicker}</span>
      <h2 className="section-title">{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <a className="brand-lockup" href="#inicio" aria-label="Conecta Pintores - início">
        <span className="brand-mark">
          <img src="/assets/conecta-pintores/favicon-32.png" alt="" aria-hidden="true" />
        </span>
        <span>
          <strong>Conecta Pintores</strong>
          <small>Arte | Comunidade</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Navegação principal">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="button button-primary header-cta" href={contact.whatsappHref} target="_blank" rel="noreferrer">
        <MessageCircle size={16} />
        Falar no WhatsApp
      </a>

      <button className="menu-button" type="button" aria-label="Abrir menu">
        <Menu size={20} />
      </button>
    </header>
  );
}

export function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <AuroraBackdrop />
      <SparklesEffect density="low" />
      <div className="section-inner hero-grid">
        <div className="hero-copy">
          <span className="hero-badge">Pintura, obra e conexão profissional</span>
          <h1>
            Pintura profissional com <Highlighter>confiança</Highlighter>, conexão e visão de futuro.
          </h1>
          <p>
            A Conecta Pintores aproxima clientes, pintores e lojas de tintas para tornar cada projeto mais
            profissional, seguro e bem conduzido.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={contact.whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
            <a className="button button-secondary" href="#sobre">
              Conhecer a Conecta
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label={media.hero.alt}>
          <img src={media.hero.src} alt={media.hero.alt} loading="eager" />
          <div className="hero-visual__note">
            <ShieldCheck size={18} />
            {media.hero.caption}
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="section about-section" id="sobre">
      <WhiteSectionBackdrop />
      <div className="section-inner">
        <SectionIntro
          kicker="Sobre"
          title={
            <>
              Uma marca para <Highlighter>organizar e valorizar</Highlighter> o mercado da pintura.
            </>
          }
          copy="A Conecta Pintores nasceu da experiência prática no mercado de pintura e da percepção de que clientes, pintores e lojistas precisam de uma ponte mais confiável, moderna e profissional."
          align="center"
        />

        <div className="proof-grid">
          {proofPoints.map((point) => {
            const Icon = point.icon;
            return (
              <SpotlightCard className="proof-card" key={point.title}>
                <span className="card-icon">
                  <Icon size={20} />
                </span>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Founder() {
  return (
    <section className="section founder-section" id="fundador">
      <WhiteSectionBackdrop />
      <div className="section-inner founder-grid">
        <div className="founder-photo" aria-label={media.founder.alt}>
          <img src={media.founder.src} alt={media.founder.alt} loading="lazy" />
          <div className="founder-caption">
            <span>Idealizador</span>
            <strong>Vinicius Palma</strong>
            <small>{media.founder.caption}</small>
          </div>
        </div>

        <div className="founder-copy">
          <span className="section-kicker">Fundador</span>
          <h2 className="section-title">
            Vinicius Palma, a <Highlighter>liderança</Highlighter> por trás da Conecta Pintores.
          </h2>
          <p className="section-copy">
            Fundador da Conecta Pintores, Vinicius une experiência prática no setor, relacionamento com
            pintores e lojistas e visão comercial para construir uma marca forte, próxima da obra e preparada
            para crescer.
          </p>
          <ul className="founder-list">
            <li>Experiência prática no mercado de pintura.</li>
            <li>Relação próxima com profissionais, clientes e lojistas.</li>
            <li>Visão comercial para fortalecer a marca e a rede.</li>
          </ul>
          <div className="inline-actions">
            <a className="button button-primary" href={contact.whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle size={17} />
              Falar com Vinicius
            </a>
            <a className="button button-light" href={contact.founderInstagramHref} target="_blank" rel="noreferrer">
              <Instagram size={17} />
              {contact.founderInstagram}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section className="section projects-section" id="projetos">
      <div className="section-inner">
        <SectionIntro
          kicker="Projetos e obras"
          title="Trabalhos que mostram o jeito Conecta de pintar."
          copy="Registros reais organizados como vitrine inicial da marca, com descrições editáveis para receber detalhes autorizados de cada obra."
        />

        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <ThreeDCard className="project-card" key={project.name} style={{ "--delay": `${index * 40}ms` } as CSSProperties}>
                <div className="project-media">
                  {project.media ? (
                    <img src={project.media.src} alt={project.media.alt} loading="lazy" />
                  ) : (
                    <>
                      <Icon size={34} />
                      <span>{project.imageLabel}</span>
                    </>
                  )}
                </div>
                <div className="project-content">
                  <span className="project-tag">{project.category}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </ThreeDCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="section services-section" id="servicos">
      <WhiteSectionBackdrop />
      <div className="section-inner">
        <SectionIntro
          kicker="Serviços e diferenciais"
          title={
            <>
              Pintura com <Highlighter>atendimento direto</Highlighter>, organização e visão de rede.
            </>
          }
          copy="A primeira versão da Conecta Pintores fortalece a contratação de serviços e prepara o caminho para uma rede mais conectada entre clientes, pintores e parceiros."
          align="center"
        />

        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <SpotlightCard className="service-card" key={service.title}>
                <span className="card-icon">
                  <Icon size={20} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Ecosystem() {
  return (
    <section className="section section-dark ecosystem-section" id="ecossistema">
      <ColorBendsBand />
      <SparklesEffect />
      <div className="section-inner">
        <SectionIntro
          kicker="Ecossistema"
          title="Hoje, serviço e conexão. Amanhã, uma plataforma para organizar o mercado da pintura."
          copy="A Conecta Pintores começa com presença institucional, atendimento e autoridade. A visão futura é conectar melhor clientes, pintores, lojistas e fabricantes."
          align="center"
        />

        <div className="ecosystem-grid">
          {ecosystem.map((item) => {
            const Icon = item.icon;
            return (
              <SpotlightCard className="ecosystem-card" key={item.title}>
                <span className="card-icon card-icon--dark">
                  <Icon size={20} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </SpotlightCard>
            );
          })}
        </div>

        <p className="notice">A plataforma ainda está em planejamento. O site é a base inicial da Conecta Pintores.</p>
      </div>
    </section>
  );
}

export function AudienceCtas() {
  const items = [
    {
      kicker: "Para pintores",
      title: "Você é pintor? A Conecta Pintores quer caminhar com profissionais de verdade.",
      text: "A marca busca valorizar pintores comprometidos, profissionais e preparados para atender clientes com qualidade, respeito e responsabilidade.",
      cta: "Quero fazer parte",
      href: contact.painterFormHref,
    },
    {
      kicker: "Para lojistas",
      title: "Sua loja de tintas pode estar no centro dessa conexão.",
      text: "A Conecta Pintores quer aproximar lojistas de clientes e pintores, criando uma rede de oportunidades comerciais no mercado da pintura.",
      cta: "Conversar sobre parceria",
      href: contact.whatsappHref,
    },
    {
      kicker: "Para clientes",
      title: "Vai pintar? Comece falando com quem entende do assunto.",
      text: "Se você precisa de pintura residencial, comercial ou corporativa, a Conecta Pintores quer ajudar a aproximar você de soluções mais confiáveis.",
      cta: "Solicitar contato",
      href: contact.whatsappHref,
    },
  ];

  return (
    <section className="audience-section" aria-label="Chamadas para pintores, lojistas e clientes">
      {items.map((item, index) => (
        <div className={`audience-band ${index === 0 ? "audience-band--dark" : ""}`} key={item.kicker}>
          {index === 0 ? <SparklesEffect density="low" /> : <WhiteSectionBackdrop />}
          <div className="section-inner audience-grid">
            <div>
              <span className="section-kicker">{item.kicker}</span>
              <h2>{item.title}</h2>
            </div>
            <div>
              <p>{item.text}</p>
              <a className={`button ${index === 0 ? "button-primary" : "button-light"}`} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
                {item.cta}
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export function SocialProof() {
  return (
    <section className="section social-proof-section" aria-label="Provas sociais">
      <div className="section-inner">
        <SectionIntro
          kicker="Provas sociais"
          title={
            <>
              Bastidores, obras e <Highlighter>registros reais</Highlighter> da Conecta Pintores.
            </>
          }
          copy="A página não inventa resultados. As fotos e o vídeo entram como prova visual da marca em campo, enquanto depoimentos autorizados podem ser adicionados depois."
          align="center"
        />

        <div className="field-media-showcase" aria-label="Registros reais da Conecta Pintores">
          <div className="video-card">
            <video
              src={media.video.src}
              aria-label={media.video.alt}
              controls
              muted
              playsInline
              preload="metadata"
              poster={media.hero.src}
            />
            <div>
              <span className="section-kicker">Bastidores</span>
              <h3>Obra real, marca em movimento.</h3>
              <p>{media.video.caption}</p>
            </div>
          </div>

          <div className="field-gallery">
            {fieldGallery.map((item) => (
              <figure key={item.src}>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="social-proof-grid">
          {socialProof.map((item) => {
            const Icon = item.icon;
            return (
              <SpotlightCard className="testimonial-card" key={item.quote}>
                <Quote size={24} />
                <p>{item.quote}</p>
                <footer>
                  <Icon size={18} />
                  <span>
                    <strong>{item.author}</strong>
                    <small>{item.role}</small>
                  </span>
                </footer>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="section faq-section" aria-label="Perguntas frequentes">
      <WhiteSectionBackdrop />
      <div className="section-inner faq-wrap">
        <SectionIntro kicker="FAQ" title="Perguntas frequentes" align="center" />

        <div className="faq-list">
          {faqs.map((item) => {
            const Icon = item.icon;
            return (
              <details key={item.question}>
                <summary>
                  <span>
                    <Icon size={18} />
                    {item.question}
                  </span>
                </summary>
                <p>{item.answer}</p>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="section section-dark contact-section" id="contato">
      <AuroraBackdrop />
      <SparklesEffect />
      <div className="section-inner contact-grid">
        <div>
          <span className="section-kicker">Contato</span>
          <h2 className="section-title">Vamos construir o futuro da pintura juntos?</h2>
          <p className="section-copy">
            Se você é cliente, pintor, lojista ou parceiro do setor de tintas, fale com a Conecta Pintores e
            acompanhe os próximos passos dessa marca.
          </p>
          <div className="inline-actions">
            <a className="button button-primary" href={contact.whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
            <a className="button button-secondary" href={contact.emailHref}>
              <Mail size={18} />
              Enviar e-mail
            </a>
            <a className="button button-secondary" href={contact.brandInstagramHref} target="_blank" rel="noreferrer">
              <Instagram size={18} />
              Ver Instagram
            </a>
          </div>
        </div>

        <div className="contact-card" aria-label="Dados de contato">
          <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
            <Phone size={18} />
            <span>
              <small>WhatsApp</small>
              <strong>{contact.whatsappDisplay}</strong>
            </span>
          </a>
          <a href={contact.emailHref}>
            <Mail size={18} />
            <span>
              <small>E-mail</small>
              <strong>{contact.email}</strong>
            </span>
          </a>
          <a href={contact.brandInstagramHref} target="_blank" rel="noreferrer">
            <Instagram size={18} />
            <span>
              <small>Instagram da marca</small>
              <strong>{contact.brandInstagram}</strong>
            </span>
          </a>
          <a href={contact.founderInstagramHref} target="_blank" rel="noreferrer">
            <Instagram size={18} />
            <span>
              <small>Instagram do fundador</small>
              <strong>{contact.founderInstagram}</strong>
            </span>
          </a>
          <div>
            <ShieldCheck size={18} />
            <span>
              <small>Cidade/região</small>
              <strong>{contact.region}</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const footerMap = new Map(navItems.map((item) => [item.label, item.href]));

  return (
    <footer className="site-footer">
      <div className="section-inner footer-grid">
        <div>
          <a className="brand-lockup" href="#inicio" aria-label="Conecta Pintores - início">
            <span className="brand-mark">
              <img src="/assets/conecta-pintores/favicon-32.png" alt="" aria-hidden="true" />
            </span>
            <span>
              <strong>Conecta Pintores</strong>
              <small>Arte | Comunidade</small>
            </span>
          </a>
          <p>Uma marca para aproximar clientes, pintores e parceiros com mais profissionalismo.</p>
          <strong className="footer-domain">www.conectapintores.com.br</strong>
        </div>

        <nav aria-label="Links do rodapé">
          {footerLinks.map((label) => (
            <a href={footerMap.get(label) ?? "#inicio"} key={label}>
              {label}
            </a>
          ))}
        </nav>

        <div className="footer-contact">
          <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
            <MessageCircle size={16} />
            {contact.whatsappDisplay}
          </a>
          <a href={contact.emailHref}>
            <Mail size={16} />
            {contact.email}
          </a>
          <a href={contact.brandInstagramHref} target="_blank" rel="noreferrer">
            <Instagram size={16} />
            {contact.brandInstagram}
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Conecta Pintores. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}
